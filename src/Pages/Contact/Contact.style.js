import styled from 'styled-components';

export const Section = styled.section`
  padding: 2em 0;
  margin-top: 8.5em;
`;

export const Div = styled.div`
  display: grid;
  place-items: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 0.75em;
  }

  p {
    text-align: center;
    color: #cebbc9;
    margin-bottom: 2.5em;
  }

  a {
    background: transparent;
    border: 1px solid #ffc857;
    outline: unset;
    padding: 0.5em 2em;
    color: #ffc857;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      max-width: 70%;
    }
  }
`;
