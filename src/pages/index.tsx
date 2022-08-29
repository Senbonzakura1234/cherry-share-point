import { NextPage } from 'next';
import Image from 'next/image';
import { trpc } from '~/utils/trpc';

const Home: NextPage = () => {
	const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

	return (
		<div className='flex flex-wrap place-content-center gap-7'>
			{Array(30)
				.fill(0)
				.map((_, key) => (
					<div
						className='card bg-base-100 dark:bg-base-300 w-[22.5rem] shadow-xl'
						key={key}
					>
						<figure>
							<Image
								src='https://placeimg.com/400/225/arch'
								alt='Shoes'
								height={225}
								width={400}
							/>
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>
								Shoes!
								<div className='badge badge-secondary'>NEW</div>
							</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className='card-actions justify-end'>
								<div className='badge badge-info'>Fashion</div>
								<div className='badge badge-info'>Products</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Home;
