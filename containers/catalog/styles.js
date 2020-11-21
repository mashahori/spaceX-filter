import styled from 'styled-components';
import { TitleH1 } from 'elements';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 45px;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const Article = styled.article`
  width: 100%;
  order: -2;

  @media screen and (max-width: 768px) {
    position: sticky;
    top: 30px;
    padding-bottom: 20px;
    background-color: #ffffff;
    z-index: 3;
  }
`;

export const Grid = styled.div`
  padding-top: 200px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 65px;
  }

  @media screen and (max-width: 420px) {
    padding-top: 35px;
  }
`;

export const FilterWrapper = styled.div`
  @media screen and (max-width: 768px) {
    position: sticky;
    top: 260px;
    margin-left: -45px;
    margin-right: -45px;
    padding: ${props => (props.active ? '16px 45px 50px' : '16px 45px')};
    background-color: #f7f8f9;
    z-index: 3;
  }

  @media screen and (max-width: 420px) {
    top: 226px;
    margin-left: -30px;
    margin-right: -30px;
    padding: ${props => (props.active ? '16px 30px 50px' : '16px 30px')};
  }
`;

export const FilterTitle = styled.button.attrs(props => ({
  transform: props.active
    ? 'rotate(-180deg) translateY(50%)'
    : 'translateY(-50%)',
}))`
  padding: ${props => (props.active ? '0 0 30px' : '0')};
  position: relative;
  font-size: 20px;
  line-height: 134%;
  text-align: left;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 7px;
    top: ${props => (props.active ? '14px' : '50%')};
    right: 0;
    background-image: url('icons/dropdown.svg');
    background-repeat: no-repeat;
    transform: ${props => props.transform};
    transition: transform 0.2s ease;
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 134%;
  }
`;

export const Aside = styled.aside`
  max-width: 254px;
  margin-right: 90px;
  float: left;
  height: 100vh;

  @media screen and (max-width: 990px) {
    max-width: 100%;
    margin-right: 0;
    float: none;
  }
`;

export const Title = styled(TitleH1)`
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Resume = styled.p`
  margin-top: 40px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const ResumeLink = styled.a`
  float: left;
  color: #53b443;
  transition: color 0.3s ease;

  &:hover,
  &:active {
    color: #339722;
  }
`;

export const Block = styled.div`
  @media screen and (max-width: 420px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    align-items: flex-start;

    > * {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;

export const List = styled.div`
  margin-bottom: 25px;
`;
