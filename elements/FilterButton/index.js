import styled from 'styled-components';

const Button = styled.button`
  opacity: 0.5;
  font-size: 16px;
  line-height: 131%;
  position: relative;
  align-self: flex-start;
  padding-right: 16px;
  transition: all 0.3s ease-in;

  &::after {
    content: '';
    background-image: url('icons/close-filter.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0%;
  }

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
  }
`;

const FilterButton = ({ name, handleChange }) => (
  <Button type="button" onClick={() => handleChange()}>
    {name}
  </Button>
);

export default FilterButton;
