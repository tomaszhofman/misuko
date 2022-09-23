import Image from 'next/image';
import Link from 'next/link';

import { PageHeroDetailsFragment } from '../../misuku/api';

type PageHeroProps = {
  data: PageHeroDetailsFragment;
};

export const PageHero = ({ data }: PageHeroProps) => {
  return (
    <section
      aria-labelledby={'heroSection'}
      className={'h-[95vh] max-h-[70rem] flex-col md:flex md:flex-row'}
    >
      <div className={'relative md:w-1/2 md:flex-1 '}>
        <div className={'mt-28 flex h-full flex-col items-start justify-center  p-10 md:mt-0'}>
          <h1 className={'line text-3xl font-normal tracking-normal md:max-w-md md:text-5xl'}>
            {data.title}
          </h1>
          <Link href={'/collection'} passHref>
            <a
              href="pass"
              className={
                'bottom-4 mt-20 max-w-fit rounded-3xl border border-black  bg-transparent py-2 px-6 md:absolute md:mt-0'
              }
            >
              Shop now
            </a>
          </Link>
        </div>
      </div>
      <div className={'relative h-full md:w-1/2 md:flex-1 '}>
        {/*TODO: Add alt text in database*/}
        <Image
          alt={'some text that describes image'}
          className={'absolute h-full w-full'}
          src={data.image.url}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};
