import type { ImgHTMLAttributes } from 'react';
import flags, { type FlagName } from './flags';

export type FlagProps = {
  name: FlagName;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

export default function Flag({ name, ...props }: FlagProps) {
  const src: string = flags[name];
  return src ? <img src={src} {...props} /> : null;
}
