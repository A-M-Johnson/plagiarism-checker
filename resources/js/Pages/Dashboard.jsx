import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, project }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Your Projects</h2>}
        >
            <Head title="Your Projects" />

            {!project && 
                <div className="min-h-[600px] w-full flex flex-col items-center justify-center">

                    <div className="flex items-center justify-center h-[300px] w-[300px] rounded-full overflow-hidden mx-auto">
                        <img src="/images/upload.png" alt="" className="object-cover h-full w-full" />
                    </div>

                    <div className="text-center my-6 -mt-6">
                        <h2 className='text-3xl font-extrabold'>Upload Your Project</h2>
                        <p className='w-[200px] mx-auto leading-tight'>click the button bellow to upload your project</p>
                    </div>

                    <Link href={route('project.create')}>
                        <PrimaryButton>Upload Project</PrimaryButton>
                    </Link>

                </div>
            }

            {project && 
                <div className="min-h-[600px] w-full flex flex-col items-center justify-center">

                    <div className={`flex items-center justify-center h-[170px] w-[300px] rounded-full overflow-hidden mx-auto text-7xl font-semibold border-4 ${project.status == "pending" ? "border-orange-400 text-orange-400" : project.status == "approved" ? "border-green-400 text-green-400" : "border-red-500 text-red-500"}`}>
                        {project.score.toString().padStart(3, '0')}%
                    </div>

                    <div className="text-center mt-4 mb-2">
                        <h2 className={`text-3xl font-extrabold capitalize mb-2 ${project.status == "pending" ? "text-orange-600" : project.status == "approved" ? "text-green-400" : "text-red-500"}`}>Project {project.status}</h2>
                        <p className='w-[300px] mx-auto my-2 leading-tight'>click the button bellow to upload another submission</p>
                    </div>

                    <Link href={route('project.create')}>
                        <PrimaryButton>Upload Project</PrimaryButton>
                    </Link>

                </div>
            }
            
        </AuthenticatedLayout>
    );
}
