import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import DataTable from "@/Components/CustomerDataTable.jsx";
import { PlusCircleIcon } from "@heroicons/react/20/solid/index.js";
export default function List({ auth, pageTitle, pageDescription, setBadgeUrl, setCertUrl }) {
    const actionUrls = {
        createEditRouteName: 'dashboard.global.customers.create',
        removeALlRouteName: 'dashboard.global.customers.removeAll',
        removeRouteName: 'dashboard.global.customers.remove',
        editRouteName: 'dashboard.global.customers.edit',
        setCertUrl,
        setBadgeUrl
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title={pageTitle} />
            <div className="m-5 p-5 flow-root shadow sm:rounded-lg">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">{pageTitle}</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            {pageDescription}
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <Link
                            href={route(actionUrls.createEditRouteName)}
                            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out duration-150"
                        >
                            <PlusCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                            Add new
                        </Link>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <DataTable
                        excludedColumns={[]}
                        fetchUrl={route('fetch.customers')}
                        columns={["code", "name", "birthdate", "birthplace", 'certificate', 'certifdate', 'speciality', 'role', "created_at", "updated_at"]}
                        columNames={["id", "name", "birth_date", "birth_place", 'certificate', 'certification_date', 'speciality', 'role', "created_at", "updated_at"]}
                        actionUrls={actionUrls}
                    ></DataTable>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
