import { useSwiper } from 'swiper/react';
import nextIcon from '../../../assets/next.png';
import prevIcon from '../../../assets/prev.png';
import { Box } from '@mui/material';

function SlideButton({ direction }) {
  const swiper = useSwiper();
  const isNext = direction === 'next';

  return (
    <Box
      component="img"
      src={isNext ? nextIcon : prevIcon}
      onClick={() => (isNext ? swiper.slideNext() : swiper.slidePrev())}
      height={48}
      width={48}
      position="absolute"
      top={0}
      {...(isNext ? { right: 0 } : { left: 0 })}
      sx={{ cursor: 'pointer' }}
      zIndex={999}
      bgcolor="#fff"
    />
  );
}

const SlidePrevButton = () => <SlideButton direction="prev" />;
const SlideNextButton = () => <SlideButton direction="next" />;

export { SlideNextButton, SlidePrevButton };
