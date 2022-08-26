import {
	DesktopComputerIcon,
	DocumentIcon,
	PencilAltIcon,
	HeartIcon,
	TrashIcon,
	CogIcon,
} from '@heroicons/react/solid';
import type { NavLinkItem } from '../types/common';

export const SideNavLink: Record<string, NavLinkItem[]> = {
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
	],
};
