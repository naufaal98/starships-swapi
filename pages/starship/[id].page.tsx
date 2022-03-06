import client from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  StarshipPageWrapper,
  StarshipPageContent,
  StarshipName,
  BackButton,
  StartshipInfoWrapper,
  StarshipInfoLabel,
} from './starship.style';
import { StarshipPageProps } from './starship.type';

const StarshipPage: NextPage<StarshipPageProps> = ({ starship }) => (
  <StarshipPageWrapper>
    <Head>
      <title>{starship.name} | Starships</title>
    </Head>
    <StarshipPageContent>
      <Link href="/" passHref>
        <BackButton>&larr; Back</BackButton>
      </Link>
      <StarshipName>{starship.name}</StarshipName>
      <StartshipInfoWrapper>
        <StarshipInfoLabel>Model:</StarshipInfoLabel>
        <span>{starship.model}</span>
      </StartshipInfoWrapper>
      <StartshipInfoWrapper>
        <StarshipInfoLabel>Class:</StarshipInfoLabel>
        <span>{starship.starshipClass}</span>
      </StartshipInfoWrapper>
      <StartshipInfoWrapper>
        <StarshipInfoLabel>Crew:</StarshipInfoLabel>
        <span>{starship.crew}</span>
      </StartshipInfoWrapper>
      <StartshipInfoWrapper>
        <StarshipInfoLabel>Passengers:</StarshipInfoLabel>
        <span>{starship.passengers}</span>
      </StartshipInfoWrapper>
      <StartshipInfoWrapper>
        <StarshipInfoLabel>Manufacturers:</StarshipInfoLabel>
        <span>{starship.manufacturers}</span>
      </StartshipInfoWrapper>
    </StarshipPageContent>
  </StarshipPageWrapper>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const starshipId = context?.params?.id;

  const { data } = await client.query({
    query: gql`
      query Starship($id: ID!) {
        starship(id: $id) {
          name
          model
          id
          starshipClass
          crew
          passengers
          manufacturers
          cargoCapacity
        }
      }
    `,
    variables: {
      id: starshipId,
    },
  });

  return {
    props: {
      starship: data.starship,
    },
  };
}

export default StarshipPage;
