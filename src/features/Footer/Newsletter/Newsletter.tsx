export interface NewsletterProps {
  text: {
    primary: string;
    secondary: string;
    button: string;
  };
  onSubmit: () => void;
}

const Newsletter = (props: React.PropsWithChildren<NewsletterProps>) => {
  const { text, onSubmit } = props;
  return (
    <>
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{text.primary}</h3>
      <p className="mt-4 text-base text-gray-500">{text.secondary}</p>
      <form className="mt-4 sm:flex sm:max-w-md" onSubmit={onSubmit}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {text.button}
          </button>
        </div>
      </form>
    </>
  );
};

export default Newsletter;
