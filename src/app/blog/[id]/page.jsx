import Image from 'next/image';

async function getCharacterById(id) {
  const res = await fetch(`https://demon-slayer-api.onrender.com/v1/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch character');
  const data = await res.json();
  return data[0]; // The API returns an array with a single object
}

export async function generateMetadata({ params }) {
  const character = await getCharacterById(params.id);
  return {
    title: `${character.name} | Demon Slayer`,
    description: `Details about ${character.name} from Demon Slayer`,
  };
}

export default async function CharacterPage({ params }) {
  const character = await getCharacterById(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={character.image || '/placeholder.jpg'}
            alt={character.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
          <p className="text-xl mb-2">Race: {character.race}</p>
          <p className="text-xl mb-2">Affiliation: {character.affiliation}</p>
          <p className="text-xl mb-2">Skill: {character.skill}</p>
          <p className="text-xl italic mt-4">"{character.quote}"</p>
        </div>
      </div>
    </div>
  );
}