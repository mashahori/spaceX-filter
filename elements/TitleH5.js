import styled from 'styled-components';

const Styled = styled.h5`
  font-size: 16px;
  line-height: 131%;
  font-weight: 600;
`;

const TitleH5 = ({ children, className }) => (
  <Styled className={className}>{children}</Styled>
);

export default TitleH5;
