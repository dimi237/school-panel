import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
export default function Details({ customer }) {
    return (
        <GuestLayout>
            <Head title="Member Details" />
            <ApplicationLogo className="w-48 h-48 fill-current text-gray-500 mx-auto" />
            <div className="my-4 text-sm text-gray-600 border-gray-500 border-2 border-solid rounded-2xl p-10 ">
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-xl font-bold">{customer.name}</h1>
                    <div className="flex flex-col space-y-2">
                        <h2 className='text-xl'>Birth Date: <span className='font-bold'> {customer.birthdate}</span></h2>
                        <h2 className='text-xl'>Birth Place: <span className='font-bold'> {customer.birthplace}</span></h2>
                        <h2 className='text-xl'>Certificate: <span className='font-bold'> {customer.certificate}</span></h2>
                        <h2 className='text-xl'>Certification Date: <span className='font-bold'> {customer.certifdate}</span></h2>
                        <h2 className='text-xl'>Speciality: <span className='font-bold'> {customer.speciality}</span></h2>
                        <h2 className='text-xl'>Role: <span className='font-bold'> {customer.role}</span></h2>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
