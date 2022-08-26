import { NextPage } from 'next';
import { trpc } from '~/utils/trpc';

const SettingPage: NextPage = () => {
	const { data, isFetching } = trpc.useQuery([
		'example.hello',
		{ text: 'from tRPC' },
	]);

	return <p>{isFetching ? 'isLoading' : data?.greeting}</p>;
};

export default SettingPage;
