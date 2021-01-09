import styled from 'styled-components';

export const Main = styled.main`
  color: #fdfffc;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 120px 0;

  h1 {
    color: #ffc857;
    margin-bottom: 1em;
  }

  h2,
  h3 {
    font-weight: 600;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.35em;
  }
  h3 {
    font-size: 2rem;
    color: #cebbc9;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 3em;
    font-size: 1.125rem;
    max-width: 500px;
  }

  a {
    color: #ffc857;
    border: 1px solid #ffc857;
    border-radius: 4px;
    padding: 0.75em 1em;
  }
  @media screen and (max-width: 320px) {
    p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 4.5rem;
    }
    h3 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
