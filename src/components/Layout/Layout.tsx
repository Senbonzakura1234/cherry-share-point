import { useId, useMemo, type FC } from 'react';
import Head from 'next/head';

import { type CommonProps } from '~/types/props';
import Content from './Content';
import { useRouter } from 'next/router';
import { getLinkTitle } from '~/utils/helper';
import Header from './Header';

export const Layout: FC<CommonProps> = ({ children }) => {
	const { asPath } = useRouter();
	const id = useId();

	const prefixTitle = useMemo(() => getLinkTitle(asPath), [asPath]);

	return (
		<>
			<Head>
				<title>
					{prefixTitle ? `${prefixTitle} - ` : ''}Cherry Share Point
				</title>
				<meta name='description' content='Home' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='grid-rows-layoutMobile lg:grid-rows-layoutDesktop bg-base-300 grid h-screen lg:gap-2'>
				<Header inputId={id} />
				<Content inputId={id}>{children}</Content>
			</div>
		</>
	);
};
