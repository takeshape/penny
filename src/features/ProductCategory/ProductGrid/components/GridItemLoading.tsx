export const GridItemLoading = () => {
  return (
    <>
      <div className="rounded-lg overflow-hidden bg-mainText-200 aspect-w-1 aspect-h-1 group-hover:opacity-75 animate-pulse">
        <div className="bg-mainText-300 h-[300px] w-[300px]"></div>
      </div>
      <div className="pt-10 pb-4">
        <h3 className="flex flex-col items-center">
          <div className="bg-mainText-300 h-[20px] w-44"></div>
        </h3>
        <div className="mt-3 flex flex-col items-center">
          <div className="flex items-center">
            <div className="bg-mainText-300 h-[20px] w-[100px]"></div>
          </div>
          <div className="mt-1">
            <div className="bg-mainText-300 h-[20px] w-[63px]"></div>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <div className="bg-mainText-300 h-[24px] w-32"></div>
        </div>
      </div>
    </>
  );
};
