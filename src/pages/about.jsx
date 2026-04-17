import { Link } from "react-router";

const AboutPage = () => {
    return ( 
    <section className="max-w-6xl mx-auto px-6 my-8">            
        <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900 align-middle rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
                <img src="/images/profile.jpeg"
                alt='profile'
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"/>
                <div>
                    <h1 className="text-3xl font-bold text-white mb-8 text-center">
                        Hay, I am Ashish D. ✌!
                    </h1>
                    <p className="text-gray-300 text-lg">
                        I'm a passionate software developer with a love for creating innovative solutions. 
                        With a strong background in web development, I specialize in building responsive and 
                        user-friendly applications. I enjoy working on projects that challenge me to learn 
                        new technologies and push the boundaries of what's possible. When I'm not coding, 
                        you can find me exploring the latest tech trends or contributing to open-source projects. 
                        Let's connect and create something amazing together!
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-gray-800 mt-6 p-6 rounded-lg shadow-md">
                <h1 className="text-4xl font-semibold text-white mb-4">My Mission</h1>
                <p className="text-gray-300 leading-relaxed">
                    My mission is to continuously grow as a developer, contribute to the tech community, 
                    and create impactful software that makes a difference in people's lives. I strive to 
                    stay updated with the latest technologies and best practices in software development, 
                    while also sharing my knowledge and experiences with others. Through collaboration and 
                    innovation, I aim to build solutions that not only meet user needs but also inspire 
                    others to pursue their passion for technology.
                </p>
            </div>

            {/* Bio Section */}
            <div className="bg-gray-800 mt-6 p-6 rounded-lg shadow-md">
                <h1 className="text-4xl font-semibold text-white mb-4">My Bio</h1>
                <ul className="list-disc list-inside text-gray-300">
                    <li>Freelance Software Developer (2021 - Present)</li>
                    <li>Have 16+ years of experience in software development (2008 - Present)</li>
                    <li>Delivered 200+ projects for clients across various industries</li>
                    <li>Open Source Contributor to various projects on  
                        <Link to="https://github.com/ashish-diwakar/" target="_blank" rel="noopener noreferrer" 
                        className="text-blue-400 ml-2 hover:underline">GitHub</Link></li>
                    <li>Speaker at local tech meetups and conferences</li>
                    <li>Passionate about learning new technologies and improving coding skills</li>
                </ul>
            </div>

            {/* Tech stack */}
            <div className="bg-gray-800 mt-6 p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Tech stack I use</h2>
                <div className="flex flex-wrap gap-4">
                    {[
                        'ASP.NET', 'C#', 'SQL Server', '.NET Core', 'MVC', 'Entity Framework', 'Web API', 'Micro services',
                        'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'JavaScript'
                    ].map((tech) => (
                        <span key={tech} className="bg-gray-700 text-white px-4 py-2 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>  
    </section>
);}
 
export default AboutPage;