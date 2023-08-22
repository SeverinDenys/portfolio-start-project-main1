import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
            <Name>Denys</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>All Rights for portfolio webpage structure and design owned by SVETLANA DYABLO 2023. It-incubator</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #d5c259;
  min-height: 20vh;
`
const Name = styled.span`

`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`
const SocialItem = styled.small`

`