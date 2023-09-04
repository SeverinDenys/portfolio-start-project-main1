import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from './Slider_Styles'

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt</S.Text>
                    <S.Name>@Denys Proximov</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className = {'active'}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};

