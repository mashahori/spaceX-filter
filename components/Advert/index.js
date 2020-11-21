import { useState } from 'react';
import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';
import { Section, H3, StyledText, Arrow } from './styles';

const Advert = props => {
  const [hover, setHovered] = useState(false);
  const {
    data: { name, descr, slug },
  } = props;

  return (
    <Link href={`vacancies/${slug}`}>
      <Section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <H3>{name}</H3>
        <StyledText>{descr}</StyledText>
        <Arrow>
          <ArrowRight />
        </Arrow>
      </Section>
    </Link>
  );
};

export default Advert;
