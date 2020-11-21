import TextareaAutosize from 'react-autosize-textarea';
import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 410px;
  font-size: 20px;
  line-height: 26px;

  span {
    max-width: 390px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.029em;

    span {
      max-width: 290px;
    }
  }
`;

const StyledTextarea = styled(TextareaAutosize)`
  resize: vertical !important;
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  border: none;
  border-bottom: 1px solid rgba(32, 31, 42, 0.3);
  border-radius: 0;
  font: inherit;
  font-size: 18px;
  line-height: 24px;
  transition: border 0.2s ease-in;
  outline: none;
  min-height: 64px;

  &:hover,
  &:focus {
    border-bottom: 1px solid #5faf52;
  }

  &::placeholder {
    color: rgba(32, 31, 42, 0.5);
  }

  &:focus::placeholder {
    color: #201f2a;
  }

  @media (max-width: 768px) {
    min-height: 40px;
    font-size: 16px;
    line-height: 22px;

    &::placeholder {
      font-size: 14px;
    }
  }
`;

const SmartTextarea = ({ label, placeholder, name }) => {
  return (
    <Label>
      <span>{label}</span>
      <StyledTextarea
        rows={2}
        maxRows={8}
        placeholder={placeholder}
        name={name}
      />
    </Label>
  );
};

export default SmartTextarea;
