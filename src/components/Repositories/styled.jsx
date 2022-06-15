import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 40rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem 1rem;

    &:first-child {
      background-color: red !important;
    }
  }
`;
