const OrderSkeleton = () => (
  <div className="animate-pulse shadow sm:rounded-md sm:overflow-hidden bg-white p-2 sm:p-4 w-full">
    <header>
      <div className="w-24 bg-gray-300 h-4 rounded-md" />
    </header>
    <main className="mb-2 px-2">
      <table className="w-full text-gray-500 sm:mt-6">
        <caption className="sr-only">Products</caption>
        <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
          <tr>
            <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
              <div className="w-24 bg-gray-300 h-4 rounded-md" />
            </th>
            <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
              <div className="w-24 bg-gray-300 h-4 rounded-md" />
            </th>
            <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
              <div className="w-24 bg-gray-300 h-4 rounded-md" />
            </th>
          </tr>
        </thead>
        <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
          <tr>
            <td className="flex py-6 pr-8">
              <div className="flex bg-gray-300 rounded-md items-center w-16 h-16 mr-6" />
              <div className="flex flex-col gap-2">
                <div className="w-24 bg-gray-300 h-4 rounded-md" />
                <div className="w-16 bg-gray-300 h-4 rounded-md" />
              </div>
            </td>
            <td className="py-6 pr-8">
              <div className="w-6 bg-gray-300 h-4 rounded-md" />
            </td>
            <td className="hidden py-6 pr-8 sm:table-cell">
              <div className="w-16 bg-gray-300 h-4 rounded-md" />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <footer className="bg-gray-50 rounded-lg p-2 sm:p-4 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
      <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:gap-x-8">
        <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
          <dt>
            <div className="w-24 bg-gray-300 h-4 rounded-md" />
          </dt>
          <dd className="sm:mt-1">
            <div className="w-32 bg-gray-300 h-4 rounded-md" />
          </dd>
        </div>
        <div className="flex justify-between sm:block">
          <dt className="font-medium text-gray-900">
            <div className="w-24 bg-gray-300 h-4 rounded-md" />
          </dt>
          <dd className="sm:mt-1">
            <div className="w-32 bg-gray-300 h-4 rounded-md" />
          </dd>
        </div>
        <div className="flex justify-between pt-6 sm:block sm:pt-0">
          <dt className="font-medium text-gray-900">
            <div className="w-24 bg-gray-300 h-4 rounded-md" />
          </dt>
          <dd className="sm:mt-1">
            <div className="w-32 bg-gray-300 h-4 rounded-md" />
          </dd>
        </div>
      </dl>
    </footer>
  </div>
);

export default OrderSkeleton;
