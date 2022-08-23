import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	return (
		<label className='btn btn-primary btn-circle btn-xs swap swap-rotate'>
			<input
				type='checkbox'
				value={theme}
				onChange={e => {
					console.log(e, e.target.value);
					setTheme(e.target.value === 'fantasy' ? 'dracula' : 'fantasy');
				}}
			/>
			<MoonIcon className={'swap-on w-3'} />
			<SunIcon className={'swap-off w-3'} />
		</label>
	);
}
