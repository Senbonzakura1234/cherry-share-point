import { FC, ReactNode } from 'react';
import { MenuAlt2Icon, HomeIcon } from '@heroicons/react/solid';
import dynamic from 'next/dynamic';
import SearchBar from './SearchBar';
const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
	ssr: false,
});

export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<div className='grid-rows-layout grid h-screen'>
			<header className='navbar bg-base-100 relative z-50 shadow-md'>
				<div className='navbar-start md:mr-1 md:w-auto'>
					<label
						htmlFor='sideNav'
						className='btn text-primary btn-ghost btn-circle'
					>
						<MenuAlt2Icon className='h-5 w-5' />
					</label>
				</div>

				<div className='navbar-center md:w-auto'>
					<a className='btn btn-primary btn-circle'>
						<HomeIcon className='h-5 w-5' />
					</a>
				</div>

				<div className='navbar-end md:w-auto md:flex-1 md:gap-1'>
					<SearchBar />
					<ThemeSwitcher />
				</div>
			</header>

			<div className='drawer bg-base-300 grid !h-auto'>
				<input id='sideNav' type='checkbox' className='drawer-toggle' />
				<main className='drawer-content'>{children}</main>
				<aside className='drawer-side'>
					<label htmlFor='sideNav' className='drawer-overlay' />
					<ul className='menu menu-compact bg-base-100 text-base-content w-80 overflow-y-auto p-4'>
						<div className='divider'>Menu</div>
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</aside>
			</div>
		</div>
	);
};
