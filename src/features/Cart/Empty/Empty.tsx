import { ShoppingCartIcon } from '@heroicons/react/outline';

export const CartEmpty = () => {
  return (
    <button
      type="button"
      className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-default"
    >
      <div className="mx-auto h-12 w-12 text-gray-400">
        <ShoppingCartIcon />
      </div>
      <span className="mt-2 block text-sm font-medium text-gray-900">Your cart is empty</span>
    </button>
  );
};

export default CartEmpty;
