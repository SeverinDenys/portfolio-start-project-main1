import React from 'react';
import styled from "styled-components";
import myPhoto from '../../../assets/images/myPhoto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={'space-around'}>
                <div>
                    <span>Hello There</span>
                    <Name>I am Denys Severin</Name>
                    <MainTitle>A Future Web Developer.</MainTitle>
                </div>

                <Photo src={myPhoto} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section `
  min-height: 100vh;
  background-color: #e7de95;
`


const Photo = styled.img `
  width: 300px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1 `
 
`

const Name = styled.h2 `
 
`