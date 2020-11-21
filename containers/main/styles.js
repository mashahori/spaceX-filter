import styled from 'styled-components';

export const Main = styled.main`
  background: url('/backgrounds/grey-triangle.png') no-repeat right 2380px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    background-image: none;
  }
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    overflow: hidden;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
`;
