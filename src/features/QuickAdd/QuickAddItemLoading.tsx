export const QuickAddItemLoading = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8 animate-pulse">
      <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
        <div className="w-[400px] h-[500px] bg-gray-300"></div>
      </div>
      <div className="sm:col-span-8 lg:col-span-7">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
          <div className="h-8 w-72 bg-gray-300"></div>
        </h2>

        <section aria-labelledby="information-heading" className="mt-2">
          <div className="h-8 w-36 bg-gray-300"></div>
        </section>
      </div>
    </div>
  );
};
