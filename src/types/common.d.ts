import { ReactNode, SVGProps } from 'react';

export interface NavLinkItem {
	title: string;
	href: string;
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}
