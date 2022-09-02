import { useId, useMemo, type FC } from 'react';

import { type LayoutProps } from '~/types/props';
import Content from './Content';
import Header from './Header';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';

export const Layout: FC<LayoutProps> = ({ children, pageProps }) => {
	const { data: session, status } = useSession();
	const id = useId();

	const { isHideLayout, isLoading } = useMemo(() => {
		const isHideLayout =
			!!pageProps?.statusCode ||
			!pageProps?.err ||
			status === 'unauthenticated';
		const isLoading = status === 'loading';
		return { isHideLayout, isLoading };
	}, [pageProps?.err, pageProps?.statusCode, status]);

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
