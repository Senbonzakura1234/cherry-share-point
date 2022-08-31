import {
	DesktopComputerIcon,
	DocumentIcon,
	PencilAltIcon,
	HeartIcon,
	TrashIcon,
	CogIcon,
	LogoutIcon,
} from '@heroicons/react/solid';
import type { NavLinkItem } from '../types/common';

export const SIDE_NAV_LINK: Record<string, NavLinkItem[]> = {
	Main: [
		{
			title: 'Overview',
			href: '/',
			Icon: DesktopComputerIcon,
		},
		{
			title: 'Files',
			href: '/main/files',
			Icon: DocumentIcon,
		},
		{
			title: 'Notes',
			href: '/main/notes',
			Icon: PencilAltIcon,
		},
		{
			title: 'Favorite',
			href: '/main/favorite',
			Icon: HeartIcon,
		},
	],
	Other: [
		{
			title: 'Trash',
			href: '/other/trash',
			Icon: TrashIcon,
		},

		{
			title: 'Setting',
			href: '/other/setting',
			Icon: CogIcon,
		},

		{
			title: 'Logout',
			href: '/auth/logout',
			Icon: LogoutIcon,
		},
	],
};

export const PROTECTED_PATH: string[] = [
	...Object.values(SIDE_NAV_LINK)
		.flat()
		.map(({ href }) => href),
];

export const SIGNIN_PATH: string = '/auth/signin';

export const PUBLIC_PATH: string[] = [SIGNIN_PATH, '/_error'];

export const statusCodeMapping: Record<number, string> = {
	400: 'Bad Request',
	401: 'Unauthorize',
	403: 'Forbidden',
	404: 'Not Found',
	408: 'Request timeout',
	500: 'Internal Server Error',
	502: 'Service Unavailable',
};
