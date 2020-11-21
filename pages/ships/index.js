import { useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Layout, ShipsCatalog } from 'containers';
import mock from 'mock/index';
import { GET_SHIPS } from 'graphql/query';
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

  const shipsData = useQuery(GET_SHIPS, {
    variables: {
      name: router.query.name,
    },
  });

  const ships = useMemo(
    () => (!shipsData.loading ? shipsData.data.ships : null),
    [shipsData.data]
  );

  return (
    <Layout>
      {console.log(ships)}
      <ShipsCatalog data={mock.catalog} back={ships || []} />
    </Layout>
  );
};

export default withApollo(catalogPage, { getDataFromTree });
