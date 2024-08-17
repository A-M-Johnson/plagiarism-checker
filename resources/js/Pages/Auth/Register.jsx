import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import SelectInput from '@/Components/SelectInput';

export default function Register({ departments }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        index_number: '',
        year: '',
        department: '',
        password: '',
        password_confirmation: '',
    });

    const [ years, setYears ] = useState(4);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    useEffect(() => {
        departments.map( item => {
            item.id == data.department && setYears(item.max_year);
        })
    }, [data.department])

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="index_number" value="Index Number" />

                    <TextInput
                        id="index_number"
                        type="text"
                        name="index_number"
                        value={data.index_number}
                        className="mt-1 block w-full"
                        autoComplete="index_number"
                        onChange={(e) => setData('index_number', e.target.value)}
                        required
                    />

                    <InputError message={errors.index_number} className="mt-2" />
                </div>

                <div className="grid grid-cols-2 mt-4 gap-3">

                    <div className="">
                        <InputLabel htmlFor="department" value="Department" />

                        <SelectInput
                            id="department"
                            // type="text"
                            name="department"
                            value={data.department}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('department', e.target.value)}
                            required
                        >
                            
                            <option value="" disabled selected>Department</option>

                            {departments.map( item  => 
                                <option value={item.id}>{item.name}</option>
                            )}
                        </SelectInput>

                        <InputError message={errors.department} className="mt-2" />
                    </div>

                    <div className="">
                        <InputLabel htmlFor="department" value="Year/Level" />

                        <SelectInput
                            id="year"
                            // type="text"
                            name="year"
                            value={data.year}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('year', e.target.value)}
                            required
                        >
                            <option value="" disabled selected>Year/Level</option>
                            {Array.from({length: years}, (_, index) => 
                                <option value={years - index}>Year {years - index} / Level { (years - index) * 100 }</option>
                            )}
                        </SelectInput>

                        <InputError message={errors.year} className="mt-2" />
                    </div>
                </div>


                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
