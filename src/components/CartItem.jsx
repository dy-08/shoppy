import { AiOutlineClose } from 'react-icons/ai';
import { FiMinus, FiPlus } from 'react-icons/fi';
import useCart from '../hooks/useCart';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

export default function CartItem({
  product,
  product: { id, image, brand, title, option, quantity, price },
}) {
  const { addOrUpdateItem, removeItem } = useCart();

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className='flex flex-col justify-between my-2'>
      <p className='text-base font-semibold'>{brand}</p>
      <div className='flex mt-4'>
        <img className='w-22' src={image} alt={title} />
        <div className='flex-1 flex justify-between mt-5 ml-4'>
          <div className='basis-3/5'>
            <p className='text-sm'>{title}</p>
            <p className='text-sm text-gray-400'>
              {option}
              <span> / </span>
              {quantity}개
            </p>
            <p className='text-sm font-semibold'>
              {price.toLocaleString('ko-KR')}원
            </p>
          </div>
          <AiOutlineClose className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
      <div className='inline-flex w-fit items-center border border-gray-300 rounded-md overflow-hidden mt-4'>
        <FiMinus className={ICON_CLASS} onClick={handleMinus} />
        <span className='border-l border-r px-4 py-1 text-xs border-gray-300'>
          {quantity}
        </span>
        <FiPlus className={ICON_CLASS} onClick={handlePlus} />
      </div>
    </li>
  );
}
