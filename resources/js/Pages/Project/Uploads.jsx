import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SecondaryButton from '@/Components/SecondaryButton';
import { Link } from '@inertiajs/react';


export default function Uploads({ auth, className = '', projects}) {


    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <section className={'p-12 max-[1000px]:grid-box'}>

                <div className="tab title my-3 font-black text-gray-500">
                    <div className="title-cell col-span-4">Title</div>
                    <div className="title-cell col-span-3">Time Submitted</div>
                    <div className="title-cell col-span-1">Plagiarism</div>
                    <div className="title-cell col-span-2">Feedback</div>
                    <div className="title-cell col-span-2">Action</div>
                </div>

                {projects && projects.data.map( item => 

                    <div key={item.id} className="tab min-[1000px]:mb-3">
                        <div className="cell col-span-4">{item.title}</div>
                        <div className="cell col-span-3">{item.created_at}</div>
                        <div className="cell">{item.score.toString().padStart(3, '0')}%</div>
                        <div className="cell col-span-2">
                            <div className={`${ item.status == "pending" ? "primary-badge" : item.status == "approved" ? "success-badge" : "fail-badge"} uppercase`}>{item.status}</div>
                        </div>
                        <div className="cell col-span-2">
                            <Link href={`/project/${item.id}`}>
                                <SecondaryButton>View Details</SecondaryButton>
                            </Link>
                        </div>
                    </div>

                )}

            </section>
        </AuthenticatedLayout>
    );
}
