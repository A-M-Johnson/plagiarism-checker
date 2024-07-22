import { Link, Head } from '@inertiajs/react';
import '../../css/home.css'

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classNameList.add('!hidden');
        document.getElementById('docs-card')?.classNameList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classNameList.add('!flex-row');
        document.getElementById('background')?.classNameList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <header>
        <div className="Logo">
            <a href="#">PlagiChk</a>
        </div>
        <div className="nav-links">
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div className="Login">
            <a href="/login">Login</a>
            <a href="/register">Sign Up</a>
        </div>
            </header>
            <main>
                <section className="hero"> 
                    <div className="container">
                        <div className="hero-message">
                            <h1 className="lead">Empower students to do their best, </h1>
                            <h1 className="highlight"><span className="highlight-left highlight-right">original work.</span></h1>
                        </div>
                        <div className="hero-image">
                            <img src="/Assets/homepage-hero-empower-students.webp" alt="students empowerment" />
                        </div>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <div className="feature-message">
                            <h1>
                                Advance learning with an AI writing detection solution built for educators
                            </h1>
                            <p>
                                Our advanced AI writing detection technology is highly reliable and proficient in distinguishing between AI- and human-written text and is specialized for student writing. What’s more, it’s integrated into your workflow for a seamless experience.
                            </p>
                        </div>
                        <div className="feature-image">
                            <img src="/Assets/feature.png" alt="" />
                        </div>
                    </div>
                </section>

                <section className="students">
                    <div className="line"></div>
                    <h1 className="container">Students success starts right here</h1>
                    <div className="container">
                        <div className="student-message">
                            <h1>Uphold academic integrity</h1>
                            <p>Ensure original work from students and safeguard the value of project works</p>
                        </div>
                        <div className="student-image">
                            <img src="/Assets/academic.webp" alt=""/>
                        </div>
                    </div>
                </section>

                <section className="assessment">
                    <div className="line"></div>
                    <div className="container">
                        <div className="assessment-message">
                            <h1>
                                Assessments with transparency into AI usage
                            </h1>
                            <p>
                                Flexible solutions enabling educators to design and deliver student assessments their way, while shaping AI-enhanced student writing with integrity and confidence.
                            </p>
                        </div>
                        <div className="assessment-image">
                            <img src="/Assets/assessment.webp" alt="" />
                        </div>
                    </div>
                </section>

                <section className="integrity">
                    <div className="line"></div>
                    <div className="container">
                        <div className="integrity-message">
                            <h1>
                                Assessments with transparency into AI usage
                            </h1>
                            <p>
                                Flexible solutions enabling educators to design and deliver student assessments their way, while shaping AI-enhanced student writing with integrity and confidence.
                            </p>
                        </div>
                        <div className="integrity-image">
                            <img src="/Assets/original-thinking.webp" alt="" />
                        </div>
                    </div>
                </section>

                <section className="stories">
                    <div className="container">
                        <div className="story-message">
                            <h1>
                                Kwame Nkrumah University of Science and Technology widely adopts Gradescope for online assessment
                            </h1>
                            <p>
                                With campuswide digital transformation in mind, rollout to thousands of faculty across disciplines took only two months, far quicker than anticipated.
                            </p>
                        </div>
                        <div className="story-image">
                            <img src="/Assets/knust.jpg" alt="" />
                        </div>
                    </div>
                </section>

                <section className="checker">
                    <div className="container-flex checker-container">
                        <div className="checker-message">
                            <h1>
                                Keep integrity at the core of every assessment
                            </h1>
                            <p>
                                Everything you need no matter how or where you assess student work.
                            </p>
                        </div>
                        <div className="checker-content">
                            <div className="checker-features w-1/2 h">
                                <div className="features">
                                    <div className="icon">
                                        <ion-icon name="logo-laravel"></ion-icon>
                                    </div>
                                    <div className="text">
                                        <h1>Originality</h1>
                                        <p>Give feedback and grade essays and long-form writing assignments with the tool that fosters writing excellence and academic integrity.</p>
                                    </div>
                                </div>

                                <div className="features">
                                    <div className="icon">
                                        <ion-icon name="logo-laravel"></ion-icon>
                                    </div>
                                    <div className="text">
                                        <h1>Similarity</h1>
                                        <p>This robust, comprehensive plagiarism checker fits seamlessly into existing workflows.</p>
                                    </div>
                                </div>

                                <div className="features">
                                    <div className="icon">
                                        <ion-icon name="logo-laravel"></ion-icon>
                                    </div>
                                    <div className="text">
                                        <h1>Authenticity</h1>
                                        <p>This robust, comprehensive plagiarism checker fits seamlessly into existing workflows.</p>
                                    </div>
                                </div>

                                <div className="features">
                                    <div className="icon">
                                        <ion-icon name="logo-laravel"></ion-icon>
                                    </div>
                                    <div className="text">
                                        <h1>Integrity</h1>
                                        <p>This robust, comprehensive plagiarism checker fits seamlessly into existing workflows.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="checker-image">
                                <img src="/Assets/product.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="difference">
                    <div className="container-flex checker-container difference-container">
                        <div className="checker-message">
                            <h1>
                                The PlagiChk difference
                            </h1>
                        </div>
                        <div className="checker-content difference-content">
                            <div className="checker-features difference-features w-1/2">
                                <div className="features">
                                    <div className="icon">
                                        <ion-icon name="logo-laravel"></ion-icon>
                                    </div>
                                    <div className="text">
                                        <h1>Complete Coverage</h1>
                                        <p>Give feedback and grade essays and long-form writing assignments with the tool that fosters writing excellence and academic integrity.</p>
                                    </div>
                                </div>

                                <div className="features">
                                    <div className="icon">
                                        <ion-icon name="logo-laravel"></ion-icon>
                                    </div>
                                    <div className="text">
                                        <h1>Extensive Support</h1>
                                        <p>This robust, comprehensive plagiarism checker fits seamlessly into existing workflows.</p>
                                    </div>
                                </div>

                                <div className="features">
                                    <div className="icon">
                                        <ion-icon name="logo-laravel"></ion-icon>
                                    </div>
                                    <div className="text">
                                        <h1>Human-Centered AI</h1>
                                        <p>This robust, comprehensive plagiarism checker fits seamlessly into existing workflows.</p>
                                    </div>
                                </div>

                                <div className="features">
                                    <div className="icon">
                                        <ion-icon name="logo-laravel"></ion-icon>
                                    </div>
                                    <div className="text">
                                        <h1>Integrity</h1>
                                        <p>This robust, comprehensive plagiarism checker fits seamlessly into existing workflows.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="checker-image difference-image w-1/2">
                                <img src="/Assets/turnitin-difference.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <footer>
                <div className="container footer-container">
                    <div className="footer-links">
                        <h3>products</h3>
                        <ul>
                            <li><a href="">Why PlagiChk?</a></li>
                            <li><a href="">Originality</a></li>
                            <li><a href="">Gradescope</a></li>
                            <li><a href="">Authenticity</a></li>
                            <li><a href="">View all products</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>solutions</h3>
                        <ul>
                            <li><a href="">Research Education</a></li>
                            <li><a href="">Research Publication</a></li>
                            <li><a href="">Higher Education</a></li>
                            <li><a href="">Other Topics</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>resources</h3>
                        <ul>
                            <li><a href="">Resources Hub</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Support Center</a></li>                </ul>
                    </div>
                    <div className="footer-links">
                        <h3>company</h3>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact us</a></li>
                            <li><a href="">Product Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="socials">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </div>
            </footer>
        </>
    );
}
