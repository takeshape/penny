export interface ContentHeaderSimpleProps {
  heading: string;
  label?: string;
  subheading?: string;
}

export const ContentHeaderSimple = ({ heading, label, subheading }: ContentHeaderSimpleProps) => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        {label && <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">{label}</h2>}
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {heading}
        </p>
        {subheading && <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">{subheading}</p>}
      </div>
    </div>
  );
};

export default ContentHeaderSimple;
