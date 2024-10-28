import Image from 'next/image';
import Link from 'next/link';

const PageHeader = () => {
  return (
    <nav className="w-full p-4 bg-primary-solid flex fixed text-white">
      <Image
        width={300}
        height={150}
        src="/logo.svg"
        alt="eco warrios logotipo"
      />
      <div className="ml-6 p-4 space-x-6 text-2xl">
        <Link href="/especies">Espécies</Link>
        <Link href="/jogos">Jogos</Link>
        <Link href="/ongs">Ongs</Link>
      </div>
    </nav>
  );
};

export { PageHeader };
