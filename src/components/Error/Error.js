import React from 'react';
import { Section, Div } from './Error.style';
import Container from '../Container';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <Section>
        <Container>
          <Div>
            <h1>404</h1>
            <p className='not-found'>Page not found</p>

            <p>
              Teri is a software engineer based in Lagos, Nigeria. Want to find
              out more?
            </p>
            <Link to='/'>back to homepage</Link>
          </Div>
        </Container>
      </Section>
    </>
  );
};

export default Error;
