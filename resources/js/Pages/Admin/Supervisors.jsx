import AdminLayout from '@/Layouts/AdminLayout';
import SecondaryButton from '@/Components/SecondaryButton';
import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';


export default function Supervisors({ auth, className = '', supervisors, department}) {


    return (
        <AdminLayout
            user={auth.user}
        >
            <div className="flex items-center my-6 mb-4 justify-between px-12">
                <h2 className="font-bold text-lg">{department?.name} Supervisors</h2>
                <Link href={route('supervisors.create')}>
                    <PrimaryButton>New Staff</PrimaryButton>
                </Link>
            </div>

            <section className={'p-12 max-[1000px]:grid-box pt-0'}>

                <div className="tab title my-3 font-black text-gray-500">
                    <div className="title-cell col-span-3">Name</div>
                    <div className="title-cell col-span-2">Staff No</div>
                    <div className="title-cell col-span-3">Supervisors</div>
                    <div className="title-cell col-span-2">Projects</div>
                    {/* <div className="title-cell col-span-2">Action</div> */}
                </div>

                {supervisors && supervisors.data.map( item => 

                    <div key={item.id} className="tab min-[1000px]:mb-3">
                        <div className="cell col-span-3">{item.name}</div>
                        <div className="cell col-span-2">{item.index_number}</div>
                           
                        <div className="cell col-span-3">
                            <Link href={`/supervisor/student/${item.id}`}>
                                <SecondaryButton>View Students</SecondaryButton>
                            </Link>
                        </div>

                        <div className="cell col-span-2">
                            <Link href={`/supervisor/project/${item.id}`}>
                                <SecondaryButton>View Projects</SecondaryButton>
                            </Link>
                        </div>

                        <div className="cell col-span-2">
                            <Link href={`/supervisors/${item.id}`}>
                                <SecondaryButton>Edit</SecondaryButton>
                            </Link>
                        </div>

                    </div>

                )}

            </section>
        </AdminLayout>
    );
}
