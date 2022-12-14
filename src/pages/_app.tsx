import '../styles/globals.css';
import type { AppRouter } from '../server/router';
import type { AppType } from 'next/dist/shared/lib/utils';
import { withTRPC } from '@trpc/next';
import superjson from 'superjson';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import Layout from '~/components/Layout';
import DocumentHead from '~/components/DocumentHead';

// eslint-disable-next-line prefer-const
let pretendServerState = {
	isLogin: true,
};

const MyApp: AppType = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<SessionProvider session={session}>
			<ThemeProvider attribute='data-theme' defaultTheme='autumn'>
				<DocumentHead pageProps={pageProps} />
				<Layout {...pretendServerState} pageProps={pageProps}>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</SessionProvider>
	);
};

const getBaseUrl = () => {
	if (typeof window !== 'undefined') {
		return '';
	}
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

	return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
	config({ ctx }) {
		/**
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */
		const url = `${getBaseUrl()}/api/trpc`;

		return {
			url,
			transformer: superjson,
			/**
			 * @link https://react-query.tanstack.com/reference/QueryClient
			 */
			// queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
		};
	},
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	ssr: false,
})(MyApp);
