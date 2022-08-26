import { type FC, useState } from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';

export const SearchBar: FC = () => {
	const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>('');

	const toggleSearch = () => {
		setIsSearchOpen(o => !o);
	};

	return (
		<>
			<Transition
				show={isSearchOpen}
				enter='transition-all duration-50'
				enterFrom='opacity-0 lg:w-0'
				enterTo='opacity-100 lg:w-80'
				leave='transition-all duration-50'
				leaveFrom='opacity-100 lg:w-80'
				leaveTo='opacity-0 lg:w-0'
				className='bg-base-100 grid-cols-searchBar lg:border-primary absolute inset-x-14 inset-y-2 z-10 grid overflow-hidden lg:static lg:w-80 lg:rounded-full lg:border-2'
			>
				<input
					type='text'
					value={searchValue}
					onChange={({ currentTarget: { value } }) =>
						setSearchValue(value)
					}
					placeholder='Search'
					className='text-primary input rounded-full font-bold !outline-none transition-none'
				/>

				<button
					className='btn btn-ghost btn-circle text-primary lg:hidden'
					onClick={toggleSearch}
				>
					<XIcon className='h-5 w-5' />
				</button>

				<Transition
					show={!!searchValue}
					enter='transition-opacity duration-50'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-opacity duration-50'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
					className='text-primary mr-1 hidden place-content-center lg:grid'
					onClick={() => setSearchValue('')}
				>
					<XIcon className='h-5 w-5' />
				</Transition>
			</Transition>
			<button
				className='btn btn-ghost btn-circle text-primary lg:border-2'
				onClick={toggleSearch}
			>
				<SearchIcon className='h-5 w-5' />
			</button>
		</>
	);
};
