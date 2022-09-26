import clsx from 'clsx';
import Image from 'next/future/image';

import { FeatureDetailsFragment } from '../../misuku/api';

type FeatureItemProps = Pick<FeatureDetailsFragment, 'image' | 'title' | 'content'> & {
  index: number;
};

const FeatureItem = ({ image, content, title, index }: FeatureItemProps) => {
  const isImageNotOdd = index % 2 !== 0;

  return (
    <div className={clsx('flex flex-col md:flex-row', isImageNotOdd && 'md:flex-row-reverse')}>
      <div className={'w-1/2'}>
        <Image
          src={image.url}
          alt={image.fileName}
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
      <div className={'flex h-auto w-1/2 flex-col justify-between p-10'}>
        <h1 className={'mb-10 max-w-2xl text-4xl '}>{title}</h1>
        <p className={'mt-auto text-sm'}>{content}</p>
      </div>
    </div>
  );
};

export { FeatureItem };
