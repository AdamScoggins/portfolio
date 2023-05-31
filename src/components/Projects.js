const Projects = () => {
    return (
        <section
            id='projects'
            className='py-6 px-4 space-y-6 bg-gray-800 bg-opacity-30 flex-grow'
        >
            <div className='container'>
                <h2 className='text-3xl mb-8 text-white text-center'>
                    Projects
                </h2>
                <div className='border border-white border-opacity-20 p-4 rounded bg-white bg-opacity-5'>
                    <h3 className='text-2xl text-white mb-4'>
                        Terminal Trainer
                    </h3>
                    <p className='text-white mb-4'>
                        Terminal Trainer is a browser-based web application that
                        is designed to provide users an interactive and engaging
                        learning platform for command-line skills. It simulates
                        a terminal environment within the browser, so that users
                        can practice and reinforce their command-line skills via
                        challenging exercises.
                    </p>
                    <a
                        href='https://terminal-trainer.onrender.com/'
                        className='text-white hover:text-[var(--color1)]'
                    >
                        View Project
                    </a>
                </div>
                {/* <div className='border border-white border-opacity-20 p-4 rounded space-y-4 bg-white bg-opacity-5'>
                    <h3 className='text-2xl text-white'>Project Two</h3>
                    <p className='text-white'>
                        Project two description TODO
                    </p>
                    <a
                        href='#'
                        className='text-white hover:text-purple-200'
                    >
                        View Project
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Projects;
