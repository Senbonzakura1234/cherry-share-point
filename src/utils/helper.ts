import { SIDE_NAV_LINK, statusCodeMapping } from '~/data/constant';

export const getStatusCodeName = (statusCode: number): string =>
	statusCodeMapping[statusCode] ?? statusCode.toString();

export const getLinkTitle = (
	asPath = '',
	statusCode: number | undefined,
): string | undefined => {
	if (!!statusCode) return getStatusCodeName(statusCode);

	return Object.values(SIDE_NAV_LINK)
		.flat()
		.find(({ href }) => href === asPath && href !== '/')?.title;
};

export const checkProtectedPath = (asPath = '/'): boolean => {
	if (asPath === '/') return true;
	if (['/main', '/other'].some(path => asPath.startsWith(path))) return true;
	return false;
};
