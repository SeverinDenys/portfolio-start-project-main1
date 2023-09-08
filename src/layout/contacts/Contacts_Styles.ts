import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Contacts = styled.section `
  position: relative;
`
const Forms = styled.form `
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto; // how to center elements
  
  textarea {
    resize: none;
    height: 155px;
  }

`
const Field = styled.input `
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  
  font-family: 'Popins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  
  color: ${theme.colors.font};
  
  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`
export const S = {
    Contacts,
    Forms,
    Field,
}