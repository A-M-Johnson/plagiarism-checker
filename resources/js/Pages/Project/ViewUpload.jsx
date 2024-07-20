import { useEffect, useRef, useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextAreaInput from '@/Components/TextAreaInput';
import SelectInput from '@/Components/SelectInput';
import SecondaryButton from '@/Components/SecondaryButton';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { X } from 'lucide-react';
import InputError from '@/Components/InputError';
import SupervisorLayout from '@/Layouts/SupervisorLayout';



export default function ViewUpload({ auth, supervisors, project, className = '', role, success }) {
    
    const formRef = useRef(null);

    const [ images, setImages ] = useState(false);

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        status: '',
    });

    const updatetext = (e) => {
        e.preventDefault();

        put('/project/' + project.data.id, {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    useEffect(() => console.log("Errors: ", errors), [errors]); 

    const Layout = role == "lecturer" ? SupervisorLayout : AuthenticatedLayout;


    return (
        <Layout
            user={auth.user}
        >
            <section className={'p-12'}>

                <div className="max-w-[500px] mx-auto">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900 flex items-center gap-3">
                            Project
                            <div className={`${ project.data.status == "pending" ? "primary-badge" : project.data.status == "approved" ? "success-badge" : "fail-badge"} uppercase`}>{project.data.status}</div>
                            </h2>

                        <p className="mt-1 text-sm text-gray-600">
                            {role == "lecturer" && "use the buttons bellow to approve or reject project"}
                        </p>
                    </header>

                    <form ref={formRef} onSubmit={updatetext} className="mt-6 space-y-6">

                        <div className="text-center my-1 mb-6 bg-red-500 rounded-xl">
                            <InputError message={errors.all} className="mt-2 text-white py-1" />
                        </div>

                        {success && 
                            <div className="text-center my-1 mb-6 bg-green-500 rounded-xl">
                                <InputError message={errors.all} className="mt-2 text-white py-1" />
                            </div>
                        }

                        <div>
                            <InputLabel htmlFor="title" value="Project Title" />

                            <TextInput
                                id="title"
                                value={project.data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                type="text"
                                className="mt-1 block w-full"
                            />

                        </div>

                        <div>
                            <InputLabel htmlFor="text" value="Project Description" />

                            <TextAreaInput
                                id="text"
                                value={project.data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                type="text"
                                className="mt-1 block w-full"
                                autoComplete="new-text"
                            />

                        </div>

                        <div className='grid grid-cols-2 gap-3'>
                            <a href={'/storage/' + project.data.file} download className='text-center w-full justify-center'>
                                <SecondaryButton className='text-center w-full justify-center'>Download Project File</SecondaryButton>
                            </a>

                            <SecondaryButton onClick={() => setImages(true)} className='text-center w-full justify-center'>View Screenshots</SecondaryButton>
                        </div>

                        <div>
                            <InputLabel htmlFor="supervisor" value="Project Supervisor" />

                            <SelectInput
                                id="file"
                                value={project.data.supervisor_id}
                                onChange={(e) => setData('supervisor', e.target.value)}
                                className="mt-1 block w-full"
                                autoComplete="new-text"
                                defaultValue={project.data.supervisor_id}
                            >
                                <option value="" disabled selected>select supervisor</option>
                                {supervisors.map( item => 
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </SelectInput>

                        </div>

                        {images && 
                        
                            <div className='fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 p-6 '>
                                <ImageGallery items={project.data.screenshots.map( item => ({
                                    original: '/storage/' + item,
                                    thumbnail: '/storage/' + item,
                                }))} />

                                <div onClick={() => setImages(false)} className="absolute top-3 right-3 z-50 text-white h-[35px] w-[35px] rounded-full bg-red-500 flex items-center justify-center">
                                    <X />
                                </div>
                            </div>
                        }


                        {role == "lecturer" && 
                            <div className="grid grid-cols-2 items-center gap-3">

                                <PrimaryButton disabled={processing} onClick={() => {setData('status', 'approved');}} className='w-full text-center bg-green-500'>Approve</PrimaryButton>
                                <PrimaryButton disabled={processing} onClick={() => {setData('status', 'rejected');}} className='w-full text-center'>Reject</PrimaryButton>
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
                        }
                    </form>
                </div>

            </section>
        </Layout>
    );
}
