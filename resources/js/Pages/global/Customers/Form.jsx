import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { XCircleIcon } from "@heroicons/react/20/solid/index.js";

export default function Form({ auth, pageTitle, pageDescription, pageData, specialitiesList, formUrl }) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        name: (pageData !== null) ? pageData.name : '',
        birthdate: (pageData !== null) ? pageData.birthdate : null,
        birthplace: (pageData !== null) ? pageData.birthplace : '',
        certificate: (pageData !== null) ? pageData.certificate : '',
        certifdate: (pageData !== null) ? pageData.certifdate : '',
        speciality: (pageData !== null) ? pageData.speciality : '',
        role: (pageData !== null) ? pageData.role : '',

    });

    const submit = (e) => {
        console.log(formUrl);
        e.preventDefault();
        patch(formUrl);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title={pageTitle} />
            <div className="m-5 p-5 flow-root shadow sm:rounded-lg">
                <div className="sm:flex sm:items-center border-b pb-3">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">{pageTitle}</h1>
                        {pageDescription !== '' ? (<>
                            <p className="mt-2 text-sm text-gray-700">
                                {pageDescription}
                            </p>
                        </>) : ''}
                    </div>
                </div>
                <form onSubmit={submit} className="space-y-6">
                    <div className={`grid grid-cols-2 gap-4 py-4`}>
                        <div>
                            <InputLabel htmlFor="name" value="Name"
                                className="block text-sm font-medium leading-6 text-gray-900" />
                            <div className="mt-2">
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                            </div>
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="role" value="Speciality"
                                className="block text-sm font-medium leading-6 text-gray-900" />
                            <div className="mt-2">
                                <select
                                    id="speciality"
                                    name="speciality"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    autoComplete="speciality"
                                    defaultValue={(pageData !== null) ? (pageData.speciality) ? pageData.speciality : '' : ''}
                                    onChange={(e) => setData('speciality', e.target.value)}
                                >
                                    <option value={''}>Please select speciality</option>
                                    {specialitiesList.map((role, index) => {
                                        return (
                                            <>
                                                <option key={index} value={role}>{role}</option>
                                            </>
                                        );
                                    })}
                                </select>
                            </div>
                            <InputError message={errors.roles} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="birthdate" value="Birth Date"
                                className="block text-sm font-medium leading-6 text-gray-900" />
                            <div className="mt-2">
                                <TextInput
                                    id="birthdate"
                                    type='date'
                                    label="Birth Date"
                                    name="birthdate"
                                    value={data.birthdate}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setData('birthdate', e.target.value)}
                                />
                            </div>
                            <InputError message={errors.birthdate} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="birthplace" value="Birth Place"
                                className="block text-sm font-medium leading-6 text-gray-900" />
                            <div className="mt-2">
                                <TextInput
                                    id="birthplace"
                                    name="birthplace"
                                    value={data.birthplace}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    autoComplete="birthplace"
                                    onChange={(e) => setData('birthplace', e.target.value)}
                                />
                            </div>
                            <InputError message={errors.birthplace} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="certificate" value="Certificate"
                                className="block text-sm font-medium leading-6 text-gray-900" />
                            <div className="mt-2">
                                <TextInput
                                    id="certificate"
                                    name="certificate"
                                    value={data.certificate}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setData('certificate', e.target.value)}
                                />
                            </div>
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="certifdate" value="Certification Date"
                                className="block text-sm font-medium leading-6 text-gray-900" />
                            <div className="mt-2">
                                <TextInput
                                    id="certifdate"
                                    name="certifdate"
                                    type='date'
                                    value={data.certifdate}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setData('certifdate', e.target.value)}
                                />
                            </div>
                            <InputError message={errors.certifdate} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel htmlFor="role" value="Role"
                                className="block text-sm font-medium leading-6 text-gray-900" />
                            <div className="mt-2">
                                <TextInput
                                    id="role"
                                    name="role"
                                    value={data.role}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setData('role', e.target.value)}
                                />
                            </div>
                            <InputError message={errors.role} className="mt-2" />
                        </div>
                    </div>
                    <div className="flex items-center justify-end align-middle gap-2 pt-3 border-t">
                        <Link
                            href={route('dashboard.global.customers.list')}
                            className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out duration-150"
                        >
                            <XCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                            Cancel
                        </Link>
                        <PrimaryButton
                            className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
