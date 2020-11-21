import styled from 'styled-components';

const Styled = styled.p`
  font-size: 18px;
  line-height: 134%;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 134%;
  }
`;

const SmallText = ({ children, className }) => (
  <Styled className={className}>{children}</Styled>
);

export default SmallText;
