import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--components-bg);
  padding: 1rem;

  & + div {
    margin-top: 1rem;
  }

  h4 {
    color: var(--soft-blue);
  }

  a {
    display: block;
    color: var(--soft-pink);
    text-decoration: none;
    margin-top: 1rem;
    font-weight: bold;
  }

  @media screen and (min-width: 40rem) {
    & + div {
      margin: 0;
    }
  }
`;
