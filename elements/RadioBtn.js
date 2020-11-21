import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  margin-right: 26px;
  padding-left: 30px;
  display: flex;
  font-size: 20px;
  line-height: 27px;
  cursor: pointer;

  span::before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 4px;
    left: 0;
    border: 2px solid rgba(31, 32, 42, 0.3);
    border-radius: 50%;
    transition: border 0.2s ease-in;

    @media (max-width: 768px) {
      top: 1px;
    }
  }

  & > input:not(:disabled):not(:checked) + span:hover::before {
    border: 2px solid #53b443;
  }

  & > input:checked + span::before {
    border: 2px solid #53b443;
  }

  & > input:checked + span::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    top: 10px;
    left: 6px;
    background-color: #53b443;
    border-radius: 50%;

    @media (max-width: 768px) {
      top: 7px;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    margin-right: 28px;
  }
`;

const RadioBtn = ({ name, handleChange, value, label, required = true }) => {
  return (
    <Label>
      <input
        type="radio"
        name={name}
        id={value}
        onChange={() => {}}
        required={required}
      />
      <span>{label}</span>
    </Label>
  );
};

export default RadioBtn;
