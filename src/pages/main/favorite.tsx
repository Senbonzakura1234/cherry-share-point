import type { NextPage } from 'next/types';
import { trpc } from '~/utils/trpc';

const FavoritePage: NextPage = () => {
	const { data, isFetching } = trpc.useQuery([
		'example.hello',
		{ text: 'from tRPC' },
	]);

	return <p>{isFetching ? 'isLoading' : data?.greeting}</p>;
};

export default FavoritePage;
