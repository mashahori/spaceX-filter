import styled from 'styled-components';

const Styled = styled.h4`
  font-size: 24px;
  line-height: 120%;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TitleH4 = ({ children, className }) => (
  <Styled className={className}>{children}</Styled>
);

export default TitleH4;
