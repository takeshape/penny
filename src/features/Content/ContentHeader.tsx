export interface ContentHeaderProps {
  heading: string;
  label?: string;
  subheading?: string;
}

export const ContentHeader = ({ heading, label, subheading }: ContentHeaderProps) => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        {label && <h2 className="text-base font-semibold text-accent-600 tracking-wide uppercase">{label}</h2>}
        <p className="mt-1 text-4xl font-extrabold text-body-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {heading}
        </p>
        {subheading && <p className="max-w-xl mt-5 mx-auto text-xl text-body-500">{subheading}</p>}
      </div>
    </div>
  );
};
