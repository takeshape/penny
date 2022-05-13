interface NavigationItemProps {
  name: string;
  href: string;
}

const NavigationItem = (props: React.PropsWithChildren<NavigationItemProps>) => (
  <a href={props.href} className="text-base text-gray-500 hover:text-gray-900">
    {props.name}
  </a>
);

interface NavigationSectionProps {
  name: string;
  items: NavigationItemProps[];
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
  sections: {
    [section: string]: NavigationItemProps[];
  };
}

const Navigation = (props: React.PropsWithChildren<NavigationProps>) => (
  <div className="grid grid-cols-2 gap-8 xl:col-span-2">
    <div className="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <NavigationSection name="Solutions" items={props.sections.solutions} />
      </div>
      <div className="mt-12 md:mt-0">
        <NavigationSection name="Support" items={props.sections.support} />
      </div>
    </div>
    <div className="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <NavigationSection name="Company" items={props.sections.company} />
      </div>
      <div className="mt-12 md:mt-0">
        <NavigationSection name="Legal" items={props.sections.legal} />
      </div>
    </div>
  </div>
);

export default Navigation;
