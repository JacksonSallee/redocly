# Getting Started

## Overview

Hello and welcome! This guide will give you what you need to get started on integrating Basys' public endpoints into your solution. Once you have been onboarded into Basys' sandbox environment and have access to the IQPro Plus WebApp follow the steps below to create and manage your API integrations. If you have not been onboarded contact Basys support at (800) 386-0711 or email: [integrationsupport@basyspro.com](mailto:integrationsupport@basyspro.com).

## How to Enable

To access Basys' APIs you must create an application within IQPro Plus. Through creating the application you are able to generate a corresponding client_id and secret_id. You will use these to generate an JWT token to access our APIs on our [APIs page](/apis) or your desired API Platform.

### Create an Applicaton
  To access the workflow to create an application log into IQPro Plus as a Gateway Admin under "Developer Hub" -> "Applications" -> "Create New"

<img src="/Screenshot-create-application.png" alt="Creating an application in the iQ Pro+ dashboard" />
NOTE: The Client ID that will be generated during this step is needed to generate your JWT authorization token

Create an application name and assign it a role. An application must be assigned the following roles with the corresponding permissions in order to generate secrets:

* Integrated Gateway Standard

  * Process all transaction types

  * Manage the customer vault

  * View Invoices

  * View Batched settlements

* Integrated Service Account

  * Process and view transactions of all types

  * Manage the customer vault

  * Create, edit, and delete invoices

  * Create, edit, and delete products

  * View batched settlements

  * Manage and view customer payable tokens

### Create and Manage Secrets
  Once you have created an application you can generate up to two active secrets. Secrets are valid for 365 days and can be deleted at anytime. After 365 days a new secret must be generated.

  To generate a secret for an application click the "+ Add Secret" in the Details View after an application has been created.

  NOTE: A secret must be named before it can be generated and can be copied from the Record Your Secret Modal! <b>This secret can only be viewed and copied once</b>!
  The secret_id that will be generated during this step is needed to generate your JWT authorization token.
  <img src="/Screenshot-create-secret-1.png" alt="Screenshot of creating a seceret"/>
  <img src="/Screenshot-create-secret-2.png" alt="Dialog for creating a secret" />

### Generating JWT Authorization Tokens
  The values generated above must be used to generate a JWT access token to access our public APIs. To generate a JWT token make a `POST` call to the following URL:
  ```markup URL
  https://account.basyspro.com/account.basyspro.com/B2C_1A_IQPROV2_INTEGRATOR/oauth2/v2.0/token
   ```
  with an `application/x-www-form-urlencoded` body containing the following parameters:
  ```Bash Request Body
  grant_type=client_credentials
  client_id=client_id
  client_secret=secret_id
  scope=https://account.basyspro.com/8939cd8f-0b21-4654-8f4d-ee01706dc3d6/.default
  ```
  The endpoint will respond with a JSON response that looks like:
  ```JSON JSON Example
    { 
      "access_token": "<string>",
      "token_type": "Bearer",
      "not_before": 1718830878,
      "expires_in": 10080,
      "expires_on": 1718840958,
      "resource": "8939cd8f-0b21-4654-8f4d-ee01706dc3d6"
    }
  ```
  This access token can be used to make requests to your customer's account using an Authorization header like:
  
  `Authorization: Bearer <access_token_string>`
  
  Where `<access_token_string>` is your access token generated from the `POST` response

  The `not_before` parameter is the time the access token will be valid

  The `expires_in` parameter is the time (in seconds) until the access_token expires.

  The `expires_on` parameter is the time the access token will be valid no longer be valid.

  NOTE: These access tokens expire after 168 minutes (10080 seconds) and must be refreshed accordingly all of our access tokens align with OAuth2 authentication standards

  For more information on OAuth2 authentications and JWT access tokens visit: [https://oauth.net/2/](https://oauth.net/2/)

### Make your first call to a Basys API
Congratulations! You are almost there. Now that you have your access token you can hit Basys APIs! You can do this one of two ways. Use our API Explorer; select the API you want to access from the list, click the "Try It >" button, input your access token as the authorization header, and click "Send" and you interact with our API from within the docs. Or use the following Base URL within the API collection that was provided during the onboarding process.

```markup Base URL (Production)
https://api.basyspro.com/iqsaas/v1/api
```

### Headers
The following headers should be included with your requests:
#### Authorization
Calls to the API must include an Authorization header with the request. Specify the following authorization header:

```Bash Authorization Header
Authorization: Bearer { JWTToken }
```
#### Content-Type
`Content-Type` should typically be set to application/json, unless you need to send your request body in a different format. All API responses will be in JSON format.

## Deleting Application and Secrets
Applications can be deleted from the Application list view by clicking the "Delete Application" button. Deleting an application will delete all of the secrets that have been configured for the corresponding application

Secrets can deleted from the Details View by clicking the X under the actions column.
NOTE: Deleting applications and secrets will break any existing integrations leveraging them.