import styled from 'styled-components';

export const Styled = styled.div`
  width: 57px;
  height: 57px;
  background-color: ${props => (props.white ? '#fff' : '#F7F8F9')};
  background-image: ${props => `url('/emodzi/${props.name}.png')`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    width: 43px;
    height: 43px;
  }
`;
