import { useEffect, useId, useMemo, type FC } from 'react';

import { type LayoutProps } from '~/types/props';
import Content from './Content';
import Header from './Header';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { checkProtectedPath } from '~/utils/helper';

export const Layout: FC<LayoutProps> = ({ children, pageProps }) => {
	const { status } = useSession();
	const { asPath } = useRouter();
	const id = useId();

	const { isHideLayout, isLoading, isAccessDenied } = useMemo(() => {
		const isAccessDenied =
			checkProtectedPath(asPath) && status === 'unauthenticated';
		const isHideLayout =
			!!pageProps?.statusCode ||
			!!pageProps?.err ||
			status === 'unauthenticated';
		const isLoading = status === 'loading';
		return { isHideLayout, isLoading, isAccessDenied };
	}, [asPath, pageProps?.err, pageProps?.statusCode, status]);

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
				<>access denied</>
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
