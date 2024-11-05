import { useState } from 'react';

import { AnimalCard } from '@/components/AnimalCard';
import animalsData from '@/data/animals.json';

const EspeciesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const randomIndex = Math.floor(Math.random() * 5);

  const filteredAnimals = animalsData.filter((animal) => {
    const matchesCategory = selectedCategory
      ? animal.class.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    const matchesName = animal.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesName;
  });

  const categories = Array.from(
    new Set(animalsData.map((animal) => animal.class)),
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
            <option key={category} value={category}>
              {category}
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
              imagePath={animal?.photos?.[randomIndex]}
              risk={animal.extinctionRisk as any}
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
};

export default EspeciesPage;
