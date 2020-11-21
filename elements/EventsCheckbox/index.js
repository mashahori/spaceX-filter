import { Label, Wrapper } from './styles';

const EventsCheckbox = ({
  name,
  checked = false,
  onChange,
  color,
  className,
  children,
}) => {
  return (
    <Wrapper color={color} className={className}>
      <input type="checkbox" id={name} onChange={onChange} checked={checked} />
      <Label htmlFor={name}>
        {name}
        {children}
      </Label>
    </Wrapper>
  );
};

export default EventsCheckbox;
