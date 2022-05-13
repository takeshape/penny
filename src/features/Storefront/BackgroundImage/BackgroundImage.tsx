import NextImage from 'components/NextImage';

const BackgroundImage: React.FC<{ image: string }> = ({ image, children }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
          <NextImage layout="fill" src={image} alt="" className="w-full h-full object-center object-cover" />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
      </div>
      {children}
    </div>
  );
};

export default BackgroundImage;
