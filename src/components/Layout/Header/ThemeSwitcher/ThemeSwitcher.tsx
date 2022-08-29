import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { type FC } from 'react';

export const ThemeSwitcher: FC = () => {
	const { theme, setTheme } = useTheme();

	return (
		<label className='btn btn-ghost btn-circle swap swap-rotate text-primary'>
			<input
				type='checkbox'
				value={theme}
				onChange={({ target: { value } }) =>
					setTheme(value === 'autumn' ? 'dracula' : 'autumn')
				}
			/>
			<MoonIcon className={'swap-on h-5 w-5'} />
			<SunIcon className={'swap-off h-5 w-5'} />
		</label>
	);
};
