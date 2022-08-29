import { useId, useMemo, type FC } from 'react';

import { type LayoutProps } from '~/types/props';
import Content from './Content';
import Header from './Header';
import clsx from 'clsx';

export const Layout: FC<LayoutProps> = ({ children, isLogin, pageProps }) => {
	const id = useId();

	const showLayout = useMemo(() => {
		return !pageProps?.statusCode && isLogin;
	}, [isLogin, pageProps?.statusCode]);

	return (
		<div
			className={clsx('grid h-screen', {
				['grid-rows-layoutMobile lg:grid-rows-layoutDesktop bg-base-300 lg:gap-2']:
					showLayout,
				['place-content-center gap-2']: !showLayout,
			})}
		>
			{showLayout ? (
				<>
					<Header inputId={id} />
					<Content inputId={id}>{children}</Content>
				</>
			) : (
				children
			)}
		</div>
	);
};
