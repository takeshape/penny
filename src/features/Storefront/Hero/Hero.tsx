export interface HeroProps {
  text: {
    primary: string;
    secondary: string;
    button: string;
  };
  image: string;
}

export const Hero: React.FC<HeroProps> = (props) => {
  const { text, image } = props;
  return (
    <div className="relative">
      <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-100 lg:block" />
      <div className="relative bg-gray-100 lg:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
          <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
            <div className="lg:pr-16">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                {text.primary}
              </h1>
              <p className="mt-4 text-xl text-gray-600">{text.secondary}</p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block bg-indigo-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-700"
                >
                  {text.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img src={image} alt="" className="w-full h-full object-center object-cover" />
      </div>
    </div>
  );
};

export default Hero;
