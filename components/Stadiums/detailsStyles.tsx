import styled from "styled-components";

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.titleBackground};
  display: flex;
  align-items: center;
  padding-left: 30px;

  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 1em;
  }
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding-bottom: 20px;

  p {
    font-size: 2em;
    color: #efbf15;
    font-weight: 600;
  }

  span {
    font-size: 1.3em;
    font-weight: 500;
    color: #cacaca;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 0;

    p {
      font-size: 2.4em;
    }
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding-bottom: 30px;

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

export { Title, Price, Details };
