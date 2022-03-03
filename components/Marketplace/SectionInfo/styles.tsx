import styled from "styled-components";

const StyledSectionInfo = styled.div`
  width: 380px;
  max-width: 90%;
  margin: 5% auto 80px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 8px 2px rgba(210, 210, 210, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 200;
  overflow: hidden;

  .gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 600px;
    z-index: 100;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 78.75%,
      rgba(253, 159, 82, 0.2) 100%
    );
  }

  .image__container {
    margin-bottom: 40px;
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

  .section__info-img {
    aspect-ratio: 16 / 9;
  }

  h2 {
    font-size: 1.8em;
    margin-bottom: 30px;
    font-weight: 600;
    color: rgb(110, 110, 110);
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  p {
    font-size: 1.1em;
    color: rgb(150, 150, 150);
    font-weight: 400;
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

  @media screen and (min-width: 768px) {
    width: 460px;
    max-width: 90%;
    flex-direction: column;
    margin: 5% 0 80px 5%;
  }

  @media screen and (min-width: 1280px) {
    width: initial;
    min-width: 400px;
    max-width: 800px;
    margin: 3% 0 40px 3%;
    min-height: 400px;
    flex-direction: row;

    .image__container {
      margin-bottom: 40px;
    }

    img {
      margin-right: 40px;
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
