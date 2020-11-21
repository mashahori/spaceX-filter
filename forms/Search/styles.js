import styled, { css } from 'styled-components';

export const Form = styled.form`
  border-bottom: 1px solid #201f2a;
  display: flex;
  padding: ${props => (props.isMain ? '0' : '25px 0')};
  margin-bottom: 10px;

  ${props =>
    props.isMain &&
    css`
      width: 856px;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    `};

  @media screen and (max-width: 420px) {
    padding: ${props => (props.isMain ? '0' : '16px 0')};
  }
`;

export const Field = styled.input`
  width: 100%;
  border: none;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  opacity: 0.5;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;

  ${props =>
    props.isMain &&
    css`
      padding-top: 5px;
      padding-bottom: 25px;
      background-color: transparent;
      
      @media screen and (max-width: 1024px) {
        padding-top: 10px;
        padding-bottom: 15px;
    `};

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    color: #201f2a;
  }

  &:focus ~ button {
    background: #fb5235;

    svg path {
      stroke: #fff;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 134%;

    ${props =>
      props.isMain &&
      css`
        padding-bottom: 10px;
      `};
  }
`;

export const Submit = styled.button`
  width: 45px;
  height: 45px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
  background: #ec381a;
  transition: all 0.2s ease;

  svg path {
    transition: all 0.2s ease;
    stroke: #fff;
  }

  &:active {
    background-color: #ec381a;
  }

  &:disabled {
    background: transparent;

    svg path {
      stroke: #201f2a;
    }
  }

  @media screen and (max-width: 420px) {
    ${props =>
      props.isMain &&
      css`
        width: 30px;
        height: 30px;
      `};

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
