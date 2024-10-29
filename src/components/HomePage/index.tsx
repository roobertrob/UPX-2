import Image from 'next/image';

import AnimalsInExtinctionSection from './AnimalsInExtinctionSection';
import { IntroductionSection } from './IntroductionSection';
import { IUCNCategories } from './IUCNCategories';
import { WhatIsEcoWarriors } from './WhatIsEcoWarriors';

const HomePage = () => {
  return (
    <div className="text-primary-solid text-center mb-10">
      <Image src="/banner-home.png" alt="" width={1900} height={200} />
      <div className="w-full flex  flex-col justify-center items-center space-y-8">
        <IntroductionSection />
        <IUCNCategories />
      </div>
      <WhatIsEcoWarriors />
      <AnimalsInExtinctionSection />
    </div>
  );
};

export default HomePage;
