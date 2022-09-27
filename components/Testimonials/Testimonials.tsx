import React, { useRef } from 'react';
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
      <div className={' group bg-green-500'}>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          onBeforeInit={(swiper) => {
            if (!swiper) return;
            swiperRef.current = swiper;
            console.log(swiperRef);
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
                className={'w-64 py-32 px-3.5 md:flex md:flex-col md:items-center md:text-center'}
              >
                <p className={'text-sm'}>Trusted by</p>
                <p className={'text-sm'}>{testimonial.author}</p>
                <h3 className={'max-w-[550px] text-xl'}>{testimonial.content}</h3>
              </SwiperSlide>
            );
          })}
          <button
            className={'hidden md:group-hover:block'}
            onClick={() => swiperRef.current?.slideNext()}
          >
            Next
          </button>
          <button
            className={'hidden md:group-hover:block'}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            Prev
          </button>
        </Swiper>
      </div>
    </section>
  );
};
