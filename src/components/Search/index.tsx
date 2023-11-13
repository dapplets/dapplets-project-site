import Link from 'next/link';
import styles from './Search.module.scss';
import search from '@/assets/icon/header/search-dark.svg';
import searchLight from '@/assets/icon/header/search.svg';
import cn from 'classnames';
import Image from 'next/image';
export interface SearchProps {
  isLight: boolean;
}
export function Search({ isLight }: SearchProps) {
  return (
    <div
      className={cn(styles.wrapper, 'flex justify-between', {
        [styles.wrapperLight]: isLight,
      })}
    >
      <Image
        className={cn(styles.inputImg)}
        width={16}
        height={16}
        alt='logo'
        src={isLight ? searchLight : search}
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
