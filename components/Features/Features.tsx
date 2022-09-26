import { FeatureItem } from '@/components/Features/FeatureItem';

import { FeatureDetailsFragment } from '../../misuku/api';

type FeaturesProps = {
  data: FeatureDetailsFragment[];
};

export const Features = ({ data }: FeaturesProps) => {
  return (
    <section aria-labelledby={'our-features'}>
      {data.map((feature, index) => (
        <FeatureItem {...feature} key={feature.id} index={index} />
      ))}
    </section>
  );
};
