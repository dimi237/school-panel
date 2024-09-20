import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    registerables
} from "chart.js";
import { options, getChartsData } from "../config/chart"
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import TextInput from "@/Components/TextInput.jsx";

export default function Dashboard({ auth, countUrl, certifChartUrl, badgeChartUrl }) {
    ChartJS.register(...registerables)

    const stats = [
        { id: 1, name: 'Generate attestation', icon: UsersIcon, slug: '' },
        { id: 2, name: 'Total Certificate generated', icon: EnvelopeOpenIcon, slug: 'certificate_id' },
        { id: 3, name: 'Total Badges generated', icon: CursorArrowRaysIcon, slug: 'badge_id' },
    ]

    const types = ['month', 'year', 'day'];
    const [value, setValue] = useState([])
    const [data, setData] = useState(getChartsData([], []));
    const [datab, setDatab] = useState(getChartsData([], [], true));
    const [date, setDate] = useState();
    const [type, setType] = useState('month');

    const fetchData = async () => {
        const list = []
        for (const key in stats) {
            const { data } = await axios(`${countUrl}/${stats[key].slug}`)
            list.push(data)
        }
        setValue(list);

    }

    const fetchChart = async () => {
        const { data } = await axios(certifChartUrl, { params: { type, start_date: date } });
        setData(getChartsData(data.labels, data.data))
    }
    const fetchChartB = async () => {
        const { data } = await axios(badgeChartUrl, { params: { type, start_date: date } });
        setDatab(getChartsData(data.labels, data.data, true))
    }
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        fetchChart();
        fetchChartB();
    }, [type, date])
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
            <div className="p-5 w-full flex justify-end align-center">
                <span className='pt-1 ml-2'>Type: </span> <select
                    id="type"
                    name="type"
                    className="block ml-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    autoComplete="type"
                    defaultValue={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    {types.map((role, index) => {
                        return (
                            <>
                                <option key={index} value={role}>{role}</option>
                            </>
                        );
                    })}
                </select>
                <span className='pt-1 ml-2'>Start Date</span>
                <TextInput
                    id="date"
                    name="date"
                    type="date"
                    value={date}
                    className="block ml-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="w-full p-5 flex justify-center min-h-[100px] h-[40vh] lg:h-[60vh] mt-3">
                <Bar options={options} data={data} className="w-full h-full" />
            </div>

            <div className="w-full p-5 flex justify-center min-h-[100px] h-[40vh] lg:h-[60vh] mt-3">
                <Bar options={options} data={datab} className="w-full h-full" />
            </div>
        </AuthenticatedLayout>
    );
}
