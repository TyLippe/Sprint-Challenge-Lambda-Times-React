import React from 'react';
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;

@media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TopContainerDiv = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`;

const TopContainerDivLeft = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;

const LeftSpan = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;

const TopContainerDivCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`;

const CenterSpan = styled.span`
cursor: pointer;
margin-right: 5%;
&:hover {
 text-decoration: underline;
}
`;

const TopContainerDivRight = styled.div `
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`;

const RightSpan = styled.span`
cursor: pointer;
`;

const LastChild = styled.span`
margin-right: 0;
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopContainerDiv>
        <TopContainerDivLeft>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </TopContainerDivLeft>
        <TopContainerDivCenter>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan><LastChild>ANNOUNCEMENTS</LastChild></CenterSpan>
        </TopContainerDivCenter>
        <TopContainerDivRight>
          <RightSpan>LOG IN</RightSpan>
        </TopContainerDivRight>
      </TopContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;