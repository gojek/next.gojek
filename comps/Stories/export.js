import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('~/../../comps/Stories'), {
  ssr: false,
});

export default () => <DynamicComponentWithNoSSR />;
