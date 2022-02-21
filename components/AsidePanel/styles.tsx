import styled from "styled-components";

const StyledPanelButton = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  margin-bottom: 20px;
  position: relative;
  background: none;
  align-items: center;
  justify-content: center;
  color: #535353;
  font-weight: ${(props) => (props.active ? 600 : 500)};
  font-size: 0.9em;
  opacity: ${(props) => (props.active ? 1 : 0.4)};

  img,
  svg {
    margin-right: 15px;
    width: 24px;
    height: 24px;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 15px;
    border-left: ${(props) =>
      props.active ? "4px solid #2F57F7" : "4px solid transparent"};
    background: ${(props) =>
      props.active
        ? "linear-gradient(90.01deg, #ebebeb 0.01%, rgba(255, 255, 255, 0) 99.99%)"
        : "#fff"};

    &:hover {
      cursor: pointer;
      opacity: ${(props) => !props.active && 1};
      transition: opacity 0.1s ease-in-out;
    }
  }
`;

const StyledAsidePanel = styled.aside`
  top: 0;
  position: fixed;
  z-index: 8000;
  min-width: 240px;
  width: 240px;
  background-color: #fff;
  height: 100vh;
  padding: 30px 0 20px 0;
  transition: min-width 0.2s ease, width 0.2s ease;
  right: 0;
  overflow-x: hidden;
  transition: transform 0.4s ease;
  transform: ${(props) =>
    props.showNav ? "translateX(0)" : "translateX(100%)"};

  @media screen and (min-width: 768px) {
    top: 80px;
    left: 0;
    overflow-y: auto;
    opacity: 1;
    transform: translateX(0);
  }
`;

export { StyledAsidePanel, StyledPanelButton };
