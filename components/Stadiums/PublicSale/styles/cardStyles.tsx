import styled from "styled-components";

const StyledStadiumCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  position: relative;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 4px 4px 12px 0 rgba(139, 139, 139, 0.2);
    transition: box-shadow 0.2s ease;
  }

  .title {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 150px;
      height: 35px;
      border-radius: 0px 0px 5px 0px;
      background: ${(props) => props.nameBackground};

      h2 {
        font-weight: 600;
        color: #fff;
        font-size: 0.8em;
      }
    }

    .stadiums__left {
      min-width: 90px;
      height: 35px;
      border-radius: 0 0 0 5px;
      background: #2b2b2b;
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        font-size: 0.8em;
        font-weight: 600;
        color: #ffffff;
      }
    }

    .soldOut {
      background: #e94c4c;
    }
  }

  .image {
    width: 100%;
    margin: 50px auto 20px auto;
    position: relative;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5e5e5e;
    font-weight: 600;
    font-size: 2.5em;
    margin-top: 20px;

    span {
      color: #848484;
      font-weight: 500;
      font-size: 0.5em;
      margin-left: 10px;
    }

    svg {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 2em;
    }
  }
`;

export { StyledStadiumCard };
