import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj-1.webp'
import timerImg from './../../../assets/images/proj-2.webp'

const worksItems = ["All","Landing Page","React","Spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={'Social Network'}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in."}/>
                <Work title={"Timer"}
                      src={timerImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in."}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #b3f6e5;
`