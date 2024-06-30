import Image from 'next/image';
import Link from 'next/link';

export default function CharacterCard({ character }) {
  return (
    <Link href={`/blog/${character.name.replace(' ', '_')}`} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={character.image || '/placeholder.jpg'}
          alt={character.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{character.name}</h2>
        <p className="text-gray-600">{character.affiliation}</p>
        <p className="text-sm mt-2 italic">"{character.quote}"</p>
      </div>
    </Link>
  );
}