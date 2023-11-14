import Link from 'next/link';
import styles from './About.module.scss';
import { Layout } from '@/components/Layout';

function About() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Link href='/home'>
          {' '}
          <div>Logo</div>
        </Link>
        <div>Logo</div>
        <Link href='/about'>
          {' '}
          <div>About</div>
        </Link>

        <Link href='/'>
          {' '}
          <div>Home</div>
        </Link>
        <div>Documentation</div>
        <div>Search</div>
        <div>DarkMode</div>
      </div>
    </Layout>
  );
}
export default About;
