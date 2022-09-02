export const SubscriptionSkeleton = () => (
  <div className="animate-pulse bg-background border-t border-b border-body-200 shadow-sm sm:rounded-lg sm:border">
    <div className="flex items-center p-4 border-b border-body-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
      <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
        <div>
          <dt className="w-24 bg-body-300 h-3 rounded-md"></dt>
          <dd className="mt-1 w-32 bg-body-300 h-3 rounded-md"></dd>
        </div>
        <div className="hidden sm:block">
          <dt className="w-24 bg-body-300 h-3 rounded-md"></dt>
          <dd className="mt-1 w-32 bg-body-300 h-3 rounded-md"></dd>
        </div>
        <div>
          <dt className="w-32 bg-body-300 h-3 rounded-md"></dt>
          <dd className="mt-1 w-24 bg-body-300 h-3 rounded-md"></dd>
        </div>
      </dl>
    </div>
    <div>
      <div id="headlessui-tabs-panel-:rnf:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:rn9:" tabIndex={0}>
        <div className="flow-root">
          <div className="divide-y divide-gray-200">
            <div className="flex p-4 sm:p-6">
              <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                <div className="lg:flex-1">
                  <div className="sm:flex">
                    <div className="flex">
                      <div className="flex-grow">
                        <h4 className="font-medium w-48 bg-body-300 h-4 rounded-md"></h4>
                        <div className="text-sm font-medium w-32 bg-body-300 h-3 rounded-md mt-1"></div>
                        <div className="text-sm font-medium w-32 bg-body-300 h-3 rounded-md mt-1"></div>
                        <p className="mt-2 text-sm bg-body-300 sm:block w-auto h-3 rounded-md"></p>
                        <p className="mt-2 text-sm bg-body-300 sm:block w-auto h-3 rounded-md"></p>
                        <p className="mt-2 text-sm bg-body-300 sm:block w-auto h-3 rounded-md"></p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col text-sm font-medium sm:flex-row sm:mt-8">
                    <div className="flex-grow">
                      <div className="mt-1 text-xs font-medium flex items-center gap-1 w-32 bg-body-300 h-4 rounded"></div>
                      <div className="mt-1 text-xs font-medium flex items-center gap-1 w-32 bg-body-300 h-3 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 font-medium grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex items-center">
                    <p className="ml-2 text-sm font-medium bg-body-300 w-64 h-3 rounded-md"></p>
                  </div>
                  <div className="flex items-center sm:ml-auto mt-4 sm:mt-0">
                    <p className="ml-2 text-sm font-medium bg-body-300 w-64 h-3 rounded-md"></p>
                  </div>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
                <div className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52 bg-body-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
