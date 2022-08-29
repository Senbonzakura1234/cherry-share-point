import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { trpc } from '~/utils/trpc';
const Mock = dynamic(() => import('~/components/Mock'), {
	ssr: false,
});

const MockPage: NextPage = () => {
	const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

	return <Mock />;
};

export default MockPage;
