import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from "react"

import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
export default function Dashboard({ auth, countUrl }) {

    const stats = [
        { id: 1, name: 'Total Students', icon: UsersIcon, slug: '' },
        { id: 2, name: 'Total Certificate generated', icon: EnvelopeOpenIcon, slug: 'certificate_id' },
        { id: 3, name: 'Total Badges generated', icon: CursorArrowRaysIcon, slug: 'badge_id' },
    ]
    const [value, setValue] = useState([])

    const fetchData = async () => {
        const list = []
        for (const key in stats) {
            const { data } = await axios(`${countUrl}/${stats[key].slug}`)
            list.push(data)
        }
        setValue(list);

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="p-5">
                <dl className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {stats.map((item, i) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                        >
                            <dt>
                                <div className="absolute rounded-md bg-indigo-500 p-3">
                                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                            </dt>
                            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                <p className="text-2xl font-semibold text-gray-900">{value[i]}</p>
                                <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">

                                </div>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </AuthenticatedLayout>
    );
}
