import React, { useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { TestimonialDetailFragment } from '../../misuku/api';

type TestimonialsProps = {
  data: TestimonialDetailFragment[];
};

export const Testimonials = ({ data }: TestimonialsProps) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <section>
      <div className={'group relative bg-[#eae7dd]'}>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          onBeforeInit={(swiper) => {
            if (!swiper) return;
            swiperRef.current = swiper;
          }}
          pagination={true}
          autoplay={{ delay: 5000 }}
          loop={true}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
        >
          {data.map((testimonial) => {
            return (
              <SwiperSlide
                key={testimonial.author}
                className={'w-64 py-32 px-3.5 lg:flex lg:flex-col lg:items-center lg:text-center '}
              >
                <p className={'text-sm'}>Trusted by</p>
                <p className={'text-sm'}>{testimonial.author}</p>
                <h3 className={'max-w-[550px] text-xl lg:max-w-4xl lg:text-4xl'}>
                  {testimonial.content}
                </h3>
              </SwiperSlide>
            );
          })}
          <div
            className={
              'invisible top-0 right-0 flex h-full w-20 transform items-center justify-center transition-all duration-500  ease-in-out  lg:absolute lg:z-10 lg:group-hover:visible  lg:group-hover:-translate-x-11 '
            }
          >
            <button
              className={' flex h-6 w-6 items-center justify-center rounded-full bg-black'}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FiArrowRight className={'text-amber-50'} />
            </button>
          </div>
          <button
            className={
              'invisible top-0 left-0 inline-block h-full w-20 transform text-left   transition-all duration-500 ease-in-out lg:absolute lg:z-10 lg:group-hover:visible  lg:group-hover:translate-x-11'
            }
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FiArrowLeft />
          </button>
        </Swiper>
      </div>
    </section>
  );
};
