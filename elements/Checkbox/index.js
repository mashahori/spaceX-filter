import { Wrapper, Label, DropLabel } from './styles';

const Checkbox = props => {
  const { name, handleChange, type, checked_state } = props;

  return (
    <>
      {type === 'dropdown' ? (
        <>
          <input
            type="checkbox"
            id={name}
            onChange={() => handleChange()}
            checked={checked_state}
          />
          <DropLabel htmlFor={name} checked={checked_state}>
            {name}
          </DropLabel>
        </>
      ) : (
        <Wrapper>
          <input
            type="checkbox"
            id={name}
            onChange={() => handleChange()}
            checked={checked_state}
          />
          <Label htmlFor={name} checked={checked_state}>
            {name}
          </Label>
        </Wrapper>
      )}
    </>
  );
};

export default Checkbox;
