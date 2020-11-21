import styled from 'styled-components';
import Router from 'next/router';

import mock from 'mock/index';

const Wrapper = styled.div`
  position: relative;
`;

const StyledArrowLeft = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #201f2a;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  left: 45px;
  top: 140px;
  transition: all 0.1s ease;

  @media (max-width: 1280px) {
    left: 30px;
  }

  svg {
    transition: all 0.1s ease;
  }

  &:hover {
    border-color: #53b443;
    background-color: #53b443;
    color: #ffffff;
  }

  &:active {
    border-color: #339722;
    background-color: #339722;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Layout = ({ children, backButton }) => {
  return (
    <Wrapper>
      {children}
      {backButton && (
        <a>
          <StyledArrowLeft onClick={() => Router.back()}>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.27524 12.6749L0.232105 7.48971C-0.0773673 7.17152 -0.0773672 6.65563 0.232105 6.33744L5.27524 1.15222C5.58472 0.834026 6.08647 0.834026 6.39594 1.15222C6.70541 1.47041 6.70541 1.9863 6.39594 2.30449L2.7056 6.09879L14 6.0988L14 7.72835L2.7056 7.72835L6.39594 11.5227C6.70541 11.8408 6.70541 12.3567 6.39594 12.6749C6.08647 12.9931 5.58471 12.9931 5.27524 12.6749Z"
                fill="currentColor"
              />
            </svg>
          </StyledArrowLeft>
        </a>
      )}
    </Wrapper>
  );
};

export default Layout;
