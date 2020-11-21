import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 28px;
  font-weight: 500;
  font-size: 20px;
  line-height: 134%;

  input:hover ~ label {
    &::before {
      border-color: #53b443;
    }
  }

  input:active ~ label {
    &::before {
      border-color: #339722;
    }
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 134%;
  }
`;

export const Label = styled.label.attrs(props => ({
  checkbox: props.checked ? "url('icons/checked.svg')" : 'none',
  color: props.checked ? '#53B443;' : 'rgba(31, 32, 42, 0.3)',
}))`
  padding-left: 30px;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: ${props => props.checkbox};
    background-position: center center;
    background-repeat: no-repeat;
    border: 2px solid rgba(31, 32, 42, 0.3);
    border-color: ${props => props.color};
    transition: border-color 0.3s ease;
  }
`;

export const DropLabel = styled.label`
  position: relative;
  padding-left: 20px;
  display: flex;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease;

  &:hover {
    color: #53b443;
  }

  &:active {
    color: #339722;
  }

  &::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    top: 50%;
    left: 0;
    background-color: #53b443;
    transform: translateY(-50%);
    border-radius: 50%;
    display: none;
  }
`;
