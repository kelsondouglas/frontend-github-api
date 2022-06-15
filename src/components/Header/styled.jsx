import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;

  margin-bottom: 1rem;

  .logo {
    font-weight: 600;
    font-size: 1.3rem;
  }

  button {
    height: 30px;
    width: 30px;
    font-size: 25px;
    color: var(--secondary-text-color);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--primary-text-color);
    }
  }
`;
