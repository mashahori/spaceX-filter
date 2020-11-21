import styled from 'styled-components';

const Styled = styled.h2`
  font-size: 54px;
  line-height: 130%;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const TitleH2 = ({ children, className }) => (
  <Styled className={className}>{children}</Styled>
);

export default TitleH2;
