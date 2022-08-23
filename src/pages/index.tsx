import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const ThemeSwitcher = dynamic(() => import('../components/ThemeSwitcher'), {
	ssr: false,
});
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
	const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

	return (
		<>
			<Head>
				<title>Cherry Share Point</title>
				<meta name='description' content='Home' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='grid h-screen w-screen place-content-center'>
				<ThemeSwitcher />
			</main>
		</>
	);
};

export default Home;
