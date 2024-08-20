import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import AdminLayout from '@/Layouts/AdminLayout';
import TextAreaInput from '@/Components/TextAreaInput';
import SelectInput from '@/Components/SelectInput';


export default function Upload({ auth, departments, className = '' }) {
    const nameInput = useRef();

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        name: '',
        level: '',
    });

    const updatetext = (e) => {
        e.preventDefault();

        post(route('supervisors.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                window.history.back();
                location.reload();
            },
            onError: (errors) => {
                if (errors.name) {
                    nameInput.current.focus();
                }
            },
        });
    };

    return (
        <AdminLayout
            user={auth.user}
        >
            <section className={'p-12'}>

                <div className="max-w-[500px] mx-auto">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">New Supervisor</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            provide the following details to create a supervisor
                        </p>
                    </header>

                    <form onSubmit={updatetext} className="mt-6 space-y-6">

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-white bg-green-500 px-3 py-1.5 rounded font-semibold">Department Created Successfully</p>
                            </Transition>

                        <div>
                            <InputLabel htmlFor="title" value="Full Name" />

                            <TextInput
                                id="title"
                                ref={nameInput}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                type="text"
                                className="mt-1 block w-full"
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="title" value="Email" />

                            <TextInput
                                id="level"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                type="email"
                                className="mt-1 block w-full"
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="title" value="Staff Number" />

                            <TextInput
                                id="level"
                                value={data.index}
                                onChange={(e) => setData('index', e.target.value)}
                                type="number"
                                className="mt-1 block w-full"
                            />

                            <InputError message={errors.index} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="department" value="Department" />

                            <SelectInput
                                id="department"
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

                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={processing} className='w-full text-center'>Save</PrimaryButton>
                        </div>
                    </form>
                </div>

            </section>
        </AdminLayout>
    );
}
