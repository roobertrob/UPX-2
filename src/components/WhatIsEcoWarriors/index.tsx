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
            Lorem ipsum dolor sit amet. Aut rerum porro sit dicta odio qui odit
            molestias id dicta galisum et corrupti eius in culpa natus At
            inventore esse? Ut voluptatem veritatis sed nisi suscipit ut quis
            odit et Quis rerum ut enim autem sed eligendi repellat ea cupiditate
            veniam?
          </p>
          <p>
            Qui distinctio deleniti a inventore eveniet ut consequatur quisquam
            ab eius unde cum assumenda culpa! Est nesciunt officia est vitae
            temporibus eos autem perspiciatis et omnis aliquam et optio corporis
            et voluptates odit. Ut adipisci odit ut molestiae eius sit quia
            commodi.
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
