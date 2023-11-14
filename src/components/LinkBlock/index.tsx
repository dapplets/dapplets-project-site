import styles from './LinkBlock.module.scss';
import cn from 'classnames';
import Image from 'next/image';

export interface LinkBlockProps {
  content: any;
}

export function LinkBlock({ content }: LinkBlockProps) {
  return (
    <a
      href={content.link}
      className={cn(
        styles.link,
        'max-sm:width-100-mobile',
        'dark:hover:bg-neutral-800/30',
        'hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700',
        'group flex flex-col rounded-lg border border-transparent px-5 py-4 transition-colors '
      )}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div
        className={cn(
          styles.linkIcon,
          'inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'
        )}
      >
        <Image width={50} height={50} alt='arrow' src='icons/link/arrow.svg' />
      </div>
      <div className={cn(styles.linkTitle, `fonts`)}>{content.title}</div>
      <div className={cn(styles.linkContent, `fonts text-base opacity-70`)}>
        {content.content}
      </div>
    </a>
  );
}
