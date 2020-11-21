import styled from 'styled-components';

const Styled = styled.h3`
  font-size: 34px;
  line-height: 120%;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 120%;
  }
`;

const TitleH3 = ({ children, className }) => (
  <Styled className={className}>{children}</Styled>
);

export default TitleH3;
