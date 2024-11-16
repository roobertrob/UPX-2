import fs from 'fs';
import path from 'path';

import { useState } from 'react';

import { AnimalCard } from '@/components/AnimalCard';
import animalsData from '@/data/animals.json';

const getRandomImagePath = (animalName) => {
  try {
    const directoryPath = path.join(
      process.cwd(),
      'public',
      'animals-pictures',
      animalName,
    );
    const files = fs.readdirSync(directoryPath);

    const randomFile = files[Math.floor(Math.random() * files.length)];
    return `/animals-pictures/${animalName}/${randomFile}`;
  } catch (error) {
    console.error('Erro ao obter a imagem:', error);
    return '/default-image.jpg';
  }
};

export async function getStaticProps() {
  const animalsWithImages = animalsData.map((animal) => ({
    ...animal,
    randomImagePath: getRandomImagePath(animal.name),
  }));

  return {
    props: {
      animals: animalsWithImages,
    },
  };
}

const EspeciesPage = ({ animals }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredAnimals = animals?.filter((animal) => {
    const matchesCategory = selectedCategory
      ? animal.class.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    const matchesName = animal.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesName;
  });

  const categories = Array.from(
    new Set(animals?.map((animal) => animal.class)),
  ).sort();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center justify-end mb-6 space-y-4 space-x-4 md:space-y-0">
        <select
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas as categorias</option>
          {categories.map((category) => (
            <option key={category as any} value={category as any}>
              {category as any}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Buscar pelo nome"
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <AnimalCard
              key={animal.name}
              title={animal.name}
              imagePath={animal.randomImagePath}
              risk={animal.extinctionRisk}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-xl">
            Nenhuma espécie encontrada.
          </p>
        )}
      </div>
    </div>
  );
}

export default EspeciesPage;
