import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt</Text>
                    <Name>@Denys Proximov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className = {'active'}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`

  text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`


const Pagination = styled.span`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    
    & + span {
      margin-left: 5px;
    }
    
    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
  }
`