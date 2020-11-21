import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FilterButton, Checkbox } from 'elements';
import { Dropdown, Cards, Tags } from 'components';
import { useDispatch, useSelector } from 'react-redux';
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
  const [hidden, setHidden] = useState(true);
  const filterArray = useSelector(state => state.filter);

  const initialWidth = useWindowWidth();

  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth;
  }

  const openDropdown = e => {
    if (opened === e) {
      setOpened('');
    } else {
      setOpened(e);
    }
  };

  const handleCategories = e => {
    if (e === '') {
      delete query.categories;
      router.push({
        pathname,
        query: {
          ...query,
        },
      });
      dispatch({ type: 'CATALOG_FILTER_CATEGORIES', payload: e });
    } else {
      router.push({
        pathname,
        query: {
          ...query,
          categories: e,
        },
      });
      dispatch({ type: 'CATALOG_FILTER_CATEGORIES', payload: e });
    }
  };

  const handleCheckbox = e => {
    if (filterArray.indexOf(e) === -1) {
      router.push({
        pathname,
        query: {
          ...query,
          filter: [...filterArray, e],
        },
      });
      dispatch({ type: 'CATALOG_FILTER', payload: e });
    } else {
      const item = filterArray.find(el => el === e);
      const index = filterArray.indexOf(item);

      router.push({
        pathname,
        query: {
          ...query,
          filter: [
            ...filterArray.slice(0, index),
            ...filterArray.slice(index + 1),
          ],
        },
      });
      dispatch({ type: 'CLEAR_FILTER', payload: e });
    }
  };

  const handleInternship = () => {
    if (query.internship) {
      delete query.internship;
      router.push({
        pathname,
        query: {
          ...query,
        },
      });
    } else {
      router.push({
        pathname,
        query: {
          ...query,
          internship: !internship_state,
        },
      });
    }
    dispatch({ type: 'CATALOG_INTERNSHIP' });
  };

  const handleEnglish = () => {
    if (query.english) {
      delete query.english;
      router.push({
        pathname,
        query: {
          ...query,
        },
      });
    } else {
      router.push({
        pathname,
        query: {
          ...query,
          english: !english_state,
        },
      });
    }
    dispatch({ type: 'CATALOG_ENGLISH' });
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

    const item = filterArray.find(el => el === tag);
    const index = filterArray.indexOf(item);

    router.push({
      pathname,
      query: {
        ...query,
        filter: [
          ...filterArray.slice(0, index),
          ...filterArray.slice(index + 1),
        ],
      },
    });
  };

  const handleClearCategoryTag = () => {
    delete query.categories;
    router.push({
      pathname,
      query: {
        ...query,
      },
    });
    dispatch({ type: 'CLEAR_FILTER_CATEGORIES' });
  };

  const handleOpenFilter = () => {
    setHidden(!hidden);
  };

  // const {
  //   filter: { fields, internship, english, discard },
  // } = mock;

  const renderAside = () => {
    // <S.Aside>
    //   <S.Filter>
    //     <S.List>
    //       {fields.map((el, i) => (
    //         <Dropdown
    //           key={i}
    //           data={el}
    //           handleOpen={() => openDropdown(el.title)}
    //           opened={opened === el.title}
    //           handleChangeCheckbox={e => handleCheckbox(e)}
    //           handleChangeRadio={e => handleCategories(e)}
    //           withBg={true}
    //         />
    //       ))}
    //     </S.List>
    //     <S.Block>
    //       <Checkbox
    //         name={internship}
    //         checked_state={internship_state}
    //         handleChange={() => handleInternship()}
    //       />
    //       <Checkbox
    //         name={english}
    //         checked_state={english_state}
    //         handleChange={() => handleEnglish()}
    //       />
    //     </S.Block>
    //     {Object.keys(query).length !== 0 && (
    //       <FilterButton
    //         name={discard}
    //         handleChange={() => {
    //           router.push(pathname);
    //           dispatch({ type: 'CLEAR_ALL_FILTERS' });
    //         }}
    //       />
    //     )}
    //   </S.Filter>
    // </S.Aside>
  };

  return (
    <S.Container>
      <S.Grid>
        {/* {initialWidth > 768 ? (
          renderAside()
        ) : (
          <S.FilterWrapper active={!hidden}>
            <>
              <S.FilterTitle
                active={!hidden}
                onClick={() => handleOpenFilter()}
                type="button"
              >
                {hidden ? 'Открыть фильтр' : 'Закрыть фильтр'}
              </S.FilterTitle>
              {!hidden && renderAside()}
            </>
          </S.FilterWrapper>
        )} */}

        <S.Article>
          <S.Title>{mock.mainTitle}</S.Title>
          <Search
            placeholder={mock.search}
            handleSearch={search => handleSearch(search)}
            initialValue={router.query.search}
          />
          <Tags
            handleChangeFilter={el => handleClearTags(el)}
            handleChangeCategory={handleClearCategoryTag}
          />
        </S.Article>
        {initialWidth <= 768 && (
          <S.Resume>
            <S.ResumeLink>
            </S.ResumeLink>
          </S.Resume>
        )}
        <Cards data={back} type="vacancies" />
      </S.Grid>
    </S.Container>
  );
};

export default ShipsCatalog;
