import confederations, { type ConfedeationLogoName } from './confederations';

export type ConfederationLogoProps = {
  name: ConfedeationLogoName;
};

export default function ConfederationLogo({
  name,
  ...props
}: ConfederationLogoProps) {
  const src: string = confederations[name];
  return src ? <img src={src} {...props} /> : null;
}
