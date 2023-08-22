import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForms>
                <Field placeholder={'name'}/>
                <Field placeholder={'subject'}/>
                <Field placeholder={'message'} as={'textarea'}/>
                <Button type={'submit'}>Send message</Button>
            </StyledForms>
        </StyledContacts>
    );
};

const StyledContacts = styled.section `
  min-height: 50vh;
  background-color: #c5d4da;

`
const StyledForms = styled.form `
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto; // how to center elements

`
const Field = styled.input `


`
