import Image from 'next/image';

import { Card } from '../Card';

const AnimalCard = ({ imagePath, description, title }) => {
  return (
    <Card withBorder>
      <Image src={imagePath} width={100} height={100} alt="" />
      <h3 className="text-3xl font-extrabold my-2">{title}</h3>
      <p className="mt-4">{description}</p>
    </Card>
  );
};
export { AnimalCard };
