import styled from 'styled-components';

export const Styled = styled.div`
  font-size: 18px;
  line-height: 120%;
`;

export const StyledLink = styled.a`
  color: ${props => (props.activeLink ? '#53B443' : '#201F2A')};
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #53b443;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    display: ${props => (props.activeLink ? 'block' : 'none')};
  }
`;
