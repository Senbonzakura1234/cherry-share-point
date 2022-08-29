import clsx from 'clsx';
import { type NextPage } from 'next';
import Link from 'next/link';
import { getStatusCodeName } from '~/utils/helper';

const ErrorPage: NextPage<{ statusCode: number | undefined }> = ({
	statusCode,
}) => {
	// const statusCode: number | undefined = undefined;

	return (
		<>
			<h1
				className={clsx(
					'm-0 grid place-content-center text-center font-mono text-6xl lg:text-9xl',
					{
						['text-error']: statusCode && statusCode >= 500,
						['text-info']: statusCode && statusCode < 500,
						['text-warning']: !statusCode,
					},
				)}
			>
				{statusCode ?? 'Unknown'}
			</h1>
			<div
				className={clsx('card card-compact mx-auto shadow-lg', {
					['bg-error']: statusCode && statusCode >= 500,
					['bg-info-content']: statusCode && statusCode < 500,
					['bg-warning-content']: !statusCode,
				})}
			>
				<div className='card-body !px-8'>
					<p
						className={clsx('font-semibold', {
							['text-error-content']: statusCode && statusCode >= 500,
							['text-info']: statusCode && statusCode < 500,
							['text-warning']: !statusCode,
						})}
					>
						A{!statusCode || statusCode === 500 ? 'n ' : ' '}
						<span className='font-bold text-white'>
							{statusCode ? getStatusCodeName(statusCode) : 'Unknown'}
						</span>{' '}
						error occurred on {statusCode ? 'server' : 'client'}
					</p>
				</div>
			</div>
			<Link href={'/'} passHref>
				<a className='link link-hover mx-auto text-center font-semibold'>
					Back To Home
				</a>
			</Link>
		</>
	);
};

ErrorPage.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default ErrorPage;
