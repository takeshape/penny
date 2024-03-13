import NextImage from '@/components/NextImage';

export type Post = {
  title: string;
  href: string;
  category: {
    name: string;
    href: string;
  };
  description: string;
  date: string;
  datetime: string;
  imageUrl: string;
  readingTime: string;
  author: {
    name: string;
    href: string;
    imageUrl: string;
  };
};

export type BlogProps = {
  blog: {
    text: {
      primary: string;
      secondary: string;
    };
    posts: Post[];
  };
};

export const Blog = (props: BlogProps) => {
  const {
    blog: { text, posts }
  } = props;
  return (
    <div className="relative bg-background pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-background h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-body-900 sm:text-4xl">{text.primary}</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-body-500 sm:mt-4">{text.secondary}</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <NextImage
                className="flex-shrink-0 object-cover h-48 w-full"
                height={500}
                width={500}
                src={post.imageUrl}
                alt=""
              />
              <div className="flex-1 bg-background p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-accent-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-primary-900">{post.title}</p>
                    <p className="mt-3 text-base text-body-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <NextImage height={40} width={40} className="rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-primary-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-body-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
