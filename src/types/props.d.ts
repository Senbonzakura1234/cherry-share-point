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
