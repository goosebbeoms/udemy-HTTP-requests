import { useState, useEffect } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFatching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    setAvailablePlaces(true);
    async function fetchPlaces() {
      const response = fetch('http://localhost:8000/places');
      const resData = response.json();
      setAvailablePlaces(resData.places)
      setAvailablePlaces(false)
    }

    fetchPlaces()
  }, [])


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={false}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
