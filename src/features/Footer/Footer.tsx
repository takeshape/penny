import { useQuery } from '@apollo/client';
import * as Icons from 'components/Icons/Icons';
import { Footer as FooterShape } from 'types/takeshape';
import { GetFooterQuery } from './Footer.queries';
import { Navigation } from './Navigation/Navigation';
import { Newsletter } from './Newsletter/Newsletter';
import { Social, SocialProps } from './Social/Social';

const social: SocialProps = {
  channels: [
    {
      name: 'Facebook',
      href: '#',
      icon: Icons.Facebook
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Icons.Instagram
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Icons.Twitter
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Icons.GitHub
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: Icons.Dribbble
    }
  ]
};

const Footer = () => {
  const { data } = useQuery<{ footer: FooterShape }>(GetFooterQuery);
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Navigation sections={data?.footer?.navigation?.sections} />
          <div className="mt-8 xl:mt-0">
            <Newsletter text={data?.footer?.newsletter?.text} />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <Social {...social} />
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {currentYear} Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
