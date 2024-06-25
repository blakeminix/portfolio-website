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
        <div className="flex flex-col lg:flex-row mx-auto w-full max-w-screen-lg pr-8 lg:px-0 -space-y-20 lg:space-y-4 lg:space-x-32">
		<main className="mx-auto p-4 w-full lg:w-[calc(50%-1rem)] text-white text-lg leading-relaxed mr-4 mb-6 lg:mb-0">
			<div className="sticky top-16">
				<div className='fixed top-0 left-0 w-full lg:w-[calc(20%-1rem)] lg:ml-20 lg:top-2 bg-gray-900 z-10 p-4'>
					<a href="/." className="text-white text-base"><span>&larr;</span> Back to Home</a>
				</div>
				<div className="flex justify-center items-center mb-12 lg:mb-20">
					<h1 className="text-xl sm:text-4xl lg:text-2xl font-bold leading-none mt-16 lg:mt-8">
						<a href="https://content-management-system-32ddcdcefaf8.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">Content Management System</a>
					</h1>
				</div>
                <div className='ml-4 mb-8 lg:mb-24'>
					<button onClick={() => scrollToSection(aboutRef)}><span className="font-bold text-2xl lg:text-3xl bg-clip-text">About the Project</span></button>
					<br /><br />
                    <button onClick={() => scrollToSection(techRef)}><span className="font-bold text-2xl lg:text-3xl bg-clip-text">Tech Stack</span></button>
                </div>
				<div className='p-4 flex items-center'>
					<a href="https://github.com/blakeminix/Content-Management-System" target="_blank" rel="noopener noreferrer" className="mr-12">
						<img src="/GitHub.png" alt="GitHub" className="w-10 lg:w-12 h-10 lg:h-12 rounded-full" />
					</a>
					<a href="https://content-management-system-32ddcdcefaf8.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="mr-10 text-sm lg:text-lg">
						Live Site
					</a>
				</div>
			</div>
		</main>
		<main className="mx-auto p-4 w-full lg:w-[calc(56%)] text-white text-lg leading-relaxed mt-6 lg:mt-0 ml-4 lg:ml-0">
			<p className="h-16 lg:h-14" ref={aboutRef}></p>
			<p className="rounded-lg text-base mb-8" id="about">
				Welcome to my <a href="https://content-management-system-32ddcdcefaf8.herokuapp.com/" target="_blank" rel="noopener refferrer" className='text-blue-400 hover:underline'>Content Management System</a>!<br /><br />
				This project is built with Next.js, React, JavaScript, Tailwind CSS, and a MySQL database hosted through JawsDB. It is deployed with Heroku. JWT is used for session cookie encryption, and bcrypt is used for secure password hashing.<br />
			</p>
			<p className="rounded-lg text-2xl mb-3 lg:mb-3">
				Introduction
			</p>
			<p className="rounded-lg text-base mb-6" id="about">
			This Content Management System allows users to create and manage groups, share posts and media, and interact with other users. It includes user authentication, profile management, and group functionalities.<br /><br />
			</p>
			<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r mb-6">
				<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Features</h3>
				<p className="font-normal text-gray-400">User authentication with JWT and bcrypt</p>
				<p className="font-normal text-gray-400">Profile management</p>
				<p className="font-normal text-gray-400">Group creation and management</p>
				<p className="font-normal text-gray-400">Media sharing within groups</p>
				<p className="font-normal text-gray-400">Role-based access control</p>
			</a>
			<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r mb-6">
				<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Login</h3>
				<img src="/login.PNG" alt="Login" className="mt-4 mb-4 rounded-lg" />
				<p className="font-normal text-gray-400">Users can login or redirect to the sign-up page. Invalid username or password entries display an error message.</p>
			</a>
			<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r mb-6">
				<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Dashboard</h3>
				<img src="/dashboard.PNG" alt="Dashboard" className="mt-4 mb-4 rounded-lg" />
				<p className="font-normal text-gray-400">The dashboard is the hub of all operations for the CMS. It displays the user's groups, profile, account settings, and logout options.</p>
			</a>
			<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r mb-6">
				<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Profile</h3>
				<img src="/profile.PNG" alt="Profile" className="mt-4 mb-4 rounded-lg" />
				<p className="font-normal text-gray-400">Each user's profile contains a description and a list of groups they are a member of. Owners can edit their descriptions directly.</p>
			</a>
			<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r mb-6">
				<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Group</h3>
				<img src="/group.PNG" alt="Group" className="mt-4 mb-4 rounded-lg" />
				<p className="font-normal text-gray-400">The group's home page includes a description and a sidebar for navigation. Only the owner can edit the description.</p>
			</a>
			<a className="block p-6 w-full bg-gray-800 rounded-lg border border-gray-700 transition duration-300 hover:bg-gradient-to-r mb-0 lg:mb-2">
				<h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Group Media</h3>
				<img src="/media.PNG" alt="Media" className="mt-4 mb-4 rounded-lg" />
				<p className="font-normal text-gray-400">Members can upload pictures and videos. Posts can be deleted by their authors, moderators, or the group owner depending on permissions.</p>
			</a>
			<p className="h-16 lg:h-14" ref={techRef}></p>
			<p className="rounded-lg text-3xl mb-6 lg:mb-8">
				Tech Stack
			</p>
			<ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
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
					<p className="font-normal text-gray-400">JawsDB</p>
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
		</main>
	    </div>
    );
}

export default ContentManagementSystem;