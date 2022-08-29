import type { NextPage } from 'next/types';
import { trpc } from '~/utils/trpc';

const NotePage: NextPage = () => {
	const { data, isFetching } = trpc.useQuery([
		'example.hello',
		{ text: 'from tRPC' },
	]);

	return <p>{isFetching ? 'isLoading' : data?.greeting}</p>;
};

export default NotePage;
