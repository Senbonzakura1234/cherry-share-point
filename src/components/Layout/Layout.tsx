import { useEffect, useId, useMemo, type FC } from 'react';

import { type LayoutProps } from '~/types/props';
import Content from './Content';
import Header from './Header';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const Layout: FC<LayoutProps> = ({ children, pageProps }) => {
	const { status } = useSession();
	const { asPath, basePath, pathname } = useRouter();
	const id = useId();

	const { isHideLayout, isLoading } = useMemo(() => {
		const isHideLayout =
			!!pageProps?.statusCode ||
			!!pageProps?.err ||
			status === 'unauthenticated';
		const isLoading = status === 'loading';
		return { isHideLayout, isLoading };
	}, [pageProps?.err, pageProps?.statusCode, status]);

	useEffect(() => {
		console.log({ status });
	}, [status]);

	useEffect(() => {
		console.log({ asPath });
	}, [asPath]);

	useEffect(() => {
		console.log({ basePath });
	}, [basePath]);

	useEffect(() => {
		console.log({ pathname });
	}, [pathname]);

	return (
		<div
			className={clsx('grid h-screen w-screen', {
				['grid-rows-layoutMobile lg:grid-rows-layoutDesktop bg-base-300 lg:gap-2']:
					!isHideLayout,
				['place-content-center gap-2 p-3']: isHideLayout,
			})}
		>
			{isLoading ? (
				<>loading</>
			) : (
				<>
					{!isHideLayout ? (
						<>
							<Header inputId={id} />
							<Content inputId={id}>{children}</Content>
						</>
					) : (
						children
					)}
				</>
			)}
		</div>
	);
};
