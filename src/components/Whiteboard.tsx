import React, { useRef } from 'react';

const Whiteboard: React.FC = () => {
    const techRef = useRef<HTMLParagraphElement>(null);
	const aboutRef = useRef<HTMLParagraphElement>(null);

	const scrollToSection = (ref: React.RefObject<HTMLParagraphElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row mx-auto w-full max-w-screen-lg pr-8 lg:px-0 -space-y-20 lg:space-y-4 lg:space-x-32">
		<main className="mx-auto p-4 w-full lg:w-[calc(50%-1rem)] text-white text-lg leading-relaxed mr-4 mb-6 lg:mb-0">
			<div className="sticky top-16">
				<div className='fixed top-0 left-0 w-full lg:w-[calc(20%-1rem)] lg:ml-20 lg:top-2 bg-gray-900 z-10 p-4'>
					<a href="/." className="text-white text-base"><span>&larr;</span> Back to Home</a>
				</div>
				<div className="flex flex-col justify-center items-center mb-12 lg:mb-16">
					<h1 className="text-3xl font-bold leading-none mt-16 lg:mt-4">
						<button onClick={() => scrollToSection(aboutRef)} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">ChromeOS Whiteboard</button>
					</h1>
					<h1 className="text-xl font-bold leading-none mt-4">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">Client: <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a></span>
					</h1>
					<h1 className="text-lg font-bold leading-none mt-6">
						<span className="text-white">August 2023 - May 2024</span>
					</h1>
					<h1 className="text-lg font-bold leading-none mt-4">
						<span className="text-white">My Role: Full-Stack Development</span>
					</h1>
				</div>
                <div className='ml-4 mb-0 lg:mb-40'>
					<button onClick={() => scrollToSection(aboutRef)}><span className="font-bold text-2xl lg:text-3xl bg-clip-text">About the Project</span></button>
					<br /><br />
                    <button onClick={() => scrollToSection(techRef)}><span className="font-bold text-2xl lg:text-3xl bg-clip-text">Tech Stack</span></button>
                </div>
			</div>
		</main>
		<main className="mx-auto p-4 w-full lg:w-[calc(56%)] text-white text-lg leading-relaxed mt-6 lg:mt-0 ml-4 lg:ml-0">
			<p className="h-16 lg:h-14" ref={aboutRef}></p>
			<p className="rounded-lg text-base mb-4" id="about">
				This project was built for <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline'>Google</a> with Lit, Vite, Redux, Firebase, TypeScript, and Material Design.<br /><br />
			</p>
			<p className="rounded-lg text-2xl mb-3 lg:mb-3">
				Introduction
			</p>
			<p className="rounded-lg text-base mb-0 lg:mb-4" id="about">
				This project was built by a group of 6 people for the Junior Design capstone at Georgia Tech. Google was the client for our team and they tasked us to 
                build a collaborative whiteboard application to be natively installed on ChromeOS devices. Our team engaged in meetings with a project manager and 
                engineers at Google who provided us with the feedback and resources that we needed to successfully build and iterate upon our project.
			</p>
			<p className="h-16 lg:h-14" ref={techRef}></p>
			<p className="rounded-lg text-3xl mb-6 lg:mb-8">
				Tech Stack
			</p>
			<ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Programming Languages</h3>
					<p className="font-normal text-gray-400">TypeScript</p>
					<p className="font-normal text-gray-400">HTML</p>
					<p className="font-normal text-gray-400">CSS</p>
				</a>
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Libraries and Frameworks</h3>
					<p className="font-normal text-gray-400">Lit</p>
					<p className="font-normal text-gray-400">Redux</p>
				</a>
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Databases</h3>
					<p className="font-normal text-gray-400">Firebase</p>
				</a>
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Tools and Technologies</h3>
					<p className="font-normal text-gray-400">Vite</p>
					<p className="font-normal text-gray-400">Git</p>
					<p className="font-normal text-gray-400">VS Code</p>
					<p className="font-normal text-gray-400">Material Design</p>
					<p className="font-normal text-gray-400">Canvas API</p>
				</a>
			</ul>
		</main>
	    </div>
    );
}

export default Whiteboard;