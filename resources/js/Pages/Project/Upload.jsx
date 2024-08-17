import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextAreaInput from '@/Components/TextAreaInput';
import SelectInput from '@/Components/SelectInput';


export default function Upload({ auth, supervisors, className = '' }) {
    const titleInput = useRef();
    const descriptionInput = useRef();

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        title: '',
        description: '',
        file: null,
        screenshots: null,
        supervisor: ''
    });

    const updatetext = (e) => {
        e.preventDefault();

        post(route('project.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.title) {
                    titleInput.current.focus();
                }

                if (errors.description) {
                    reset('title');
                    descriptionInput.current.focus();
                }
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <section className={'p-12'}>

                <div className="max-w-[500px] mx-auto">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Upload Project</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            provide the details bellow to upload your project work
                        </p>
                    </header>

                    <form onSubmit={updatetext} className="mt-6 space-y-6">
                        <div>
                            <InputLabel htmlFor="title" value="Project Title" />

                            <TextInput
                                id="title"
                                ref={titleInput}
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                type="text"
                                className="mt-1 block w-full"
                            />

                            <InputError message={errors.title} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="text" value="Project Description" />

                            <TextAreaInput
                                id="text"
                                ref={descriptionInput}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                type="text"
                                className="mt-1 block w-full"
                                autoComplete="new-text"
                            />

                            <InputError message={errors.description} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="file" value="Project File" />

                            <TextInput
                                id="file"
                                onChange={(e) => setData('file', e.target.files[0])}
                                type="file"
                                className="mt-1 block w-full"
                                autoComplete="new-text"
                            />

                            <InputError message={errors.file} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="screenshots" value="Project ScreenShots" />

                            <TextInput
                                id="file"
                                onChange={(e) => setData('screenshots', e.target.files)}
                                type="file"
                                className="mt-1 block w-full"
                                autoComplete="new-text"
                                multiple
                            />

                            <InputError message={errors.screenshots} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="supervisor" value="Project Supervisor" />

                            <SelectInput
                                id="file"
                                value={data.supervisor}
                                onChange={(e) => setData('supervisor', e.target.value)}
                                className="mt-1 block w-full"
                                autoComplete="new-text"
                            >
                                <option value="" disabled selected>select supervisor</option>
                                {supervisors.map( item => 
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </SelectInput>

                            <InputError message={errors.supervisor} className="mt-2" />
                        </div>

                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={processing} className='w-full text-center'>Save</PrimaryButton>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600">Saved.</p>
                            </Transition>
                        </div>
                    </form>
                </div>

            </section>
        </AuthenticatedLayout>
    );
}
