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


export default function Upload({ auth, department, className = '' }) {
    const nameInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        ...department,
        level: department.max_year,
    });

    const updatetext = (e) => {
        e.preventDefault();

        put(route('department.update', {department: department.id}), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                window.history.back();
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
                        <h2 className="text-lg font-medium text-gray-900">New Department</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            provide a unique department name to create a department
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
                            <InputLabel htmlFor="title" value="Department Name" />

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
                            <InputLabel htmlFor="title" value="Highest Level" />

                            <TextInput
                                id="level"
                                value={data.level}
                                onChange={(e) => setData('level', e.target.value)}
                                type="number"
                                className="mt-1 block w-full"
                            />

                            <InputError message={errors.level} className="mt-2" />
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
