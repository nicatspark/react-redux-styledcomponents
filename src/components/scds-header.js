import React from "react";
import styled from "styled-components";
import logo from "../assets/scania-wordmark.svg";
import symbol from "../assets/scania-symbol.svg";
// Utils
import { useBreakpoint } from "../utils/breakpoint";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #333;
`;

const InnerContainer = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content: {props => (props.position==='left'?'flex-start':'flex-end')};
  align-items: center;
`;

const Separator = styled.div`
  height: 20px;
  width: 1px;
  background-color: #ccc;
  margin: 0 20px;
`;

const Market = styled.div`
  white-space: nowrap;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #666;
`;

function Header() {
  // const breakpoints = useBreakpoint();
  // console.log(breakpoints);

  // const matchingList = Object.keys(breakpoints).map(media => (
  //   <li key={media}>
  //     {media} ---- {breakpoints[media] ? 'Yes' : 'No'}
  //   </li>
  // ));

  const getDeviceConfig = config => {
    if (!config) {
      return "lg";
    }

    if (config.xs) {
      return "xs";
    } else if (config.sm) {
      return "sm";
    } else if (config.md) {
      return "md";
    }
    return "lg";
  };
  const breakpoints = useBreakpoint();
  // eslint-disable-next-line
  const mq = getDeviceConfig(breakpoints);

  return (
    <StyledHeader>
      <InnerContainer position="left">
        <img src={logo} alt="logo" height="30" />
        <Separator />
        <Market mq="md">Great Britain</Market>
      </InnerContainer>
      <InnerContainer position="right">
        <img src={symbol} alt="symbol" height="40" />
      </InnerContainer>
    </StyledHeader>
  );
}

export default Header;
