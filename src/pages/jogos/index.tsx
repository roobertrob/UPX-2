import Image from 'next/image';
import Link from 'next/link';
const JogosPage = () => {
  return (
    <div className="text-primary-solid text-center mb-10">
      <Image src="/banner-games.png" alt="" width={1900} height={200} />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-7 m-7">
        <Link href="jogos/forca">
          <div className="border-4 border-primary-solid rounded-3xl w-96 h-96 flex flex-col items-center justify-center">
            <div>
              <Image
                src="/solar_people-nearby-bold.svg"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <p className="text-3xl font-bold mt-6">Forca</p>{' '}
          </div>
        </Link>
        <div className="border-4 opacity-50 border-primary-solid rounded-3xl w-96 h-96 flex flex-col items-center justify-center hover:cursor-not-allowed">
          <div>
            <Image
              src="/game-guess-animal.svg"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <p className="text-3xl font-bold mt-6">Que animal sou eu?</p>{' '}
        </div>
        <div className="border-4 opacity-50 border-primary-solid rounded-3xl w-96 h-96 flex flex-col items-center justify-center">
          <div>
            <Image
              src="/game-guess-habitat.svg"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <p className="text-3xl font-bold mt-6">Que habitat sou eu?</p>{' '}
        </div>
      </div>
    </div>
  );
};

export default JogosPage;
