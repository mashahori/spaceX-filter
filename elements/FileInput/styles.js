import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 280px;

  &:hover {
    cursor: pointer;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
  }

  span {
    position: relative;
    overflow: hidden;
    margin-bottom: 4px;
    display: block;
    font-size: 20px;
    line-height: 27px;
    font-weight: 700;
    color: #53b443;
    transition: all 0.2s ease-in;

    &:hover {
      color: #339722;
    }

    @media (max-width: 768px) {
      margin-bottom: 2px;
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding-top: 5px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

export const FileExt = styled.p`
  font-size: 14px;
  line-height: 19px;
  opacity: 0.5;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 16px;
  }
`;

export const ResetBtn = styled.button`
  display: ${props => (props.hasFile ? 'flex' : 'none')};
  position: absolute;
  top: 8px;
  right: -25px;
  width: 24px;
  height: 23px;
  align-items: center;
  justify-content: center;
  color: #53b443;
  cursor: pointer;
  transition: color 0.2s ease-in;

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;

    svg {
      width: 18px;
      height: 17px;
    }
    top: 4px;
  }

  &:hover {
    color: #339722;
  }
`;

export const ImgWrapper = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 57px;
  height: 57px;
  border-radius: 50%;
  background: #f7f8f9;

  @media (max-width: 768px) {
    margin-right: 14px;
    width: 40px;
    height: 40px;
  }

  img {
    width: 22px;
    height: 22px;

    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`;
