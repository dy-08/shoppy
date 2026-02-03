import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });

  return (
    <div className='relative'>
      <AiOutlineShoppingCart className='text-3xl' />
      {products && (
        <p className='w-5 h-5 text-center bg-brand text-white text-base/5 font-semibold rounded-full absolute -top-1 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}
