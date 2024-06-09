import React, { useRef } from 'react';

const ContentManagementSystem: React.FC = () => {
    const techRef = useRef<HTMLParagraphElement>(null);
	const aboutRef = useRef<HTMLParagraphElement>(null);

	const scrollToSection = (ref: React.RefObject<HTMLParagraphElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-wrap">
		<main className="mx-auto p-4 w-600 max-w-full sm:max-w-[calc(50%-1rem)] text-white text-lg leading-relaxed mr-4">
			<div className="sticky top-16">
				<a href="/." className="text-white"><span>&larr;</span> Back to Home</a>
				<h1 className="text-4xl font-bold leading-none mb-28 mt-4">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">Content Management System</span>
				</h1>
                <div className='ml-4 mb-40'>
                    <button onClick={() => scrollToSection(techRef)}><span className="font-bold text-3xl bg-clip-text">Tech Stack</span></button>
					<br /><br />
                    <button onClick={() => scrollToSection(aboutRef)}><span className="font-bold text-3xl bg-clip-text">About the Project</span></button>
                </div>
				<div className='p-4 flex items-center'>
					<a href="https://github.com/blakeminix/Content-Management-System" target="_blank" rel="noopener noreferrer" className="mr-12">
						<img src="/GitHub.png" alt="GitHub" className="w-14 h-14 rounded-full" />
					</a>
					<a href="https://content-management-system-32ddcdcefaf8.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="text-2xl mr-6">
						Deployed Site
					</a>
				</div>
			</div>
		</main>
		<main className="mx-auto p-4 w-600 max-w-full sm:max-w-[calc(50%-1rem)] text-white text-lg leading-relaxed mt-6 ml-4">
			<p className="h-14" ref={techRef}></p>
			<ul role="list" className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Programming Languages</h3>
					<p className="font-normal text-gray-400">JavaScript</p>
					<p className="font-normal text-gray-400">HTML</p>
					<p className="font-normal text-gray-400">CSS</p>
				</a>
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Libraries and Frameworks</h3>
					<p className="font-normal text-gray-400">Next.js</p>
					<p className="font-normal text-gray-400">React</p>
					<p className="font-normal text-gray-400">Tailwind CSS</p>
				</a>
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Databases</h3>
					<p className="font-normal text-gray-400">MySQL</p>
				</a>
				<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
					<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Tools and Technologies</h3>
					<p className="font-normal text-gray-400">Heroku</p>
					<p className="font-normal text-gray-400">Git</p>
					<p className="font-normal text-gray-400">VS Code</p>
					<p className="font-normal text-gray-400">bcrypt</p>
					<p className="font-normal text-gray-400">JWT</p>
				</a>
			</ul>
			<p className="h-8"></p>
			<p className="rounded-lg text-3xl mb-8" ref={aboutRef}>
				About the Project
			</p>
			<p className="rounded-lg text-base mb-12" id="about">
				This project is a content management system with groups that users can create or join to share posts and media with other users. 
			</p>
		</main>
	    </div>
    );
}

export default ContentManagementSystem;