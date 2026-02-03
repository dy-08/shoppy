import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  product,
  product: { id, image, title, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      key={id}
      className='cursor-pointer transition-all hover:scale-101'
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
    >
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-md'>
        <h3 className='truncate'>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
    </li>
  );
}
