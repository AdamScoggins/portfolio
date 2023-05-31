import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiLinux,
    SiPython,
    SiPostgresql,
    SiCsharp,
    SiUikit,
    SiDotnet,
    SiXamarin,
} from 'react-icons/si';

const Skills = () => {
    return (
        <section
            id='skills'
            className='py-6 px-4 text-shadow bg-white bg-opacity-5 text-white'
        >
            <div className='container'>
                <h2 className='text-3xl mb-7 text-center'>Skills</h2>
                <ul className='grid grid-cols-4 gap-6 justify-items-center'>
                    <li className='flex items-center space-x-2'>
                        <SiJavascript className='text-2xl' />
                        <span>Javascript</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <SiReact className='text-2xl' />
                        <span>React</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <SiNodedotjs className='text-2xl' />
                        <span>Node.js</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <SiPython className='text-2xl' />
                        <span>Python</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <SiLinux className='text-2xl' />
                        <span>Linux</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <SiPostgresql className='text-2xl' />
                        <span>PostgreSQL</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <SiCsharp className='text-2xl' />
                        <span>C#</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <SiDotnet className='text-2xl' />
                        <span>ASP.NET</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <SiXamarin className='text-2xl' />
                        <span>Xamarin Forms</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                        <SiUikit className='text-2xl' />
                        <span>UX/UI</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
