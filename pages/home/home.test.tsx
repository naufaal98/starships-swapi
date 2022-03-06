import { render, screen } from '@/test/test-utils';
import { MockedProvider } from '@apollo/client/testing';
import { Home, GET_ALL_STARSHIPS_QUERY } from './home';
import { AllStarships } from './home.types';

const mockAllStarShips: AllStarships = {
  allStarships: {
    starships: [
      {
        id: 'c3RhcnNoaXBzOjI=',
        name: 'CR90 corvette',
        crew: '30-165',
        model: 'CR90 corvette',
      },
      {
        id: 'c3RhcnNoaXBzOjM=',
        name: 'Star Destroyer',
        crew: '47,060',
        model: 'Imperial I-class Star Destroyer',
      },
      {
        id: 'c3RhcnNoaXBzOjU=',
        name: 'Sentinel-class landing craft',
        crew: '5',
        model: 'Sentinel-class landing craft',
      },
    ],
  },
};

const mocks = [
  {
    request: {
      query: GET_ALL_STARSHIPS_QUERY,
    },
    result: {
      data: mockAllStarShips,
    },
  },
];

describe('<Home />', () => {
  it('Renders a loading message when fetching data from the server', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>,
    );

    expect(
      screen.getByText(/Hold on, we are preparing the starships for you/i),
    ).toBeInTheDocument();
  });

  it('Renders the starship list without error ', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>,
    );

    const starshipList = await screen.findAllByTestId('starship-item');
    expect(starshipList.length).toEqual(mockAllStarShips.allStarships.starships.length);
  });

  it('Renders an error message when failed to get the starships data', async () => {
    const mocksFailed = [
      {
        request: {
          query: GET_ALL_STARSHIPS_QUERY,
        },
        error: new Error(),
      },
    ];

    render(
      <MockedProvider mocks={mocksFailed}>
        <Home />
      </MockedProvider>,
    );

    await screen.findByText(/Something went wrong/i);
  });
});
