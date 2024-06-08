import React, { useRef } from 'react';

const Home: React.FC = () => {
	const aboutRef = useRef<HTMLParagraphElement>(null);
    const technicalRef = useRef<HTMLParagraphElement>(null);
    const projectsRef = useRef<HTMLParagraphElement>(null);

	const scrollToSection = (ref: React.RefObject<HTMLParagraphElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    	<div className="flex flex-wrap">
    		<main className="mx-auto p-4 w-600 max-w-full sm:max-w-[calc(50%-1rem)] text-white text-lg leading-relaxed mr-4">
				<div className="sticky top-20">
					<div className="flex justify-center items-center mb-20">
						<img src="/blake.png" alt="Blake Minix" className="w-24 h-24 rounded-full mr-6" />
						<div>
							<h1 className="text-6xl font-bold leading-none mb-2">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">Blake Minix</span>
							</h1>
							<h1 className="text-2xl font-bold leading-none">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">Georgia Institue of Technology</span>
							</h1>
						</div>
					</div>
					<div className='ml-4 mb-24'>
                    	<button onClick={() => scrollToSection(aboutRef)}><span className="font-bold text-3xl bg-clip-text">About Me</span></button>
						<br /><br />
                    	<button onClick={() => scrollToSection(technicalRef)}><span className="font-bold text-3xl bg-clip-text">Technical Skills</span></button>
						<br /><br />
                    	<button onClick={() => scrollToSection(projectsRef)}><span className="font-bold text-3xl bg-clip-text">Projects</span></button>
                	</div>
					<div className='p-4 flex items-center'>
						<a href="https://www.linkedin.com/in/blakeminix/" target="_blank" rel="noopener noreferrer" className="mr-12">
							<img src="/LinkedIn.png" alt="LinkedIn" className="w-14 h-14" />
						</a>
						<a href="https://github.com/blakeminix" target="_blank" rel="noopener noreferrer" className="mr-12">
							<img src="/GitHub.png" alt="GitHub" className="w-16 h-16 rounded-full" />
						</a>
						<a href="https://blakeminix.com" target="_blank" rel="noopener noreferrer" className="mr-12 text-2xl">
							Resume
						</a>
						<a href="https://blakeminix.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
							Email Me
						</a>
					</div>
				</div>
			</main>
			<main className="mx-auto p-4 w-600 max-w-full sm:max-w-[calc(50%-1rem)] text-white text-lg leading-relaxed mt-6 ml-4">
				<p className="h-14" ref={aboutRef}></p>
				<p className="rounded-lg text-base mb-12" id="about">
					Hi, I'm Blake. Welcome to my portfolio website!
			 		I'm passionate about building powerful websites and applications.<br /><br />
			 		I'm a computer science student at Georgia Tech and I am expecting to graduate in December 2024 with threads in Systems & Architecture and Information Internetworks,
			 		which basically means that my specialty is in the inner workings of computers and in how devices communicate with each other.<br /><br />
			 		Throughout my educational journey, I have been gathered experience that has allowed me to grow as a life-long learner and as an effective developer. Over the past year, 
			 		I have had the opportunity to build software for a MAANG company, and to familiarize myself with the tools and technologies that are necessary for successful project development.
			 		This rewarding experience has led me to challenge myself through a variety of personal endeavors, growing at every opportunity.<br /><br />
			 		In my free time, I enjoy playing video games, keeping up with my favorite sports teams, and spending time with family.
				</p>
				<p className="h-8" ref={technicalRef}></p>
				<p className="rounded-lg text-3xl mb-8" id="technical">
					Technical Skills
				</p>
				<ul role="list" className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
					<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Programming Languages</h3>
						<p className="font-normal text-gray-400">Java</p>
						<p className="font-normal text-gray-400">JavaScript</p>
						<p className="font-normal text-gray-400">TypeScript</p>
						<p className="font-normal text-gray-400">Python</p>
						<p className="font-normal text-gray-400">C</p>
						<p className="font-normal text-gray-400">HTML</p>
						<p className="font-normal text-gray-400">CSS</p>
					</a>
					<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Libraries and Frameworks</h3>
						<p className="font-normal text-gray-400">React</p>
						<p className="font-normal text-gray-400">Next.js</p>
						<p className="font-normal text-gray-400">Lit</p>
						<p className="font-normal text-gray-400">Redux</p>
						<p className="font-normal text-gray-400">Astro</p>
						<p className="font-normal text-gray-400">Tailwind CSS</p>
					</a>
					<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Databases</h3>
						<p className="font-normal text-gray-400">Firebase</p>
						<p className="font-normal text-gray-400">MySQL</p>
					</a>
					<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Tools and Technologies</h3>
						<p className="font-normal text-gray-400">Vite</p>
						<p className="font-normal text-gray-400">Git</p>
						<p className="font-normal text-gray-400">Material Design</p>
						<p className="font-normal text-gray-400">bcrypt</p>
						<p className="font-normal text-gray-400">JWT</p>
						<p className="font-normal text-gray-400">Docker</p>
					</a>
				</ul>
				<p className="h-8" ref={projectsRef}></p>
				<p className="rounded-lg text-3xl mb-8" id="projects">
					Projects
				</p>
				<ul role="list" className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mb-20">
					<div className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Content Management System</h3>
						<p className="font-normal text-gray-400 mb-2">A content management system built with Next.js, React, and a MySQL database hosted through JawsDB. (Deployed with Heroku)</p>
						<div className="flex items-center">
							<a href="https://github.com/blakeminix/Content-Management-System" target="_blank" rel="noopener noreferrer" className="mr-6">
								<img src="/GitHub.png" alt="GitHub" className="w-12 h-12 rounded-full" />
							</a>
							<a href="https://content-management-system-32ddcdcefaf8.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="mr-6">
								Deployed Site
							</a>
							<a>
								Learn More
							</a>
						</div>
					</div>
					<div className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">blakeminix.com</h3>
						<p className="font-normal text-gray-400 mb-2">A portfolio website for Blake Minix built with Astro, React, TypeScript, and Tailwind CSS. (Deployed with Firebase)</p>
						<div className="flex items-center">
							<a href="https://github.com/blakeminix/blakeminix.com" target="_blank" rel="noopener noreferrer" className="mr-6">
								<img src="/GitHub.png" alt="GitHub" className="w-12 h-12 rounded-full" />
							</a>
							<a href="https://blakeminix.com" target="_blank" rel="noopener noreferrer" className="mr-6">
								Deployed Site
							</a>
							<a className="mr-6">
								Learn More
							</a>
						</div>
					</div>
					<div className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Google ChromeOS Whiteboard</h3>
						<p className="font-normal text-gray-400 mb-4">Lit</p>
						<a className="mr-6">
							Learn More
						</a>
					</div>
				</ul>
			</main>
		</div>
    );
}

export default Home;