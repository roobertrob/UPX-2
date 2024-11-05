import Image from 'next/image';
import { useRouter } from 'next/router';

import animals from '@/data/animals.json';

const EspeciePage = () => {
  const router = useRouter();
  const { name } = router.query as any;

  const animal = animals.find(
    (a) => a.name.toLowerCase() === name?.toLowerCase() ,
  );

  if (!animal) {
    return <p>Espécie não encontrada</p>;
  }

  const {
    scientificName,
    extinctionRisk,
    nickname,
    conservationProject,
    photos,
    phylum,
    class: animalClass,
    additionalInfo,
    order,
    family,
    genus,
    location,
    diet,
    dietContents,
    groupBehavior,
    habitat,
    lifestyle,
    mainCharacteristic,
    mainThreat,
    sources,
  } = animal;

  const extinctionRiskTranslated = {
    High: 'Alto',
    Medium: 'Médio',
    Low: 'Baixo',
  };

  return (
    <div className="p-8 max-w-8xl mx-auto rounded-lg">
      <div className="flex flex-col lg:flex-row mt-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-2/5 flex flex-col  bg-gray-200 p-4 rounded-lg">
          <div className="w-full mb-6">
            {photos?.[0] && (
              <Image
                src={photos[0]}
                alt={name}
                width={192}
                height={192}
                className="object-cover rounded-lg"
              />
            )}
            <h1 className="text-2xl font-bold my-4 text-center text-primary-solid uppercase">
              {scientificName}
            </h1>
            <p
              className={`mt-4 px-6 py-3 rounded-2xl text-white text-center ${
                extinctionRisk === 'High' ? 'bg-red-600' : 'bg-yellow-500'
              }`}
            >
              Risco {extinctionRiskTranslated[extinctionRisk]}
            </p>
          </div>
          <h2 className="text-lg font-bold underline mb-4 text-primary-solid">
            Projetos de Preservação
          </h2>
          <ul className="space-y-2">
            {conservationProject &&
              conservationProject.split(',').map((link, index) => (
                <li key={index}>
                  -{' '}
                  <a
                    href={link}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                </li>
              ))}
          </ul>
          <div className="flex flex-col mt-6">
            <div className="my-4">
              <h3 className="text-lg font-bold underline text-primary-solid">
                Filo
              </h3>
              <p>{phylum}</p>
            </div>
            <div className="my-4">
              <h3 className="text-lg font-bold underline text-primary-solid">
                Classe
              </h3>
              <p>{animalClass}</p>
            </div>
            <div className="my-4">
              <h3 className="text-lg font-bold underline text-primary-solid">
                Ordem
              </h3>
              <p>{order}</p>
            </div>
            <div className="my-4">
              <h3 className="text-lg font-bold underline text-primary-solid">
                Família
              </h3>
              <p>{family}</p>
            </div>
            <div className="my-4">
              <h3 className="text-lg font-bold underline text-primary-solid">
                Gênero
              </h3>
              <p>{genus}</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/5 flex flex-col">
          <div className="flex flex-col md:flex-row items-start rounded-lg space-y-3 md:space-x-6 md:space-y-0 w-full">
            <div className="w-full">
              <p className="text-primary-solid text-2xl uppercase font-bold">
                {name}
              </p>
              <p className="text-primary-solid text-lg font-bold">{nickname}</p>
              <p className="mt-5 text-xl">{additionalInfo}</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary-solid">
              Características Marcantes
            </h2>
            <p className="mt-4">{mainCharacteristic}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary-solid">
              Principais Ameaças
            </h2>
            <p className="mt-4">{mainThreat}</p>
          </div>

          <div className="mt-8 space-y-2">
            <h2 className="text-2xl font-semibold text-primary-solid">
              Mais Informações
            </h2>
            <p>
              <strong>Dieta:</strong> {diet} - {dietContents}
            </p>
            <p>
              <strong>Localização:</strong> {location}
            </p>
            <p>
              <strong>Comportamento de Grupo:</strong> {groupBehavior}
            </p>
            <p>
              <strong>Habitat:</strong> {habitat}
            </p>
            <p>
              <strong>Estilo de Vida:</strong> {lifestyle}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary-solid">
              Fontes
            </h2>
            <ul className="space-y-2">
              {sources &&
                sources.map((source, index) => (
                  <li key={index}>
                    <a
                      href={source}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspeciePage;
