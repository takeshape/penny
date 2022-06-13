export const DetailsLoading = () => (
  <section aria-labelledby="details-heading" className="animate-pulse">
    <div className="flex flex-col items-center text-center">
      <div>
        <div className="w-[270px] h-[40px] bg-gray-300"></div>
      </div>
      <div className="mt-3 max-w-3xl">
        <div className="w-[768px] h-[56px] bg-gray-300"></div>
      </div>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
      <div>
        <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <div className="h-[500px] w-[800px] bg-gray-300"></div>
        </div>
        <div className="mt-8 text-base text-gray-500">
          <div className="h-[72px] w-full bg-gray-300"></div>
        </div>
      </div>
      <div>
        <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <div className="h-[500px] w-[800px] bg-gray-300"></div>
        </div>
        <div className="mt-8 text-base text-gray-500">
          <div className="h-[72px] w-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  </section>
);

export default DetailsLoading;
