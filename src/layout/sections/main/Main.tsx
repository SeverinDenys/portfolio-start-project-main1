import React from 'react';
import myPhoto from '../../../assets/images/myPhoto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hello There</S.SmallText>
                        <S.Name>I am <span>Denys Severin</span> </S.Name>
                        <S.MainTitle>A Future Web Developer.</S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={myPhoto} alt=""/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

