import { Card } from '../Card';

const ICNUCard = ({ title, acronym, description }) => {
  return (
    <div className="w-96 h-80 text-center">
      <Card>
        <div className="rounded-full bg-primary-solid text-2xl p-3 text-white font-bold">
          {acronym}
        </div>
        <h1 className="text-2xl font-semibold text-primary-solid my-6">
          {title}
        </h1>
        <p className="text-primary-solid text-xl ">{description}</p>
      </Card>
    </div>
  );
};
export { ICNUCard };
