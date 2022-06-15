import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: var(--components-bg);

  @media screen and (min-width: 40rem) {
    grid-area: 1/1/ 3/3;
  }

  .user-avatar-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 360px;
    margin: 0 auto;

    .avatar {
      max-width: 100px;
      max-height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin: 1rem;
    }

    .avatar-user-info {
      width: 100%;
      display: flex;
      justify-content: space-between;

      @media (max-width: 360px) {
        flex-direction: column;

        .box {
          margin-top: 0.5rem;

          & + .box {
            border-left: 0 !important;
          }
        }
      }

      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;

        p {
          font-weight: bold;
        }

        & + .box {
          border-left: 1px solid var(--soft-pink);
        }
      }
    }
  }
`;
