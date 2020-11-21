import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const Section = styled.div`
  max-width: 380px;
  transition: all 0.3s ease;

  svg,
  path {
    transition: all 0.3s ease;
  }

  &:hover {
    color: #53b443;
    cursor: pointer;
  }

  &:hover svg {
    fill: #53b443;

    path:first-child {
      stroke: #53b443;
    }

    path:last-child {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }

  &:active {
    color: #339722;
  }

  &:active svg {
    fill: #339722;

    path:first-child {
      stroke: #339722;
    }

    path:last-child {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const StyledText = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 45px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 152%;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;
  }
`;

export const Arrow = styled.span`
  display: flex;
  width: 38px;
  height: 38px;
`;
