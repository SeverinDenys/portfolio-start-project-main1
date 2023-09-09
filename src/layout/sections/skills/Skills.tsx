import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles'
import {Fade} from "react-awesome-reveal";


const SkillData = [
    {
        IconId: "codeSvg",
        title: "html 5",
        description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
    },

    {
        IconId: "css",
        title: "css 3",
        description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
    },

    {
        IconId: "react",
        title: "React",
        description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
    },

    {
        IconId: "typescript",
        title: "typescript",
        description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
    },

    {
        IconId: "styledComponents",
        title: "styled components",
        description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
    },

    {
        IconId: "figma",
        title: "web design",
        description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
    }


]
export const Skills = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify='space-between'>
                    <Fade cascade={true} damping={0.2}>
                        {SkillData.map((s, index) => {
                            return <Skill iconId={s.IconId} key={index}
                                          title={s.title}
                                          description={s.description}/>

                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


// add for icons colors
//  background-color: ${theme.colors.accent};