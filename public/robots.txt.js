import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const RobotsTxtPage = () => {
  return null;
};
export async function getStaticProps() {
  const { NEXT_PUBLIC_ROBOTS_TXT } = publicRuntimeConfig;
  const content = NEXT_PUBLIC_ROBOTS_TXT ? '' : 'User-agent: *\nDisallow: /';
  const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en';
  return {
    props: {
      content,
      locale,
    },
  };
}
export default RobotsTxtPage;
