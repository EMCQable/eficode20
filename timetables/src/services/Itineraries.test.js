import findItinerary from './Itineraries'

test('finds itinerary', async () => {
  const Itinerary = await findItinerary.getItineraries('Maunula')
  expect(Itinerary).toBeTruthy()
})