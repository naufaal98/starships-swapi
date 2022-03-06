import React from 'react';
import type { NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import { ClientOnly } from '@/components/ClientOnly';
import { Spinner } from '@/components/Spinner';
import { AllStarships } from './home.type';
import {
  SpinnerWrapper,
  StarshipCrew,
  StarshipList,
  StarshipListItem,
  StarshipModel,
  StarthipLink,
} from './home.style';

export const GET_ALL_STARSHIPS_QUERY = gql`
  query Starships {
    allStarships {
      starships {
        id
        name
        crew
        model
      }
    }
  }
`;

export const Home = () => {
  const { data, loading, error } = useQuery<AllStarships>(GET_ALL_STARSHIPS_QUERY);

  if (loading)
    return (
      <SpinnerWrapper>
        <Spinner />
        <span>Hold on, we are preparing the starships for you</span>
      </SpinnerWrapper>
    );

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <Head>
        <title>Starships</title>
      </Head>
      <StarshipList>
        {data?.allStarships?.starships?.map((starship) => (
          <StarshipListItem data-testid="starship-item" key={starship.id}>
            <Link href={`/starship/${starship.id}`} passHref>
              <StarthipLink>{starship.name}</StarthipLink>
            </Link>
            <StarshipCrew>crew: {starship.crew}</StarshipCrew>
            <StarshipModel>{starship.model}</StarshipModel>
          </StarshipListItem>
        ))}
      </StarshipList>
    </div>
  );
};

const HomeCsr: NextPage = () => (
  <ClientOnly>
    <Home />
  </ClientOnly>
);

export default HomeCsr;
