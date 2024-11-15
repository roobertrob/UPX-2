import Image from 'next/image';
import Link from 'next/link';
const WhatIsEcoWarriors = () => {
  return (
    <div className=" w-full lg:w-2/3 bg-primary-solid h-content rounded-r-customRadius flex flex-row text-white p-16 my-12">
      <Image
        width={300}
        height={150}
        src="/logo-vertical.svg"
        alt="eco warrios logotipo"
        className="invisible w-0 lg:w-1/3 lg:visible"
      />
      <div className="w-full px-10">
        <h3 className="text-3xl">O QUE É O ECOWARRIORS?</h3>
        <div className="text-start space-y-2 my-8">
          <p>
            EcoWarriors é mais do que apenas um site, é um convite para você se
            tornar um defensor da vida selvagem! Nossa missão é conectar pessoas
            de todas as idades com a incrível biodiversidade das Américas,
            especialmente do Brasil. Através de conteúdos divertidos e
            informativos, você vai descobrir um mundo fascinante de animais em
            risco de extinção e entender a importância de preservá-los.
          </p>
          <p>
            No EcoWarriors, você encontrará jogos divertidos que te farão
            aprender sobre as características, habitats e ameaças que essas
            espécies enfrentam. Além disso, você terá a oportunidade de conhecer
            ONGs inspiradoras de pessoas que estão trabalhando para proteger a
            natureza. Junte-se a nós nessa jornada e faça a diferença! Afinal,
            cada um de nós pode contribuir para um futuro mais verde e
            sustentável.
          </p>
        </div>
        <Link
          href="/jogos"
          className="bg-white rounded-3xl text-primary-solid p-3 mt-24 font-extrabold"
        >
          Venha jogar!
        </Link>
      </div>
    </div>
  );
};

export { WhatIsEcoWarriors };
