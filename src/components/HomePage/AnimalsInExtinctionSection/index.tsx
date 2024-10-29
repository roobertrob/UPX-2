import Link from 'next/link';

import { AnimalCard } from '@/components/AnimalCard';

const animalClasses = [
  {
    id: 'mammals',
    title: 'MAMÍFEROS',
    description:
      'Mamíferos são vertebrados com glândulas mamárias e pelos. De sangue quente e cérebro desenvolvido, o que facilita a adaptação. Eles vivem em variados ambientes, desde oceanos até florestas.',
    imagePath: '/game-icons_deer.svg',
  },
  {
    id: 'reptiles',
    title: 'RÉPTEIS',
    description:
      'Répteis são animais vertebrados de sangue frio, com pele geralmente coberta por escamas ou placas. Eles respiram por pulmões, a maioria se reproduz por ovos, e vivem em diversos ambientes.',
    imagePath: '/game-icons_sand-snake.svg',
  },
  {
    id: 'birds',
    title: 'AVES',
    description:
      'Aves são animais vertebrados de sangue quente, possuem penas, bico sem dentes e asas, que a maioria usa para voar. Elas se reproduzem por ovos, com cuidado parental após a eclosão.',
    imagePath: '/game-icons_egyptian-bird.svg',
  },
];

const AnimalsInExtinctionSection = () => {
  return (
    <>
      <h2 className="text-2xl font-extrabold">
        OS PRINCIPAIS ANIMAIS EM EXTINÇÃO SÃO:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mb-5">
        {animalClasses.map((animalClass) => (
          <AnimalCard
            key={animalClass.id}
            title={animalClass.title}
            imagePath={animalClass.imagePath}
            description={animalClass.description}
          />
        ))}
      </div>
      <Link
        href="/especies"
        className="bg-primary-solid py-3 px-6 rounded-2xl place-self-center text-white mt-10"
      >
        Conheça as espécies!
      </Link>
    </>
  );
};

export default AnimalsInExtinctionSection;
