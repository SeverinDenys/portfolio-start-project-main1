import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj-1.webp'
import timerImg from './../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'

const worksItems = ["All","Landing Page","React","Spa"]

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in."
    },
    {
        title: 'Timer',
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in."
    },


]
export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={worksItems}/>
            <FlexWrapper justify={"space-between"} align={'flex-start'} wrap={"wrap"}>
                {workData.map((w)=> {
                    return <Work title={w.title}
                                 src={w.src}
                                 text={w.text}/>
                })}
            </FlexWrapper>
            </Container>
        </S.Works>
    );
};
