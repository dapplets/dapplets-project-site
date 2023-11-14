import styles from './ThemeImage.module.scss';
import Image, { ImageProps, StaticImageData } from 'next/image';
import cn from 'classnames';
type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string | StaticImageData;
  srcDark: string | StaticImageData;
  className?: string;
};

export const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, alt, className, ...rest } = props;
  console.log(className);

  return (
    <>
      <Image
        {...rest}
        src={srcLight}
        alt={alt}
        className={cn(styles.imgLight, className, {
          [styles.noTransition]: className == 'noTransition',
        })}
      />
      <Image
        {...rest}
        src={srcDark}
        alt={alt}
        className={cn(styles.imgDark, className)}
      />
    </>
  );
};
