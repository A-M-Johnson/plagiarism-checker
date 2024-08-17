import AdminLayout from '@/Layouts/AdminLayout';
import SecondaryButton from '@/Components/SecondaryButton';
import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';


export default function Students({ auth, className = '', students, department}) {


    return (
        <AdminLayout
            user={auth.user}
        >
            <div className="flex items-center my-6 mb-4 justify-between px-12">
                <h2 className="font-bold text-lg">{department?.name} Students</h2>
                {/* <Link href={route('department.create')}>
                    <PrimaryButton>New Department</PrimaryButton>
                </Link> */}
            </div>

            <section className={'p-12 max-[1000px]:grid-box pt-0'}>

                <div className="tab title my-3 font-black text-gray-500">
                    <div className="title-cell col-span-3">Name</div>
                    <div className="title-cell col-span-2">Index No</div>
                    <div className="title-cell col-span-3">Supervisors</div>
                    <div className="title-cell col-span-2">Projects</div>
                    {/* <div className="title-cell col-span-2">Action</div> */}
                </div>

                {students && students.data.map( item => 

                    <div key={item.id} className="tab min-[1000px]:mb-3">
                        <div className="cell col-span-3">{item.name}</div>
                        <div className="cell col-span-2">{item.index_number}</div>
                           
                        <div className="cell col-span-3">
                            <Link href={`/student/supervisor/${item.id}`}>
                                <SecondaryButton>View Supervisors</SecondaryButton>
                            </Link>
                        </div>

                        <div className="cell col-span-2">
                            <Link href={`/student/project/${item.id}`}>
                                <SecondaryButton>View Projects</SecondaryButton>
                            </Link>
                        </div>

                        {/* <div className="cell col-span-2">
                            <Link href={`/project/${item.id}`}>
                                <SecondaryButton>Edit</SecondaryButton>
                            </Link>
                        </div> */}

                    </div>

                )}

            </section>
        </AdminLayout>
    );
}
