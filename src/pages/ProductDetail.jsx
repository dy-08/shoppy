import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { user } = useAuthContext();
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: {
        id,
        image,
        brand,
        category,
        title,
        description,
        price,
        options,
      },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = () => {
    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }
    // 장바구니
    const product = {
      productId: id,
      itemKey: id + '_' + selected,
      image,
      brand,
      title,
      price,
      option: selected,
      quantity: 1,
    };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess(`장바구니에 상품을 담았습니다.`);
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      },
    });
  };

  return (
    <section>
      <section className='flex flex-col md:flex-row p-4 bg-[#fafafa]'>
        <div className='w-full basis-9/13'>
          <img className='w-[68%] mx-auto' src={image} alt={title} />
        </div>
        <div className='w-full basis-4/13 flex flex-col p-4 bg-white font-pretendard text-stone-900'>
          <p className='text-sm font-semibold'>{brand}</p>
          <p className='text-xs text-gray-400 mt-2'>{category}</p>
          <p className='text-xl font-semibold'>{title}</p>
          <p className='text-sm text-gray-400'>{description}</p>
          <p className='text-lg font-semibold py-4 mb-4 border-b border-gray-100'>
            ₩{price.toLocaleString('ko-KR')}
          </p>
          <div className='flex items-center mb-4'>
            <label className='text-sm font-semibold' htmlFor='select'>
              사이즈
            </label>
            <select
              className='px-2 py-1 m-2 flex-1 text-sm border-gray-300 border-[0.5px] outline-none rounded-sm'
              id='select'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option className='text-xs' key={index}>
                    {option}
                  </option>
                ))}
            </select>
          </div>
          {success && (
            <div className='my-2 flex gap-2 items-center'>
              <img className='w-8 h-8 rounded-full' src={image} alt={title} />
              <p className='text-sm font-pretendard font-semibold'>{success}</p>
            </div>
          )}
          <Button text={'장바구니에 추가'} onClick={handleClick} />
        </div>
      </section>
    </section>
  );
}
