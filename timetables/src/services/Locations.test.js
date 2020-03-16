import findPlace from './Locations'

test('finds location', async () => {
  const Location = await findPlace.getLocation('Maunula')
  expect(Location).toBeTruthy()
})