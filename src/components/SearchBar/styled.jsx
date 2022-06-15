import styled from "styled-components";

export const Container = styled.div`
  background: var(--components-bg);
  width: 100%;
  padding-left: 1rem;
  border-radius: 5px;
  display: flex;
  border: transparent 1px solid;
  transition: 0.3s ease-in-out;

  input {
    flex: 1;
    outline: none;
    color: var(--primary-text-color);
  }

  button {
    color: white;
    cursor: pointer;
    padding: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.5);
    }
  }

  &:focus-within {
    border: var(--soft-blue) 1px solid;
  }
`;
