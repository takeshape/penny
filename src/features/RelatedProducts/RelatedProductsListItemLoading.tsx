const RelatedProductsListItemLoading = () => {
  return (
    <div className="animate-pulse">
      <div>
        <div className="w-full h-72 rounded-lg overflow-hidden">
          <div className="bg-gray-300 h-72 w-72"></div>
        </div>
        <div className="mt-4">
          <div className="bg-gray-300 h-5 w-36"></div>
        </div>
      </div>
      <div className="mt-6">
        <div className=" h-9 flex bg-gray-300 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"></div>
      </div>
    </div>
  );
};

export default RelatedProductsListItemLoading;
