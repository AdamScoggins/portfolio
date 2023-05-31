import Head from 'next/head';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';

export default function Home() {
    return (
        <div className='bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 min-height-screen flex flex-col'>
            <Head>
                <title>Adam Scoggins - Software Engineer</title>
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>

            <Header />

            <AboutMe />
            <Skills />
            <Projects />

            <Footer />
        </div>
    );
}
