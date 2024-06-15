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
    	<div className="flex flex-col lg:flex-row mx-auto w-full max-w-screen-lg pr-8 lg:px-0 -space-y-16 lg:space-y-4 lg:space-x-32">
    		<main className="mx-auto p-4 w-full lg:w-[calc(50%-1rem)] text-white text-lg leading-relaxed mr-4 mb-6 lg:mb-0">
				<div className="sticky top-20">
					<div className="flex justify-center items-center mb-14 lg:mb-20">
						<img src="/blake.png" alt="Blake Minix" className="w-20 h-20 rounded-full mr-6" />
						<div>
							<h1 className="text-4xl lg:text-5xl font-bold leading-none mb-2">
								<button onClick={() => scrollToSection(aboutRef)} className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">Blake Minix</button>
							</h1>
							<h1 className="text-sm lg:text-lg font-bold leading-none">
								<a href="https://www.gatech.edu/"  target="_blank" rel="noopener noreferrer" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">Georgia Institute of Technology</a>
							</h1>
						</div>
					</div>
					<div className='ml-4 mb-12 lg:mb-24'>
                    	<button onClick={() => scrollToSection(aboutRef)}><span className="font-bold text-2xl lg:text-3xl bg-clip-text">About Me</span></button>
						<br /><br />
                    	<button onClick={() => scrollToSection(technicalRef)}><span className="font-bold text-2xl lg:text-3xl bg-clip-text">Technical Skills</span></button>
						<br /><br />
                    	<button onClick={() => scrollToSection(projectsRef)}><span className="font-bold text-2xl lg:text-3xl bg-clip-text">Projects</span></button>
                	</div>
					<div className='p-4 flex items-center'>
						<a href="https://www.linkedin.com/in/blakeminix/" target="_blank" rel="noopener noreferrer" className="mr-10">
							<img src="/LinkedIn.png" alt="LinkedIn" className="w-8 lg:w-8 h-8 lg:h-8" />
						</a>
						<a href="https://github.com/blakeminix" target="_blank" rel="noopener noreferrer" className="mr-10">
							<img src="/GitHub.png" alt="GitHub" className="w-8 lg:w-10 h-8 lg:h-10 rounded-full" />
						</a>
						<a href="https://drive.google.com/file/d/1yovgcc2tQbt2C7_Nu-5XwCsvi1_KVd3T/view" target="_blank" rel="noopener noreferrer" className="mr-10 text-sm lg:text-lg">
							Resume
						</a>
						<a href="mailto:blakeminix2@gmail.com" className="text-sm lg:text-lg">
							Email Me
						</a>
					</div>
				</div>
			</main>
			<main className="mx-auto p-4 w-full lg:w-[calc(56%)] text-white text-lg leading-relaxed mt-6 lg:mt-0 ml-4 lg:ml-0">
				<p className="h-14" ref={aboutRef}></p>
				<p className="rounded-lg text-base mb-4 lg:mb-12" id="about">
					Hi, I'm Blake. Welcome to my portfolio website!
			 		I'm passionate about building powerful websites and applications.<br /><br />
			 		I'm a computer science student at Georgia Tech and I am expecting to graduate in December 2024 with threads in Systems & Architecture and Information Internetworks,
			 		which basically means that my specialty is in the inner workings of computers and in how devices communicate with each other.<br /><br />
			 		Throughout my educational journey, I have gathered experience that has allowed me to grow as a life-long learner and as an effective developer. Over the past year, 
			 		I have had the opportunity to build software for a MAANG company, and to familiarize myself with the tools and technologies that are necessary for successful software development.
			 		This rewarding experience has led me to challenge myself through a variety of personal endeavors, growing at every opportunity.<br /><br />
			 		In my free time, I enjoy playing video games, keeping up with my favorite sports teams, and spending time with family.
				</p>
				<p className="h-8" ref={technicalRef}></p>
				<p className="rounded-lg text-3xl mb-6 lg:mb-8" id="technical">
					Technical Skills
				</p>
				<ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4 lg:mb-12">
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
						<p className="font-normal text-gray-400">Next.js</p>
						<p className="font-normal text-gray-400">Astro</p>
						<p className="font-normal text-gray-400">React</p>
						<p className="font-normal text-gray-400">Lit</p>
						<p className="font-normal text-gray-400">Redux</p>
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
						<p className="font-normal text-gray-400">VS Code</p>
						<p className="font-normal text-gray-400">Heroku</p>
						<p className="font-normal text-gray-400">Firebase Hosting</p>
						<p className="font-normal text-gray-400">Material Design</p>
					</a>
				</ul>
				<p className="h-8" ref={projectsRef}></p>
				<p className="rounded-lg text-3xl mb-6 lg:mb-8" id="projects">
					Projects
				</p>
				<ul role="list" className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mb-20">
					<div className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<a href='/content-management-system' className="mb-2 text-2xl font-bold tracking-tight text-white">Content Management System</a>
						<img src="/dashboard.PNG" alt="CMS Screenshot" className="mt-4 mb-4 rounded-lg" />
						<p className="font-normal text-gray-400 mt-2 mb-4">A content management system built with Next.js, React, JavaScript, Tailwind CSS, and a MySQL database hosted through JawsDB. (Deployed with Heroku)</p>
						<div className="flex items-center">
							<a href="https://github.com/blakeminix/Content-Management-System" target="_blank" rel="noopener noreferrer" className="mr-6">
								<img src="/GitHub.png" alt="GitHub" className="w-12 h-12 rounded-full" />
							</a>
							<a href="https://content-management-system-32ddcdcefaf8.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="mr-6">
								Deployed Site
							</a>
							<a href='/content-management-system'>
								Learn More
							</a>
						</div>
					</div>
					<div className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<a href='/portfolio' className="mb-2 text-2xl font-bold tracking-tight text-white">blakeminix.com</a>
						<img src="/blakeminix-com.PNG" alt="blakeminix.com Screenshot" className="mt-4 mb-4 rounded-lg" />
						<p className="font-normal text-gray-400 mt-2 mb-4">A portfolio website for Blake Minix built with Astro, React, TypeScript, and Tailwind CSS. (Deployed with Firebase)</p>
						<div className="flex items-center">
							<a href="https://github.com/blakeminix/blakeminix.com" target="_blank" rel="noopener noreferrer" className="mr-6">
								<img src="/GitHub.png" alt="GitHub" className="w-12 h-12 rounded-full" />
							</a>
							<a href="https://blakeminix.com" target="_blank" rel="noopener noreferrer" className="mr-6">
								Deployed Site
							</a>
							<a href="/portfolio">
								Learn More
							</a>
						</div>
					</div>
					<div className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r">
						<a href="/whiteboard" className="mb-2 text-2xl font-bold tracking-tight text-white">Google ChromeOS Whiteboard</a>
						<p className="font-normal text-gray-400 mt-2 mb-2">August 2023 - May 2024</p>
						<p className="font-normal text-gray-400 mt-2 mb-4">A native collaborative whiteboard application for Google ChromeOS built with Lit, Vite, Redux, Firebase, and TypeScript.</p>
						<a className="mr-6" href="/whiteboard">
							Learn More
						</a>
					</div>
				</ul>
			</main>
		</div>
    );
}

export default Home;