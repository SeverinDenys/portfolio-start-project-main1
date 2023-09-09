import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj-1.webp'
import timerImg from './../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'
import {AnimatePresence, motion} from "framer-motion"


const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "Landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    },
]

const worksData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in.",
        type: "spa",
        id: 1
    },
    {
        title: 'Timer',
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in.",
        type: "React",
        id: 2
    },

 {
        title: 'Social Network',
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in.",
        type: "spa",
        id: 3
    },
    {
        title: 'Timer',
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in.",
        type: "React",
        id: 4
    },

 {
        title: 'Social Network',
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in.",
        type: "spa",
        id: 5
    },
    {
        title: 'Timer',
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum. Ut etiam sit amet nisl purus in.",
        type: "React",
        id: 6
    },


]
export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "Landing") {
        filteredWorks = worksData.filter(work => work.type === "Landing")
    }

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={"space-between"} align={'flex-start'} wrap={"wrap"}>

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "400px",
                                    flexGrow: 1, maxWidth: "540px"}}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          src={w.src}
                                          text={w.text}
                                          key={w.id}
                                    />

                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

