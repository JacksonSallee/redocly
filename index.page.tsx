// Learn more about how to build React pages in Realm: https://redocly.com/docs/realm/extend/how-to/create-react-page
import React from 'react';
import styled from 'styled-components';

import { ArrowRightIcon, Button } from '@redocly/theme';
import { CardWithCode } from './@theme/components/CardWithCode/CardWithCode';
import { Card } from '@redocly/theme/markdoc/components/Cards/Card';
import { Cards } from '@redocly/theme/markdoc/components/Cards/Cards';

const code = `POST /api/transactions
{
    "id": "16833741-33a0-437c-9c82-368bed96b7f6",
    "from": "562b5682-7861-49ac-ad60-074fe12ddac2",
    "to": "7d334e64-d0d3-4941-be6c-f59facf781d6",
    "currency": "USD",
    "amount": 314.55
}
`;

export default function HomePage() {
  return (
    <div>
      <HeroContainer>
        <HeroBg />
        {/* <Image srcSet={`${require('./images/grid.svg')} light, ${require('./images/grid-dark.svg')} dark`} /> */}
        <h1>iQ Pro API</h1>
        <p>A Payment Solutions API Should Fit Your Code, not the other way around</p>
        <Button size="large" variant="primary" tone="brand" to="/guides/quickstart">
          Get started
        </Button>
        <CardWithCode
          title="Quickstart"
          description="Do you speak in code? So do we. Our integration and deployment teams are experts in their field. They provide resources that help your programmers successfully integrate client APIs."
          code={code}
        />
      </HeroContainer>
      <Container>
        <h3>About us</h3>
        <p>
        Basys is a nationwide integrated payment solutions company. We specialize in custom solutions that can adapt and grow with your business. We’re led by a team of exceptional professionals, and we believe in doing things right to better serve our customers.
        </p>
        <ul>
          <li>99% of calls are answered in 3 rings or less</li>
          <li>90% of calls are resolved on the 1st contact</li>
          <li>75+ excellent level Net Promoter Score</li>
        </ul>
      </Container>
      <Container>
        <h3>Key Features</h3>
        <Feature>
          <ArrowRightIcon />
          <p>Tokenizer: With a few lines of code you can take customer payments on your website</p>
        </Feature>
        <Feature>
          <ArrowRightIcon />
          <p>Webhooks: In a few easy steps you can get the data you need to optimize your business</p>
        </Feature>
        <br />
        <ButtonContainer>
          <Button size="large" to="/guides/quickstart">
            Get started
          </Button>
          <Button size="large" to="/apis">
            Explore documentation
          </Button>
        </ButtonContainer>
      </Container>

      <Container>
        <ContactUsSection>
          <h3>Need help?</h3>
          <ButtonContainer>
            <Button variant="outlined" size="large">
              <a href="tel:8883661325">Contact us</a>
            </Button>
            <Button variant="outlined" size="large" to="/apis">
              Read the docs
            </Button>
          </ButtonContainer>
        </ContactUsSection>
      </Container>
    </div>
  );
}

const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;


  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${require('./images/background.png')});
    background-size: cover;
    opacity: 1;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  position: relative;
  .code-line::before {
    color: var(--text-color-disabled);
  }

  span {
    color: var(--text-color-secondary);
  }

  h1 {
    color: #006;
    text-align: center;
    font-size: 92px;
    font-weight: 700;
    line-height: 102px;
    letter-spacing: 1px;
    margin-bottom: 24px;
    margin: 160px 0 24px 0;
  }

  > p {
    color: var(--text-color-primary);
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin: 0 0 24px 0;
  }
`;

const Container = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--text-color-secondary);
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;

  width: min(90%, 886px);
  margin: 64px auto 0;
  a {
    text-decoration: none;
    color: var(--button-color);
  }

  a:hover {
    color: var(--button-color-hover);
  }

  p {
    margin: 0;
  }

  h3 {
    color: var(--text-color-primary);
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 0 24px 0;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    height: 16px;
    width: 16px;
    margin-top: 6px; // Aligns the icon with the first line of text
    flex-shrink: 0; // Prevents the icon from shrinking
    path {
      fill: var(--color-persian-green-6);
    }
  }
  margin-bottom: var(--spacing-sm);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactUsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  h3 {
    margin: 0;
  }
`;
