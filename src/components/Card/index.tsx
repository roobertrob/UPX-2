const Card = ({ children }) => {
  return (
    <div className="bg-neutral-100 rounded-customRadius w-full h-full flex flex-col items-center p-8">
      {children}
    </div>
  );
};

export { Card };
