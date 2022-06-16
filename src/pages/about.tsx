import Wrapper from 'components/Wrapper/Content';
import ContentBodySimple from 'features/Content/Body/Simple';
import ContentHeaderSimple from 'features/Content/Header/Simple';
import Layout from 'layouts/Default';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <Layout title="About">
      <Wrapper>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <ContentHeaderSimple
            heading="The Deluxe ™️ Story"
            subheading="How a brand defied the odds and overcame everything."
            label="About"
          />
          <ContentBodySimple>
            <p>
              At Spindrift Beverage Co. we celebrate the amazing taste of real, simple ingredients every day. Because we
              think real food deserves a real drink to go with it.
            </p>

            <p>
              It all started in 2010, in our founder Bill’s kitchen. Bill wanted to create a beverage he could feel good
              about serving to his whole family. First, he made real fruit sodas and then, after lots of trial and
              error, the very first sparkling water in America made with real squeezed fruit.
            </p>

            <p>
              Spindrift debuted in artisan Boston-area shops and eateries where it caught the eye of local foodies and
              craft beverage fans. Then, it grew from a cult-like following to wide, diverse fan base. Today it’s
              available throughout the US in national retailers, grocery stores, and restaurants alike. The recipe,
              however, has remained the same: sparkling water + real squeezed fruit.
            </p>

            <p>
              Headquartered just outside of Boston, the Spindrift team is obsessively involved with the entire process
              in the creation of our sparkling waters. From visiting the family farms where we source the best-tasting
              fruit, to being on-site for every single production run, to tasting each and every batch. We love the
              challenge that comes from working with real ingredients and making a product that stands out in a crowd.
            </p>

            <p>We drink it, we share it, we love it.</p>
          </ContentBodySimple>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default AboutPage;
