import Link from 'next/link';

const Header = () => {
    return (
        <header className='flex justify-between items-center py-2 px-4 bg-white bg-opacity-10 center'>
            <div className='container'>
                <nav>
                    <ul className='flex space-x-40 justify-items-center justify-center'>
                        <li>
                            <Link href='#about'>
                                <span className='text-white hover:text-[var(--color1)]'>
                                    About Me
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href='#skills'>
                                <span className='text-white hover:text-[var(--color1)]'>
                                    Skills
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href='#experience'>
                                <span className='text-white hover:text-[var(--color1)]'>
                                    Experience
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href='#projects'>
                                <span className='text-white hover:text-[var(--color1)]'>
                                    Projects
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
