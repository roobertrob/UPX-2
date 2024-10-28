import { ICNUCard } from '../ICNUCard';

const iucnCategories = [
  {
    acronym: 'EX',
    title: 'Extinto (Extinct)',
    description:
      'Nenhum exemplar da espécie analisada está vivo na natureza ou em cativeiros.',
  },
  {
    acronym: 'EW',
    title: 'Extinto na natureza (Extinct in the Wild)',
    description:
      'A espécie não é mais encontrada na natureza, existindo apenas em cativeiros.',
  },
  {
    acronym: 'CR',
    title: 'Criticamente em perigo (Critically Endangered)',
    description:
      'A espécie corre um risco extremamente alto de ser extinta da natureza.',
  },
  {
    acronym: 'EN',
    title: 'Em perigo (Endangered)',
    description:
      'A espécie apresenta um risco elevado de entrar em extinção em seu habitat.',
  },
  {
    acronym: 'VU',
    title: 'Vulnerável (Vulnerable)',
    description:
      'A espécie vulnerável apresenta riscos de entrar em extinção na natureza.',
  },
  {
    acronym: 'NT',
    title: 'Quase ameaçado (Near Threatened)',
    description:
      'A espécie necessita de certas medidas para que não se torne vulnerável à extinção.',
  },
  {
    acronym: 'LC',
    title: 'Pouco preocupante (Least Concern)',
    description:
      'A espécie não apresenta muitos riscos de extinção comparada às outras.',
  },
  {
    acronym: 'DD',
    title: 'Dados deficientes (Data Deficient)',
    description:
      'A espécie não possui dados suficientes para avaliar o nível de conservação.',
  },
  {
    acronym: 'NE',
    title: 'Não avaliado (Not Evaluated)',
    description: 'A espécie não foi avaliada pelos critérios da IUCN.',
  },
];

const IUCNCategories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-3 max-w-7xl">
      {iucnCategories.map((category) => (
        <ICNUCard
          key={category.acronym}
          title={category.title}
          acronym={category.acronym}
          description={category.description}
        />
      ))}
    </div>
  );
};

export { IUCNCategories };
