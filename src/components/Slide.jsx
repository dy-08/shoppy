import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useProducts from '../hooks/useProducts';
import Banner from '../components/Banner';
import SlideSkeleton from './ui/SlideSkeleton';

export default function Slide() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  if (isLoading) return <SlideSkeleton />;
  if (error || !products || products.length < 1) return <Banner />;

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      slidesPerGroup={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {products &&
        products.map((product) => (
          <SwiperSlide key={product.id}>
            <img src={product.image} alt={product.title} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
