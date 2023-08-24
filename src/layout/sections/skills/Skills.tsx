import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify='space-between'>
                <Skill iconId = {'codeSvg'} title={'html 5'} description={'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'}/>
                <Skill iconId = {'css'} title={'css 3'}  description={'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'}/>
                <Skill iconId = {'react'} title={'React'}  description={'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. '}/>
                <Skill iconId = {'typescript'} title={'typescript'} description={'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'}/>
                <Skill iconId = {'styledComponents'} title={'styled components'}  description={'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'}/>
                <Skill iconId = {'figma'} title={'web design'}  description={'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. '}/>
            </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  
`