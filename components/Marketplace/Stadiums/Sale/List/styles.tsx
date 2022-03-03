import styled from "styled-components";

const StyledGridContainer = styled.div`
  padding: 3%;
  margin: 40px auto;

  .listings__message {
    color: #bcbcbc;
    font-size: 2em;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: 50px;
      height: 50px;
      margin-bottom: 20px;
    }
  }

  .grid {
    justify-content: center;

    .card {
      margin-bottom: 40px;
      overflow: hidden;
      outline: 1px solid transparent;

      &:hover {
        transform: none;
      }
    }
  }

  @media (min-width: 768px) {
    margin: 0;

    .listings__message {
      text-align: initial;
      flex-direction: row;

      svg {
        margin-bottom: 0;
        margin-right: 20px;
      }
    }

    .grid {
      justify-content: initial;

      .card {
        &:hover {
          outline: 1px solid rgba(90, 90, 90, 0.1);
          box-shadow: 0 0 5px 2px rgba(200, 200, 200, 0.8);
          transition: box-shadow 0.2s ease, outline 0.2s ease;
        }
      }
    }
  }
`;

export default StyledGridContainer;
