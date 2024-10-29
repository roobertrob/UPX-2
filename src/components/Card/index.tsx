const Card = ({ children, withBorder = false }) => {
  return (
    <div
      className={`${
        withBorder ? 'border-4 border-primary-solid border-current' : ''
      }bg-neutral-100 rounded-customRadius w-full h-full flex flex-col items-center p-8`}
    >
      {children}
    </div>
  );
};

export { Card };
