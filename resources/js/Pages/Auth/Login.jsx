import {useEffect} from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";

export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>

            <div className={'my-5'}>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Link href={'/'}>
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500 mx-auto" />
                    </Link>
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                   
                </div>
            </div>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <InputLabel htmlFor="email" value="Email"
                                    className="block text-sm font-medium leading-6 text-gray-900"/>
                        <div className="mt-2">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2"/>
                        </div>
                    </div>

                    <div>
                        <InputLabel htmlFor="password" value="Password"
                                    className="block text-sm font-medium leading-6 text-gray-900"/>
                        <div className="mt-2">
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox
                                id={`remember-me`}
                                name="remember"
                                checked={data.remember}
                                className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600`}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm leading-6">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                    </div>
                    <div>
                        <PrimaryButton className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
            </div>

        </GuestLayout>
    );
}
