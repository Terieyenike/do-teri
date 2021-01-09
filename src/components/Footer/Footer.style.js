import styled from 'styled-components';

export const Section = styled.section`
  padding: 2em 0 0;
  margin-top: 2em;
  color: #cebbc9;
`;

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FirstColumn = styled.div`
  &:first-child {
    margin: 0 0 1.5em;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const SecondColumn = styled.div`
  a {
    color: #cebbc9;
  }
`;

export const ThirdColumn = styled.div`
  a + a {
    margin-left: 2em;
  }

  a > span {
    font-size: 1.2rem;
  }

  .friend {
    margin: 1.5em 0 1em;
    font-size: 0.85rem;
  }
  @media screen and (min-width: 768px) {
    .friend {
      margin: 0 0 1em;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 0.85rem;
`;
