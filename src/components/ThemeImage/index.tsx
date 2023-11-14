import styles from './ThemeImage.module.scss';
import Image, { ImageProps, StaticImageData } from 'next/image';

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string | StaticImageData;
  srcDark: string | StaticImageData;
};

export const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, alt, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} alt={alt} className={styles.imgLight} />
      <Image {...rest} src={srcDark} alt={alt} className={styles.imgDark} />
    </>
  );
};
