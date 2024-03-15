'use client';

import Wrapper from '@/components/Wrapper/Content';
import { ContentBody } from '@/features/Content/ContentBody';
import { ContentHeader } from '@/features/Content/ContentHeader';
import { ResponsePage } from './types';

export type PageProps = {
  page: ResponsePage;
};

export const Page = ({ page }: PageProps) => {
  return (
    <Wrapper>
      <div className="relative px-4 sm:px-6 lg:px-8">
        {page.sections.map((section, index) => {
          if (section.__typename === 'PageSectionTitle' && section.heading) {
            return (
              <ContentHeader
                key={index}
                heading={section.heading}
                subheading={section.subheading ?? ''}
                label={section.label ?? ''}
              />
            );
          } else if (section.__typename === 'PageSectionMdx' && section.content) {
            return (
              <ContentBody key={index}>
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </ContentBody>
            );
          }
        })}
      </div>
    </Wrapper>
  );
};

export default Page;
