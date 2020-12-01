import { useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Layout, ShipsCatalog } from 'containers';
import mock from 'mock/index';
import { GET_LAUNCHES, GET_CATHEGORIES } from 'graphql/query';
import withApollo from 'lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
//import { useDispatch } from 'react-redux';

const catalogPage = () => {
  const router = useRouter();
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: 'CATALOG_FILTER_CATEGORIES',
  //     payload: router.query.categories || '',
  //   });
  //   dispatch({
  //     type: 'SET_CATALOG_FILTERS',
  //     payload: router.query.filter || [],
  //   });
  // }, []);

  const shipsData = useQuery(GET_LAUNCHES, {
    variables: {
      name: router.query.name,
    },
  });

  const cathegoriesData = useQuery(GET_CATHEGORIES);

  const launches = useMemo(
    () => (!shipsData.loading ? shipsData.data.launches : null),
    [shipsData.data]
  );

  const cathegories = useMemo(
    () => (!cathegoriesData.loading ? cathegoriesData.data : null),
    [cathegoriesData.data]
  );

  return (
    <Layout>
      {console.log(launches)}
      {console.log(cathegories)}
      <ShipsCatalog data={mock.catalog} back={launches || []} />
    </Layout>
  );
};

export default withApollo(catalogPage, { getDataFromTree });
