import Select, { components } from 'react-select';
import * as S from './styles';

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, child =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

const SelectInput = ({
  options,
  placeholder,
  onChange,
  setOpened,
  setClosed,
}) => {
  return (
    <S.Wrapper>
      <Select
        options={options}
        placeholder={placeholder}
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={onChange}
        onMenuOpen={setOpened}
        onMenuClose={setClosed}
        controlShouldRenderValue={true}
        components={{
          ValueContainer: CustomValueContainer,
        }}
        styles={{
          valueContainer: (provided, state) => ({
            ...provided,
            overflow: 'visible',
          }),
          placeholder: (provided, state) => ({
            ...provided,
            position: 'absolute',
            top: state.hasValue || state.selectProps.inputValue ? -3 : '50%',
            transition: 'top 0.2s, font-size 0.2s',
            fontSize: (state.hasValue || state.selectProps.inputValue) && 14,
          }),
        }}
      />
    </S.Wrapper>
  );
};

export default SelectInput;
