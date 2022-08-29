import Head from 'next/head';
import { useRouter } from 'next/router';
import { type FC, useMemo } from 'react';
import { type HeadDocumentProps } from '~/types/props';
import { getLinkTitle } from '~/utils/helper';

export const DocumentHead: FC<HeadDocumentProps> = ({ pageProps }) => {
	const { asPath } = useRouter();
	const prefixTitle = useMemo(
		() => getLinkTitle(asPath, pageProps?.statusCode),
		[asPath, pageProps],
	);

	const { title, description } = useMemo(() => {
		const prefix = prefixTitle ? `${prefixTitle} - ` : '';
		return { title: `${prefix}Cherry Share Point`, description: prefixTitle };
	}, [prefixTitle]);

	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};
