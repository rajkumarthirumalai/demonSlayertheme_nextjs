import dynamic from 'next/dynamic';

const CharacterList = dynamic(() => import('@/components/CharacterList'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export const metadata = {
  title: 'Demon Slayer Characters',
  description: 'List of Demon Slayer characters',
};

export default function CharactersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Demon Slayer Characters</h1>
      <CharacterList />
    </div>
  );
}