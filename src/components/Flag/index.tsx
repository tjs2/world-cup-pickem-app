import flags from './flags';

export type FlagParams = {
  name: string;
};

export default function Flag({ name, ...props }: FlagParams) {
  const src: string = flags[name];
  return src ? <img src={src} {...props} /> : null;
}
