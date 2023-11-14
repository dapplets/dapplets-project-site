import styles from './Search.module.scss';
import search from '@/assets/icon/header/search-dark.svg';
import searchLight from '@/assets/icon/header/search.svg';
import cn from 'classnames';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ThemeImage } from '../ThemeImage';

export interface SearchProps {}

export function Search({}: SearchProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={cn(
        styles.wrapper,
        'max-xl:padding-global max-sm:sm-padding-x flex justify-between',
        {
          [styles.wrapperLight]: resolvedTheme === 'light',
        }
      )}
    >
      <ThemeImage
        className={cn(styles.inputImg)}
        width={16}
        height={16}
        alt='logo'
        srcDark={search}
        srcLight={searchLight}
      />

      <input
        className={cn(styles.input, 'text-base')}
        type='text'
        readOnly
        placeholder='Search documentation...'
        value=''
      />
    </div>
  );
}
