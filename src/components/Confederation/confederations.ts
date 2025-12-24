import AFC from '@/assets/imgs/confederations-logo/AFC.svg';
import CAF from '@/assets/imgs/confederations-logo/CAF.svg';
import CONCACAF from '@/assets/imgs/confederations-logo/CONCACAF.svg';
import CONMEBOL from '@/assets/imgs/confederations-logo/CONMEBOL.svg';
import OFC from '@/assets/imgs/confederations-logo/OFC.svg';
import UEFA from '@/assets/imgs/confederations-logo/UEFA.svg';

const confederations: Readonly<{ [key: string]: string }> = Object.freeze({
  AFC,
  CAF,
  CONCACAF,
  CONMEBOL,
  OFC,
  UEFA,
});

export default confederations;
