import Image from 'next/image';

import { Card } from '../Card';

const AnimalCard = ({ imagePath, description }) => {
  return (
    <Card withBorder>
      <Image src={imagePath} width={100} height={100} alt="" />
      <p className='mt-4'>{description}</p>
    </Card>
  );
};
export { AnimalCard };
