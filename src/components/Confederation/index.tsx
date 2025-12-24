import confederations from './confederations';

export type ConfederationParams = {
  name: string;
};

export default function Confederation({ name, ...props }: ConfederationParams) {
  const src: string = confederations[name];
  return src ? <img src={src} {...props} /> : null;
}
