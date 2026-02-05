export default function SlideSkeleton() {
  return (
    <div className='flex h-[576px]'>
      {[1, 2, 3].map((i) => (
        <div key={i} className='flex-1 bg-gray-200 animate-pulse' />
      ))}
    </div>
  );
}
