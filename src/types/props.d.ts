import type { ReactNode } from 'react';

export type CommonProps<T = unknown> = {
	children?: ReactNode | ReactNode[];
} & T;

export type ContentProps = CommonProps<{
	inputId: string;
}>;

export type HeaderProps = {
	inputId: string;
};

export type HeadDocumentProps = {
	pageProps: Record<string | unknown>;
};

export type LayoutProps = CommonProps<{
	isLogin?: boolean;
	pageProps: Record<string | unknown>;
}>;
