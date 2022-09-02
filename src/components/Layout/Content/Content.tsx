import { LogoutIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type FC, Fragment, useState } from 'react';
import { SIDE_NAV_LINK } from '~/data/constant';
import { type ContentProps } from '~/types/props';

export const Content: FC<ContentProps> = ({ children, inputId }) => {
	const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
	const { asPath, basePath } = useRouter();

	return (
		<div className='drawer drawer-mobile bg-base-300 grid !h-auto lg:gap-2 lg:px-2 lg:pb-2'>
			<input
				id={inputId}
				checked={isDrawerOpen}
				type='checkbox'
				className='drawer-toggle'
				onChange={e => setDrawerOpen(e.currentTarget.checked)}
			/>

			<main className='drawer-content lg:bg-base-100 !overflow-hidden lg:rounded-xl lg:p-2 lg:transition-all lg:duration-500'>
				<div className='h-full w-full overflow-y-auto scroll-smooth p-2 lg:rounded-xl lg:py-0 lg:pl-0'>
					{children}
				</div>
			</main>

			<aside
				className={clsx(
					'drawer-side !overflow-hidden lg:w-[320px] lg:!rounded-xl lg:transition-all lg:duration-500',
					{ ['lg:!w-[95px]']: isDrawerOpen },
				)}
			>
				<label htmlFor={inputId} className='drawer-overlay' />

				<ul className='menu menu-compact bg-base-100 text-base-content w-80 overflow-y-auto p-4 lg:w-auto lg:!rounded-xl'>
					<li className={clsx('menu-title', { ['w-full']: isDrawerOpen })}>
						<span className='w-[63px] text-center'>Menu</span>
					</li>
					{Object.entries(SIDE_NAV_LINK).map(
						([menuTitle, content], key1) => (
							<Fragment key={key1}>
								<div className='divider my-1'></div>
								<li
									className={clsx('menu-title', {
										['w-full']: isDrawerOpen,
									})}
								>
									<span className='w-[63px] text-center'>
										{menuTitle}
									</span>
								</li>
								{content.map(({ title, href, Icon }, key2) => (
									<li className='my-1' key={`${key1}-${key2}`}>
										<Link href={href} passHref>
											<a
												className={clsx('flex font-semibold', {
													['active !font-bold']: asPath === href,
												})}
											>
												<Icon className='h-5 w-[31px]' />
												<span
													className={clsx({
														['lg:hidden']: isDrawerOpen,
													})}
												>
													{title}
												</span>
											</a>
										</Link>
									</li>
								))}
								<li
									className='my-1'
									key={`${key1}-logout`}
									onClick={() =>
										signOut({
											callbackUrl: `${basePath}/${asPath}`,
											redirect: true,
										})
									}
								>
									<a className='flex font-semibold'>
										<LogoutIcon className='h-5 w-[31px]' />
										<span
											className={clsx({
												['lg:hidden']: isDrawerOpen,
											})}
										>
											Logout
										</span>
									</a>
								</li>
							</Fragment>
						),
					)}
				</ul>
			</aside>
		</div>
	);
};
