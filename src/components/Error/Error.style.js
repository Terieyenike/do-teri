import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 120px 0;
  color: #fdfffc;
`;

export const Div = styled.div`
  h1 {
    font-size: 7rem;
    font-weight: 700;
  }
  .not-found {
    font-size: 1.65rem;
    font-weight: 700;
    color: #ffc857;
    margin-bottom: 1.5em;
  }

  & > p {
    color: #cebbc9;
    margin-bottom: 2.5em;
  }

  a {
    background: #ffc857;
    padding: 0.75em 1em;
    color: #040f16;
    font-weight: 700;
    text-transform: uppercase;
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 12rem;
    }
    .not-found {
      font-size: 2.85rem;
    }
    & > p {
      max-width: 70%;
      font-size: 2.5rem;
      margin-bottom: 2em;
    }
  }

  @media screen and (min-width: 1024px) {
    & > p {
      max-width: 60%;
    }
  }

  @media screen and (min-width: 1200px) {
    & > p {
      font-size: 1.5rem;
      max-width: 55%;
    }
  }
`;
