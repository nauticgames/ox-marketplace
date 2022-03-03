import styled from "styled-components";

interface ITitleProps {
  stadiumColor: string;
}

const StyledOwnerAddress = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }

  h2 {
    font-size: 1.3em;
    color: #cacaca;
    font-weight: 500;
  }

  span {
    margin-left: 5px;
    color: #9c9c9c;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  .notfound__message {
    margin-top: 100px;
    color: rgb(180, 180, 180);
    font-weight: 600;
    font-size: 2em;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${(props: ITitleProps) => props.stadiumColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 1em;
  }

  .stadiums__left {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    h2 {
      font-weight: 600;
      color: #fff;
      font-size: 0.9em;
    }
  }
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  p {
    font-size: 2em;
    color: #efbf15;
    font-weight: 600;
  }

  span {
    font-size: 1.3em;
    font-weight: 500;
    color: #848484;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 0;

    p {
      font-size: 2.4em;
    }
  }
`;

const StyledDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    svg {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    p {
      color: #9e9e9e;
      font-size: 1em;
      margin-right: 10px;
    }

    strong {
      font-size: 1.3em;
      font-weight: 700;
      color: #535353;
    }
  }

  @media (min-width: 768px) {
    div {
      svg {
        width: 35px;
        height: 35px;
      }

      p {
        font-size: 1.2em;
      }

      strong {
        font-size: 1.6em;
      }
    }
  }
`;

const SectionCard = styled.div`
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;
  padding: 1em;

  .section__title {
    width: 100%;
    font-weight: 600;
    color: #5e5e5e;
    font-size: 1.1em;
    margin-bottom: 20px;
  }
`;

export {
  StyledOwnerAddress,
  StyledContainer,
  Title,
  Price,
  StyledDetails,
  SectionCard,
};
