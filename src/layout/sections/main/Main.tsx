import React from 'react';
import myPhoto from '../../../assets/images/myPhoto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hello There</S.SmallText>
                        <S.Name>I am <span>Denys Severin</span> </S.Name>
                        <S.MainTitle>
                            <p>A Future Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Future Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                        </S.MainTitle>

                    </div>

                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={myPhoto} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

