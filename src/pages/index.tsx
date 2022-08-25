import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import Layout from '../components/Layout';

const Home: NextPage = () => {
	const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

	return (
		<>
			<Head>
				<title>Cherry Share Point</title>
				<meta name='description' content='Home' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout />
		</>
	);
};

export default Home;
