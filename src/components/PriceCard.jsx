export default function PriceCard({ text, price, variant = false }) {
  const isTotal = variant === true;
  return (
    <div className='flex justify-between text-base text-sm'>
      <p className={isTotal ? 'font-semibold' : ''}>{text}</p>
      <p className=''>{price.toLocaleString('ko-KR')}원</p>
    </div>
  );
}
