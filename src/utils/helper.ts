import { SideNavLink, statusCodeMapping } from '~/data/constant';

export const getStatusCodeName = (statusCode: number): string =>
	statusCodeMapping[statusCode] ?? statusCode.toString();

export const getLinkTitle = (
	asPath = '',
	statusCode: number | undefined,
): string | undefined => {
	if (!!statusCode) return getStatusCodeName(statusCode);

	return Object.values(SideNavLink)
		.flat()
		.find(({ href }) => href === asPath && href !== '/')?.title;
};
