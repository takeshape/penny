import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export const CartEmpty = () => {
  return (
    <button
      type="button"
      className="relative block w-full border-2 border-body-300 border-dashed rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 cursor-default"
    >
      <div className="mx-auto h-12 w-12 text-body-400">
        <ShoppingCartIcon />
      </div>
      <span className="mt-2 block text-sm font-medium text-body-900">Your cart is empty</span>
    </button>
  );
};
