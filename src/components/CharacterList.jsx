'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CharacterCard from './CharacterCard';
import { getCharacters } from '@/utils/api';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const newCharacters = await getCharacters(page);
      setCharacters((prev) => [...prev, ...newCharacters]);
      setPage((prev) => prev + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inView) {
      fetchCharacters();
    }
  }, [inView]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {/* {error && <ErrorDisplay error={error} />} */}
      <div ref={ref}>
        {loading && "Loading"}
      </div>
    </>
  );
}