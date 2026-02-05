import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, price, brand },
}) {
  const navigate = useNavigate();
  return (
    <li
      key={id}
      className='cursor-pointer transition-all hover:scale-101 h-[402px]'
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
    >
      <div className='h-[312px] overflow-hidden'>
        <img
          className='w-full h-full scale-99 object-cover object-[50%_50%]'
          src={image}
          alt={title}
        />
      </div>
      <div className='h-[90px] mt-2 px-2 font-pretendard text-sm'>
        <p>{brand}</p>
        <h3 className='truncate'>{title}</h3>
        <p className='font-semibold'>{`₩${price.toLocaleString('ko-KR')}`}</p>
      </div>
    </li>
  );
}
