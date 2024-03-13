import NextImage from '@/components/NextImage';
import { ProductPageDetails as ProductPageDetailsType } from '../types';

export type DetailsProps = {
  details: ProductPageDetailsType;
};

export const Details = ({ details: { text, details } }: DetailsProps) => (
  <section aria-labelledby="details-heading">
    <div className="flex flex-col items-center text-center">
      <h2
        id="details-heading"
        className="text-3xl font-extrabold tracking-tight text-body-900 sm:text-4xl prose"
        dangerouslySetInnerHTML={{ __html: text.primary }}
      ></h2>
      <p
        className="mt-3 max-w-3xl text-lg text-body-600 prose"
        dangerouslySetInnerHTML={{ __html: text.secondary }}
      ></p>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
      {details.map((detail, detailIdx) => (
        <div key={`detail-${detailIdx}`}>
          {detail.image && (
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <NextImage
                src={detail.image.url}
                alt={detail.image.altText}
                height={600}
                width={400}
                className="w-full h-full object-center object-cover"
              />
            </div>
          )}
          <p
            className="mt-8 text-base text-body-500 prose"
            dangerouslySetInnerHTML={{ __html: detail.description }}
          ></p>
        </div>
      ))}
    </div>
  </section>
);
