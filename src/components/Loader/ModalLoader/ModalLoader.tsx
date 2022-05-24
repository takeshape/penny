import { Transition } from '@headlessui/react';
import PageLoader from 'components/PageLoader';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { isModalLoaderOpenAtom } from 'store';

export const ModalLoader = () => {
  const [isModalLoaderOpen, setIsModalLoaderOpen] = useAtom(isModalLoaderOpenAtom);

  useEffect(() => {
    document.body.className = `${document.body.className} overflow-hidden`;
  });

  return (
    <Transition
      show={isModalLoaderOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-500 opacity-75 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageLoader colorClass="text-white" />
        </div>
      </div>
      ;
    </Transition>
  );
};

export default ModalLoader;
