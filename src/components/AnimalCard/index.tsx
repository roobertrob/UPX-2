import Image from 'next/image';
import Link from 'next/link';

import { Card } from '../Card';
type AnimalCardProps = {
  imagePath: string;
  description?: string;
  title?: string;
  risk?: 'High' | 'Medium' | 'Low';
};
const AnimalCard = ({
  imagePath,
  description,
  title,
  risk,
}: AnimalCardProps) => {
  const riskImages = {
    High: '/high-risk.svg',
    Medium: '/medium-risk.svg',
    Low: '/low-risk.svg',
  };
  return (
    <Card withBorder>
      {risk && (
        <Image src={riskImages[risk]} width={200} height={50} alt={''} />
      )}
      <Image src={imagePath} width={100} height={100} alt="" />
      <h3 className="text-3xl font-extrabold my-2">{title}</h3>
      <p className="mt-4">{description}</p>
      <Link
        href={`especies/${title.toLowerCase()}`}
        className="bg-primary-solid py-3 px-6 rounded-2xl place-self-center text-white mt-10"
      >
        Saiba mais
      </Link>
    </Card>
  );
};
export { AnimalCard };
