import fs from 'fs';
import path from 'path';

import Image from 'next/image';

import animals from '@/data/animals.json';

export async function getStaticPaths() {
  const paths = animals.map((animal) => ({
    params: { name: animal.name.toLowerCase() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const animal = animals.find((a) => a.name.toLowerCase() === params.name);

  if (!animal) {
    return { notFound: true };
  }

  const directoryPath = path.join(
    process.cwd(),
    'public',
    'animals-pictures',
    animal.name,
  );

  let randomImagePath = '/default-image.jpg';
  try {
    const files = fs.readdirSync(directoryPath);
    const randomFile = files[Math.floor(Math.random() * files.length)];
    randomImagePath = `/animals-pictures/${animal.name}/${randomFile}`;
  } catch (error) {
    console.error('Erro ao obter a imagem:', error);
  }

  return {
    props: {
      animal,
      randomImagePath,
    },
  };
}

const EspeciePage = ({ animal, randomImagePath }) => {
  if (!animal) {
    return <p>Espécie não encontrada</p>;
  }

  const {
    scientificName,
    extinctionRisk,
    nickname,
    conservationProject,
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
        <div className="w-full lg:w-2/5 flex flex-col bg-gray-200 p-4 rounded-lg">
          <div className="w-full mb-6">
            <Image
              src={randomImagePath}
              alt={animal.name}
              width={550}
              height={192}
              className="object-cover rounded-lg"
            />
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
                {animal.name}
              </p>
              <p className="text-primary-solid text-lg font-bold">{nickname}</p>
              <p className="mt-5 text-xl">{additionalInfo}</p>
            </div>
          </div>
          <div className="mt-8 space-y-2 flex flex-wrap gap-8 items-center justify-center">
            <div className="flex flex-col items-center justify-center w-56 text-wrap text-center gap-3">
              <Image src="/diurno.svg" width={60} height={50} alt="" />
              {lifestyle}
            </div>
            <div className="flex flex-col items-center justify-center  w-56 text-wrap text-center gap-3">
              <Image src="/localizacao.png" width={60} height={50} alt="" />
              {location}
            </div>
            <div className="flex flex-col items-center justify-center  w-56 text-wrap text-center gap-3">
              <Image src="/alimentacao.svg" width={60} height={50} alt="" />
              {diet}
            </div>
            <div className="flex flex-col items-center justify-center  w-56 text-wrap text-center gap-3">
              <Image src="/forma-de-viver.svg" width={60} height={50} alt="" />
              {groupBehavior}
            </div>
            <div className="flex flex-col items-center justify-center  w-56 text-wrap text-center gap-3">
              <Image src="/habitat.svg" width={60} height={50} alt="" />
              {habitat}
            </div>
            <div className="flex flex-col items-center justify-center  w-56 text-wrap text-center gap-3">
              <Image src="/comida.svg" width={60} height={50} alt="" />
              {dietContents}
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
