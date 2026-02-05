import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0,
    );

  return (
    <section className='px-8 bg-[#fafafa] font-pretendard'>
      <div className='w-[1080px] mx-auto flex flex-col bg-[#f5f5f5] '>
        <p className='text-base p-4 font-semibold pb-4 border-b border-gray-300'>
          장바구니
        </p>
        {!hasProducts && (
          <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>
        )}
        <div>
          {hasProducts && (
            <div className='flex gap-4'>
              <ul className='flex-1 min-w-0 mb-8 p-4 px-8 bg-white'>
                {products &&
                  products.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
              </ul>
              <div className='w-[360px] h-[280px] shrink-0 flex flex-col bg-white mt-2 mr-4'>
                <div className='flex flex-col gap-2 mb-6 px-4 py-5'>
                  <p className='text-base mb-2 font-semibold'>구매 금액</p>
                  <PriceCard text='상품 금액' price={totalPrice} />
                  <PriceCard text='배송비' price={SHIPPING} />
                  <div className='my-4 border-t border-gray-200' />
                  <PriceCard
                    text='총 구매 금액'
                    price={totalPrice + SHIPPING}
                    variant
                  />
                  <span className='mb-10'></span>
                  <Button text='구매하기' />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
