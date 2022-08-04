import Link from 'next/link';

export interface Breadcrumb {
  id: string;
  href: string;
  name: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs = (props: React.PropsWithChildren<BreadcrumbsProps>) => (
  <nav aria-label="Breadcrumb">
    <ol role="list" className="flex items-center space-x-2">
      {props.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
        <li key={breadcrumb.id}>
          <div className="flex items-center text-sm">
            <Link href={breadcrumb.href}>
              <a className="font-medium text-primary-500 hover:text-primary-900">{breadcrumb.name}</a>
            </Link>
            {breadcrumbIdx !== props.breadcrumbs.length - 1 ? (
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                className="ml-2 flex-shrink-0 h-5 w-5 text-mainText-300"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
