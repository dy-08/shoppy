export default function Banner() {
  return (
    <section className='h-96 bg-yellow-900 flex items-center font-pretendard'>
      <div className='w-[50%] h-full bg-cover bg-banner opacity-100'></div>
      <div className='w-[50%] h-full bg-[#F5F5F5] text-center text-gray p-10 px-22'>
        <div className='w-[60px] mx-auto mb-2'>
          <img
            className='w-full mt-6'
            src='/images/showroom.svg'
            alt='320쇼룸'
          />
        </div>
        <h2 className='text-lg font-semibold mb-1'>320쇼룸</h2>
        <div className='flex items-center justify-center gap-1'>
          <div className='w-4 pb-1.5'>
            <img src='/images/korea.gif' alt='한국' />
          </div>
          <p className='text-sm mb-2 text-[#666666]'>한국 · Since 2018</p>
        </div>
        <p className='text-sm text-left text-[#666666]'>
          320쇼룸(320SHOWROOM)은 모던한 감성과 톤 다운 컬러에 포인트를 더해
          담백하면서도 차별화된 디자인을 선보이고 있습니다. 실용적이면서 편안한
          실루엣으로 트랜디한 감성을 담았습니다. 모던하고 미니멀한 감성이지만
          트렌디함을 더해 320쇼룸은 가볍게 다가가지만, 가벼워보이지 않는
          스타일을 추구하고 있는 브랜드입니다.
        </p>
      </div>
    </section>
  );
}
