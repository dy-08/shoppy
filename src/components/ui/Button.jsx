export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-brand text-sm text-white py-2 px-4 rounded-sm hover:brightness-110 font-pretendard'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
