interface SocialItem {
  name: string;
  href: string;
  icon: (props) => JSX.Element;
}

export interface SocialProps {
  channels: SocialItem[];
}

const Social = (props: React.PropsWithChildren<SocialProps>) => (
  <div className="flex space-x-6 md:order-2">
    {props.channels.map((item) => (
      <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">{item.name}</span>
        <item.icon className="h-6 w-6" aria-hidden="true" />
      </a>
    ))}
  </div>
);

export default Social;
