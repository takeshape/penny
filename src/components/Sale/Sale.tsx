interface SaleProps {
  text: {
    primary: string;
    secondary: string;
    button: string;
  }
}

const Sale: React.FC<SaleProps> = ({text}) => {
  return (
    <section
      aria-labelledby="sale-heading"
      className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <h2
          id="sale-heading"
          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
        >
          {text.primary}
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
          {text.secondary}
        </p>
        <a
          href="#"
          className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
        >
          {text.button} 
        </a>
      </div>
    </section>
  )
}

export default Sale;
