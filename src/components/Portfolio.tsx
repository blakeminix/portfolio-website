import React, { useRef } from 'react';

const Portfolio: React.FC = () => {
    const techRef = useRef<HTMLParagraphElement>(null);
	const aboutRef = useRef<HTMLParagraphElement>(null);

	const scrollToSection = (ref: React.RefObject<HTMLParagraphElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row mx-auto w-full max-w-screen-lg pr-8 lg:px-0 -space-y-16 lg:space-y-4 lg:space-x-32">
		<main className="mx-auto p-4 w-full lg:w-[calc(50%-1rem)] text-white text-lg leading-relaxed mr-4 mb-6 lg:mb-0">
			<div className="sticky top-16">
				<div className='fixed top-0 left-0 w-full lg:w-[calc(20%-1rem)] lg:ml-20 lg:top-2 bg-gray-900 z-10 p-4'>
					<a href="/." className="text-white text-sm"><span>&larr;</span> Back to Home</a>
				</div>
				<div className="flex justify-center items-center mb-12 lg:mb-32">
					<h1 className="text-4xl font-bold leading-none mt-12 lg:mt-4">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">blakeminix.com</span>
					</h1>
				</div>
                <div className='ml-4 mb-8 lg:mb-40'>
                    <button onClick={() => scrollToSection(techRef)}><span className="font-bold text-2xl lg:text-3xl bg-clip-text">Tech Stack</span></button>
					<br /><br />
                    <button onClick={() => scrollToSection(aboutRef)}><span className="font-bold text-2xl lg:text-3xl bg-clip-text">About the Project</span></button>
                </div>
                <div className='p-4 flex items-center'>
					<a href="https://github.com/blakeminix/blakeminix.com" target="_blank" rel="noopener noreferrer" className="mr-12">
						<img src="/GitHub.png" alt="GitHub" className="w-10 lg:w-12 h-10 lg:h-12 rounded-full" />
					</a>
					<a href="https://blakeminix.com" target="_blank" rel="noopener noreferrer" className="mr-10 text-sm lg:text-lg">
						Deployed Site
					</a>
				</div>
			</div>
		</main>
		<main className="mx-auto p-4 w-full lg:w-[calc(56%)] text-white text-lg leading-relaxed mt-6 lg:mt-0 ml-4 lg:ml-0">
			<p className="h-20 lg:h-14" ref={techRef}></p>
			<ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-0 lg:mb-12">
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Programming Languages</h3>
					<p className="font-normal text-gray-400">TypeScript</p>
					<p className="font-normal text-gray-400">HTML</p>
					<p className="font-normal text-gray-400">CSS</p>
				</a>
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Libraries and Frameworks</h3>
					<p className="font-normal text-gray-400">Astro</p>
					<p className="font-normal text-gray-400">React</p>
					<p className="font-normal text-gray-400">Tailwind CSS</p>
				</a>
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Tools and Technologies</h3>
					<p className="font-normal text-gray-400">Git</p>
					<p className="font-normal text-gray-400">VS Code</p>
					<p className="font-normal text-gray-400">Firebase Hosting</p>
				</a>
			</ul>
			<p className="h-20 lg:h-14"></p>
			<p className="rounded-lg text-3xl mb-6 lg:mb-8" ref={aboutRef}>
				About the Project
			</p>
			<p className="rounded-lg text-base mb-12" id="about">
				This project is a portfolio website for Blake Minix that contains an about me section, my technical skills, and my projects.
                For each project, the GitHub repository, the deployed site, and a detailed overview of the project is linked from the home page.
			</p>
		</main>
	    </div>
    );
}

export default Portfolio;