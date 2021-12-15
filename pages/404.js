import {useRouter} from 'next/router';

function ErrorPage() {
	const router = useRouter();
	console.log(router)
	return (
		<>
			<h1>We are sorry...Page not found!!!</h1>
			<a onClick={() => router.push('/')}><button>Back</button></a>
		</>
	)
}

export default ErrorPage;