import styled from "styled-components";

const StyledSectionInfo = styled.div`
  max-width: 90%;
  margin: 5%;
  padding: 40px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 200;
  overflow: hidden;

  .image__container {
    display: flex;
    align-items: center;
  }

  img,
  h2,
  p,
  .info__btn {
    position: relative;
    z-index: 200;
  }

  h2 {
    font-size: 2.4em;
    margin: 30px 0;
    padding-bottom: 20px;
    font-weight: 600;
    color: rgb(56, 56, 56);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    span {
      font-weight: 500;
      font-size: 0.7em;
      color: rgb(121, 121, 121);
    }
  }

  p {
    font-size: 1.1em;
    color: rgb(150, 150, 150);
    font-weight: 400;
    line-height: 2em;
  }

  .info__btn {
    padding: 15px 20px;
    background-color: #f08d30;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.9em;
    color: #fff;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;

    h2 {
      margin-top: 0;

      span {
        margin-left: 5px;
      }
    }
  }

  @media (min-width: 1280px) {
    max-width: 1200px;
    flex-direction: row;

    .image__container {
      img {
        margin-right: 40px;
      }
    }

    .info__btn {
      &:hover {
        background-color: #f79840;
        cursor: pointer;
      }
    }
  }
`;

export { StyledSectionInfo };
