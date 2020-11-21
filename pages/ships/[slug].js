import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { Layout, Vacancy } from 'containers';
import { GET_VACANCY_CONTENT } from 'graphql/query';
import withApollo from 'lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

import mock from 'mock/index';

const vacancyPage = () => {
  const router = useRouter();

  const categoriesData = useQuery(GET_VACANCY_CONTENT, {
    variables: {
      slug: router.query.slug,
    },
  });
  const categories = useMemo(
    () => (!categoriesData.loading ? categoriesData.data.vacancies[0] : null),
    [categoriesData.data]
  );

  if (!categories) return null;

  const dispatch = useDispatch();

  dispatch({
    type: 'LANGUAGE',
    payload: categoriesData.is_english_speaking_team,
  });

  return (
    <Layout backButton>
      <Vacancy data={mock.vacancy} back={categories} />
    </Layout>
  );
};

export default withApollo(vacancyPage, { getDataFromTree });
