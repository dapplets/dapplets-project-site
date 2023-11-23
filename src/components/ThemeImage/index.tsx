import styles from './ThemeImage.module.scss';
import Image, { ImageProps, StaticImageData } from 'next/image';
import cn from 'classnames';

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  src?: string;
  className?: string;
};

export const ThemeImage = (props: Props) => {
  const { src, alt, className, ...rest } = props;

  return (
    <>
      <Image
        {...rest}
        src={'/themes/light/' + src}
        alt={alt}
        className={cn(styles.imgLight,'unset', className, {
          [styles.noTransition]: className == 'noTransition',
        })}
      />
      <Image
        {...rest}
        src={'/themes/dark/' + src}
        alt={alt}
        className={cn(styles.imgDark, 'unset', className, {
          [styles.noTransition]: className == 'noTransition',}
        )}
      />
    </>
  );
};
