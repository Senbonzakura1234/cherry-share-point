import { useEffect, useId, useMemo, type FC } from 'react';

import { type LayoutProps } from '~/types/props';
import Content from './Content';
import Header from './Header';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const Layout: FC<LayoutProps> = ({ children, pageProps }) => {
	const { data: session, status } = useSession();
	const { asPath, basePath } = useRouter();
	const id = useId();

	const checkProtectedPath = (asPath: string, basePath: string) => {
		if (asPath === '/') return true;
		if (['/other', '/main'].includes(basePath)) return true;
		return false;
	};

	const { isHideLayout, isLoading, isAccessDenied } = useMemo(() => {
		const isAccessDenied =
			checkProtectedPath(asPath, basePath) && status === 'unauthenticated';
		const isHideLayout =
			!!pageProps?.statusCode ||
			!pageProps?.err ||
			status === 'unauthenticated';
		const isLoading = status === 'loading';
		return { isHideLayout, isLoading, isAccessDenied };
	}, [asPath, basePath, pageProps?.err, pageProps?.statusCode, status]);

	console.log({ session });

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
			) : isAccessDenied ? (
				<div>Access Denied</div>
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
