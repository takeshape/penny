import { PropsWithChildren } from 'react';
export interface HeaderProps {
  header: {
    text: {
      primary: string;
      secondary: string;
    };
  };
}

export const Header = ({ header: { text } }: PropsWithChildren<HeaderProps>) => {
  return (
    <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{text.primary}</h1>
      <p
        className="mt-4 max-w-xl mx-auto text-base text-gray-500 prose"
        dangerouslySetInnerHTML={{ __html: text.secondary }}
      ></p>
    </div>
  );
};
