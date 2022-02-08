import styled from "styled-components";

const StyledPanelButton = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding-left: 15px;
  border-left: ${(props) =>
    props.active ? "4px solid #2F57F7" : "4px solid transparent"};
  background: ${(props) =>
    props.active
      ? "linear-gradient(90.01deg, #ebebeb 0.01%, rgba(255, 255, 255, 0) 99.99%)"
      : "#fff"};

  color: #535353;
  font-weight: ${(props) => (props.active ? 600 : 500)};
  font-size: 0.9em;
  opacity: ${(props) => (props.active ? 1 : 0.4)};

  img,
  svg {
    margin-left: 15px;
    width: 24px;
    height: 24px;
  }
`;

const StyledAsidePanel = styled.aside`
  position: fixed;
  min-width: 240px;
  width: 240px;
  background-color: #fff;
  height: 100vh;
  padding: 100px 0 20px 0;
  transition: min-width 0.2s ease, width 0.2s ease;
`;

export { StyledAsidePanel, StyledPanelButton };