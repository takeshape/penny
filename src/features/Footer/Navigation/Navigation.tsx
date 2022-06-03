import { NextLink } from 'components/NextLink';
import { useMemo } from 'react';

interface NavigationItemProps {
  name?: string;
  href?: string;
}

const NavigationItem = (props: React.PropsWithChildren<NavigationItemProps>) => (
  <NextLink href={props.href} className="text-base text-gray-500 hover:text-gray-900">
    {props.name}
  </NextLink>
);

interface NavigationSectionProps {
  name?: string;
  items?: NavigationItemProps[];
}

const NavigationSection = (props: React.PropsWithChildren<NavigationSectionProps>) => (
  <>
    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{props.name}</h3>
    <ul role="list" className="mt-4 space-y-4">
      {props.items.map((item) => (
        <li key={item.name}>
          <NavigationItem {...item} />
        </li>
      ))}
    </ul>
  </>
);

export interface NavigationProps {
  sections?: NavigationSectionProps[];
}

const Navigation = (props: React.PropsWithChildren<NavigationProps>) => {
  const { sections } = props;
  const navigationItems = useMemo(() => {
    const items = [];
    for (let i = 0; i < sections?.length ?? 0; i += 2) {
      const item0 = sections[i];
      const item1 = sections[i + 1];
      items.push(
        <div key={`section-${i / 2}`} className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <NavigationSection {...item0} />
          </div>
          {item1 && (
            <div className="mt-12 md:mt-0">
              <NavigationSection {...item1} />
            </div>
          )}
        </div>
      );
    }
    return items;
  }, [sections]);
  return <div className="grid grid-cols-2 gap-8 xl:col-span-2">{navigationItems}</div>;
};

export default Navigation;
