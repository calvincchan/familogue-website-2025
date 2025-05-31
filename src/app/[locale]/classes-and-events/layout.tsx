// import { useSelectedLayoutSegments } from 'next/navigation';
// import { getPageBySlug } from './utils';

export async function generateMetadata({ params }) {
  const post = null;

  return {
    title: {
      default: 'Programs | Familogue 語你童行',
      template: '%s | Programs | Familogue 語你童行'
    },
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}