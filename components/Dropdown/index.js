import { useSelector } from 'react-redux';
import { Checkbox, RadioButton } from 'elements';
import { CustomScrollbars } from 'components';
import { Title, Item, List, Wrapper, Sup } from './styles';

const Dropdown = props => {
  const {
    data: { title, list, multi },
    opened,
    handleOpen,
    handleChangeCheckbox,
    handleChangeRadio,
    withBg = false,
  } = props;
  const filterArray = useSelector(state => state.filter);
  const categories = useSelector(state => state.categories);

  return (
    <>
      <Title type="button" onClick={() => handleOpen()} active={opened}>
        {title}
        {title === 'Категории' && categories && <Sup>1</Sup>}
        {(title === 'Технологии' || title === 'Команды') &&
          filterArray.length > 0 && (
            <Sup>
              {list.filter(item => filterArray.includes(item)).length || ''}
            </Sup>
          )}
      </Title>
      <Wrapper style={{ display: opened ? 'block' : 'none' }} withBg={withBg}>
        <List>
          <CustomScrollbars>
            {list.map((el, i) => (
              <Item key={i}>
                {multi ? (
                  <Checkbox
                    name={el}
                    handleChange={() => handleChangeCheckbox(el)}
                    type="dropdown"
                    checked_state={filterArray.indexOf(el) !== -1}
                  />
                ) : (
                  <RadioButton
                    name={title}
                    handleChange={e => handleChangeRadio(e)}
                    value={el}
                    checked={categories === el}
                  />
                )}
              </Item>
            ))}
          </CustomScrollbars>
        </List>
      </Wrapper>
    </>
  );
};

export default Dropdown;
