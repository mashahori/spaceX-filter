import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FilterButton } from 'elements';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;
`;

const Element = styled.li`
  margin-right: 22px;
`;

const Tags = ({ handleChangeFilter, handleChangeCategory }) => {
  const filterArray = useSelector(state => state.filter);
  const categories = useSelector(state => state.categories);

  return (
    <List>
      {filterArray.length !== 0 &&
        filterArray.map((el, i) => (
          <Element key={i}>
            <FilterButton
              name={el}
              handleChange={() => handleChangeFilter(el)}
            />
          </Element>
        ))}
      {categories && (
        <Element>
          <FilterButton name={categories} handleChange={handleChangeCategory} />
        </Element>
      )}
    </List>
  );
};

export default Tags;
