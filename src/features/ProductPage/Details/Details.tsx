import NextImage from 'components/NextImage';

interface Detail {
  image: {
    src: string;
    alt: string;
  };
  description: string;
}

export interface DetailsProps {
  details: {
    text: {
      primary: string;
      secondary: string;
    };
    details: Detail[];
  };
}

const Details = ({ details: { text, details } }: React.PropsWithChildren<DetailsProps>) => (
  <section aria-labelledby="details-heading">
    <div className="flex flex-col items-center text-center">
      <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {text.primary}
      </h2>
      <p className="mt-3 max-w-3xl text-lg text-gray-600">{text.secondary}</p>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
      {details.map((detail, detailIdx) => (
        <div key={`detail-${detailIdx}`}>
          <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <NextImage
              layout="fill"
              src={detail.image.src}
              alt={detail.image.alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <p className="mt-8 text-base text-gray-500">{detail.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Details;
