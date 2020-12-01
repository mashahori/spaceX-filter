import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { FilterButton, Checkbox } from 'elements';
import { Dropdown } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { Cards, SidebarArticle, Tags } from 'components';
import { Search } from 'forms';
import { getNewTags } from 'helpers';
import * as S from './styles';

const ShipsCatalog = ({ data: mock, back }) => {
  const router = useRouter();
  const { pathname, query } = router;
  const dispatch = useDispatch();

  const internship_state = useSelector(state => state.internship);
  const english_state = useSelector(state => state.english);

  const [opened, setOpened] = useState('');
  const filterArray = useSelector(state => state.filter);

  const openDropdown = e => {
    if (opened === e) {
      setOpened('');
    } else {
      setOpened(e);
    }
  };

  const handleCategories = e => {
    router.push({
      pathname,
      query: {
        ...query,
        categories: e,
      },
    });
    dispatch({ type: 'CATALOG_FILTER_CATEGORIES', payload: e })
  };

  const handleCheckbox = e => {
    if (filterArray.indexOf(e) === -1) {
      dispatch({ type: 'CATALOG_FILTER', payload: e });
    } else {
      dispatch({ type: 'CLEAR_FILTER', payload: e });
    }
  };

  const handleInternship = () => {
    router.push({
      pathname,
      query: {
        ...query,
        internship: !internship_state || '',
      },
    });
    dispatch({ type: 'CATALOG_INTERNSHIP' });
  };

  const handleEnglish = () => {
    const { pathname, query } = router;
    router.push({
      pathname,
      query: {
        ...query,
        english: !english_state || '',
      },
    });
    dispatch({ type: 'CATALOG_ENGLISH' })
  };

  const handleSearch = search => {
    const { pathname, query } = router;
    router.push({
      pathname,
      query: {
        ...query,
        search: getNewTags(router.query.search, search),
      },
    });
  };

  const handleClearTags = tag => {
    dispatch({ type: 'CLEAR_FILTER', payload: tag });
    const { pathname, query } = router;
    router.push({
      pathname,
      query: {
        ...query,
        tags: getNewTags(router.query.tags, tag),
      },
    });
  }

  const {
    filter: { fields, internship, english, discard }
  } = mock;

  return (
    <S.Container>
      <S.Grid>
        <S.Aside>
          <S.Filter>
            <S.List>
              {fields.map((el, i) => (
                <Dropdown
                  key={i}
                  data={el}
                  handleOpen={() => openDropdown(el.title)}
                  opened={opened === el.title}
                  handleChangeCheckbox={e => handleCheckbox(e)}
                  handleChangeRadio={e => handleCategories(e)}
                />
              ))}
            </S.List>
            <S.Block>
              <Checkbox
                name={internship}
                checked_state={internship_state}
                handleChange={() => handleInternship()}
              />
              <Checkbox
                name={english}
                checked_state={english_state}
                handleChange={() => handleEnglish()}
              />
            </S.Block>
            <FilterButton
              name={discard}
              handleChange={() => dispatch({ type: 'CLEAR_ALL_FILTERS' })}
            />
          </S.Filter>
        </S.Aside>
        <S.Article>
          <S.Title>{mock.mainTitle}</S.Title>
          <Search
            placeholder={mock.search}
            handleSearch={search => handleSearch(search)}
            initialValue={router.query.search}
          />
          <Tags handleChangeFilter={el => handleClearTags(el)} />
        </S.Article>
        <Cards data={back} type="vacancies" />
      </S.Grid>
    </S.Container>
  );
};

export default ShipsCatalog;
