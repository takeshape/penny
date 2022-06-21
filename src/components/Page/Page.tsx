import Wrapper from 'components/Wrapper/Content';
import { ContentBody } from 'features/Content/ContentBody';
import { ContentHeader } from 'features/Content/ContentHeader';
import { Page } from 'types/takeshape';

export interface PageProps {
  page: Page;
}

export const PageComponent = ({ page }: PageProps) => {
  return (
    <Wrapper>
      <div className="relative px-4 sm:px-6 lg:px-8">
        {page.sections.map((section, index) => {
          if (section.__typename === 'PageSectionTitle') {
            return (
              <ContentHeader
                key={index}
                heading={section.heading}
                subheading={section.subheading}
                label={section.label}
              />
            );
          } else if (section.__typename === 'PageSectionMdx') {
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

export default PageComponent;
