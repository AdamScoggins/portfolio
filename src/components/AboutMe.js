const AboutMe = () => {
    return (
        <section
            id='about'
            className='py-6 px-4 text-shadow space-y-4 bg-gray-800 bg-opacity-30 text-white'
        >
            <div className='container'>
                <h2 className='text-3xl mb-4 text-center'>Hi! My name is</h2>
                <h2 className='text-7xl mb-8 text-center header-text-shadow'>
                    Adam Scoggins
                </h2>
                <p className='text-lg mb-4'>
                    As a dedicated <strong>software engineer</strong>, I bring a
                    wealth of technical expertise, including proficiency in
                    React.js, Python, JavaScript, C#, Docker, and Kubernetes. I
                    am always eager to learn and driven by problem-solving.
                </p>
                <p className='text-lg mb-4'>
                    Living with Tourette's, I've harnessed personal challenges
                    into resilience and creativity. This fuels my determination
                    to apply my skills in various contexts and to endlessly
                    pursue the untapped potential of technology.
                </p>
                <p className='text-lg'>
                    Committed to continuous growth, I aim to contribute
                    significantly to the tech industry, harnessing the power of
                    diversity and inclusion. I seek to solve complex problems,
                    inspire others, and foster a collaborative environment.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
