import type { GetServerSideProps, NextPage } from 'next/types';
import {
	type LiteralUnion,
	type ClientSafeProvider,
	getProviders,
	signIn,
} from 'next-auth/react';
import { type BuiltInProviderType } from 'next-auth/providers';

export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders();
	return {
		props: { providers },
	};
};

const SignIn: NextPage<{
	providers: Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	> | null;
}> = ({ providers }) => {
	return (
		<div className='bg-base-300 text-base-content'>
			{providers &&
				Object.values(providers).map(provider => (
					<div key={provider.name}>
						<button onClick={() => signIn(provider.id)}>
							Sign in with {provider.name}
						</button>
					</div>
				))}
		</div>
	);
};

export default SignIn;
