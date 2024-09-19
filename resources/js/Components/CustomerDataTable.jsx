import { debounce } from "lodash"
import React, { useEffect, useRef, useState } from "react"
import Paginator from "./Paginator"
import { ChevronDownIcon, ChevronUpIcon, PencilSquareIcon, TrashIcon, AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";
import { Link, useForm } from "@inertiajs/react";
import Swal from 'sweetalert2';
import { v1 as uuidv1 } from 'uuid';
import jsPDF from 'jspdf';
import ReactDOMServer from 'react-dom/server';
import { Cert1Template, Cert2Template, BadgeTemplate } from './Template'
const SORT_ASC = "asc"
const SORT_DESC = "desc"

const DataTable = ({ excludedColumns, fetchUrl, columns, actionUrls, columNames }) => {

    const [data, setData] = useState([])
    const [perPage, setPerPage] = useState(10)
    const [sortColumn, setSortColumn] = useState(columns[0])
    const [sortOrder, setSortOrder] = useState("desc")
    const [search, setSearch] = useState("")
    const [pagination, setPagination] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const keys = columNames || columns;
    const handleSort = (column) => {
        if (column === sortColumn) {
            sortOrder === SORT_ASC ? setSortOrder(SORT_DESC) : setSortOrder(SORT_ASC)
        } else {
            setSortColumn(column)
            setSortOrder(SORT_ASC)
        }
    }


    const handleSearch = useRef(
        debounce((query) => {
            setSearch(query)
            setCurrentPage(1)
            setSortOrder(SORT_ASC)
            setSortColumn(columns[0])
        }, 500)
    ).current

    const handlePerPage = (perPage) => {
        setCurrentPage(1)
        setPerPage(perPage)
    }
    const {
        get: destroy,
    } = useForm();
    const deleteUser = (e, removeUrl) => {
        e.preventDefault();
        Swal.fire({
            title: 'Remove record, Are you sure?',
            icon: 'warning',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes sure',
            denyButtonText: `Not right now`,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {

                destroy(removeUrl, {
                    preserveScroll: true,
                    onSuccess: () => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Record has been removed successfully',
                            showConfirmButton: false,
                            timer: 1500,
                            allowOutsideClick: false,
                        })
                    },
                    onFinish: () => {

                    }
                });
            } else if (result.isDenied) {
                Swal.fire('Record is safe', '', 'info')
            }
        })
    };

    const generateCertificate = (e, customer) => {
        if (customer.certificate_id == 'true') {
            return openInNewTab(route('pdf.attestation', customer.id))
        }

        e.preventDefault();
        Swal.fire({
            title: 'Generate certificate?',
            icon: 'info',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes sure',
            denyButtonText: `Not right now`,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(`${actionUrls.setCertUrl}/${customer.id}`, {
                    onSuccess: () => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: ` Certificate has been generated successfully`,
                            showConfirmButton: false,
                            timer: 1500,
                            allowOutsideClick: false,
                        })
                    },
                    onError: (error) => {
                        console.log(error);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: `An error occurred while trying to generate the certificate`,
                            showConfirmButton: false,
                            timer: 1500,
                            allowOutsideClick: false,
                        })
                    }
                });
            }
        })

    };

    const generateBadge = (e, customer) => {
        if (customer.badge_id == 'true') {
            return openInNewTab(route('pdf.badge', customer.id))
        }
        e.preventDefault();
        Swal.fire({
            title: 'Generate badge?',
            icon: 'info',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes sure',
            denyButtonText: `Not right now`,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(`${actionUrls.setBadgeUrl}/${customer.id}`, {
                    onSuccess: () => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Badge has been generated successfully`,
                            showConfirmButton: false,
                            timer: 1500,
                            allowOutsideClick: false,
                        })
                    },
                    onError: (error) => {
                        console.log(error);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: `An error occurred while trying to generate the badge`,
                            showConfirmButton: false,
                            timer: 1500,
                            allowOutsideClick: false,
                        })
                    }
                });
            }
        })
    };
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const params = {
                search,
                sort_field: sortColumn,
                sort_order: sortOrder,
                per_page: perPage,
                page: currentPage,
            }
            const { data } = await axios(fetchUrl, { params })
            setData(data.data)
            setPagination(data.meta)
            setTimeout(() => {
                setLoading(false)
            }, 300)
        }

        fetchData()
    }, [perPage, sortColumn, sortOrder, search, currentPage])
    const handleDataFormat = (tableColumnData) => {
        if (tableColumnData === null) {
            return (<>
                {'-'}
            </>);
        } else if (typeof (tableColumnData) === 'object') {
            return (<>
                {(tableColumnData.length > 0) ? tableColumnData.map((x, i) => {
                    return (<>
                        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
                            <svg className="h-1.5 w-1.5 fill-gray-400" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx={3} cy={3} r={3} />
                            </svg>
                            {x}
                        </span>
                    </>);
                }) : '-'}
            </>);
        } else {
            return (<>
                {tableColumnData}
            </>);
        }
    };

    return (
        <div>
            <div className=" -mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className=" inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <div className="flex justify-between p-5">
                            <div>
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Search..."
                                    type="search"
                                    onChange={(e) => handleSearch(e.target.value)}
                                />
                            </div>
                            <div className={`flex justify-between space-x-2 items-center align-middle `}>
                                <label htmlFor="pagePer" className="text-sm py-1.5 pl-3 font-medium leading-6 text-gray-900">
                                    Page Per
                                </label>
                                <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={perPage}
                                    id={`pagePer`}
                                    onChange={(e) => handlePerPage(e.target.value)}>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="9999999999">All</option>
                                </select>
                            </div>
                        </div>
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr key={uuidv1()}>
                                    {
                                        keys.map((column, index1) => {
                                            let uniqueKey = uuidv1() + '-' + index1 + '-' + column.toUpperCase().replace("_", " ");
                                            return ((excludedColumns.includes(column) === false) &&
                                                <>
                                                    <th scope="col"
                                                        className={index1 === 0 ? 'py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 sm:pl-6' : 'px-2 py-2 text-left text-sm font-semibold text-gray-900'}
                                                        key={uniqueKey}
                                                        onClick={(e) => handleSort(column)}>
                                                        <div className="group inline-flex">
                                                            {column.toUpperCase().replace("_", " ")}

                                                            {column === sortColumn ? (
                                                                <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                                                                    {sortOrder === SORT_ASC ? (
                                                                        <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </th>
                                                </>
                                            )
                                        })}
                                    <th key={uuidv1()}>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={columns.length}>
                                            <h1 className={`p-5 text-center text-2xl text-gray-700 bg-gray-200`}>No items found</h1>
                                        </td>
                                    </tr>
                                ) : (
                                    ""
                                )}

                                {!loading ? (
                                    data.map((d, index) => {
                                        let uniqueKey = uuidv1() + '-' + index;
                                        return (
                                            <>
                                                <tr key={uniqueKey}>
                                                    {columns.map((column, colIndex) => {
                                                        return ((excludedColumns.includes(column) === false) &&
                                                            <td key={uuidv1() + '-' + colIndex} className={colIndex === 0 ? 'whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-6' : 'whitespace-nowrap px-2 py-2 text-sm text-gray-500'}>
                                                                {handleDataFormat(d[column])}
                                                            </td>
                                                        )
                                                    })}
                                                    <td className={`whitespace-nowrap px-2 py-2 text-sm text-gray-500 flex justify-center gap-2 `} key={uuidv1()}>
                                                        <button
                                                            type={"button"}
                                                            className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                deleteUser(e, route(actionUrls.removeRouteName, d.id))
                                                            }}
                                                        >
                                                            <TrashIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />

                                                        </button>
                                                        <Link
                                                            className="inline-flex items-center gap-x-1.5 rounded-md bg-purple-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                                                            href={route(actionUrls.editRouteName, d.id)}>
                                                            <PencilSquareIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />

                                                        </Link>
                                                        <button
                                                            className={`inline-flex items-center gap-x-1.5 rounded-md ${d['certificate_id'] === 'true' ? 'bg-blue-600' : 'bg-gray-600'} px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600`}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                generateCertificate(e, d)
                                                            }}>
                                                            <AcademicCapIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />

                                                        </button>
                                                        <button
                                                            className={`inline-flex items-center gap-x-1.5 rounded-md ${d['badge_id'] === 'true' ? 'bg-green-600 ' : 'bg-gray-600'} px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600`}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                generateBadge(e, d)
                                                            }} >
                                                            <CheckBadgeIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />

                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                ) : (
                                    <tr key={uuidv1()}>
                                        <td key={uuidv1()} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6" colSpan={columns.length + 1}>
                                            <div className={`mx-auto flex justify-center w-full`}>
                                                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {data.length > 0 && !loading ? (
                            <div className="mt-2">
                                <Paginator
                                    pagination={pagination}
                                    pageChanged={(page) => setCurrentPage(page)}
                                    totalItems={data.length}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

export default DataTable
