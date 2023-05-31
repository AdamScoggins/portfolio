const Footer = () => {
    return (
        <footer className='py-6 px-4 bg-white bg-opacity-10 text-white text-shadow mt-auto'>
            <div className='container flex justify-between items-center mt-auto'>
                <div>
                    <h3 className='text-xl font-bold'>Contact Me</h3>
                    <p>
                        Email:{' '}
                        <span>
                            <a
                                href='mailto:scoggins.aj@gmail.com'
                                className='hover:underline hover:text-[var(--color1)]'
                            >
                                scoggins.aj@gmail.com
                            </a>
                        </span>
                    </p>
                </div>
                <div className='flex gap-10 items-center'>
                    <a
                        href='https://www.github.com/AdamScoggins'
                        className=' hover:underline hover:text-[var(--color1)]'
                    >
                        GitHub
                    </a>
                    <a
                        href='https://www.linkedin.com/in/adam-s-645a67a0/'
                        className='hover:underline hover:text-[var(--color1)]'
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
