import { type FC } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { MenuAlt2Icon, HomeIcon } from '@heroicons/react/solid';

import { type HeaderProps } from '~/types/props';
import SearchBar from './SearchBar';
const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
	ssr: false,
});

export const Header: FC<HeaderProps> = ({ inputId }) => {
	return (
		<header className='lg:px-2 lg:pt-2'>
			<div className='bg-base-100 h-full shadow-md lg:rounded-xl'>
				<nav className='navbar relative z-50 h-full lg:container'>
					<div className='navbar-start lg:mr-1 lg:ml-3 lg:w-auto'>
						<label
							htmlFor={inputId}
							className='btn text-primary btn-ghost btn-circle'
						>
							<MenuAlt2Icon className='h-5 w-5' />
						</label>
					</div>

					<div className='navbar-center lg:w-auto lg:pl-4'>
						<Link href={'/'} passHref>
							<a className='btn btn-primary btn-circle'>
								<HomeIcon className='h-5 w-5' />
							</a>
						</Link>
					</div>

					<div className='navbar-end lg:w-auto lg:flex-1 lg:gap-1'>
						<SearchBar />
						<ThemeSwitcher />
					</div>
				</nav>
			</div>
		</header>
	);
};
