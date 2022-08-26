import { SideNavLink } from '~/data/constant';

export const getLinkTitle = (asPath = '') =>
	Object.values(SideNavLink)
		.flat()
		.find(({ href }) => href === asPath && href !== '/')?.title;
