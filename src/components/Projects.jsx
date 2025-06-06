import React, { useEffect, useState } from 'react';
import envmanage from '../images/image-envmanager.png'
import blending from '../images/image-blending.png'
import event from '../images/image-event.png'
import ecart from '../images/image-ecart.png'
import yshope from '../images/y-shope.png'
import blogging from '../images/blogging Web.png'


function Projects() {
  const [allProject, setAllProject] = useState([]);

  useEffect(() => {
    const projects = [
      {
        projectName: "ENV Manager",
        discription: "A platform for project ENVs management, allowing developers to create  projects, assign team members, and manage environment variables directly through the web interface.",
        technology: "Node.js, EJS, Tailwind CSS, MySQL",
        projectImage: envmanage,
        githubLink: "https://github.com/harikrishnan2193/Env_management_bz",
        hostLink: "https://env-management-bz.onrender.com/"
      },
      {
        projectName: "Y Shope",
        discription: "A Platform for online shopping, includes admin section to add product, update stock, view all orders, view all users",
        technology: "React, Node.js, Tailwind CSS, MongooDb",
        projectImage: yshope,
        githubLink: "https://github.com/harikrishnan2193/y_shope-frontend",
        hostLink: "https://y-shope-frontend.vercel.app/"
      },
      {
        projectName: "Bloggz",
        discription: "A dynamic, full-featured blogging website designed to provide a seamless platform for both public visitors and registered users",
        technology: "React, Node.js, Bootstrap, MongooDb",
        projectImage: blogging,
        githubLink: "https://github.com/harikrishnan2193/blogging_website_frontend",
        hostLink: "https://blogging-website-frontend-three.vercel.app/"
      },
      {
        projectName: "Blending Studio",
        discription: "The web application mainly focused on frontend design. It includes responsive pages, landing page with two parallax effects to enhance the user experience, also provides user login and registration features.",
        technology: "React, HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB",
        projectImage: blending,
        githubLink: "https://github.com/harikrishnan2193/Mens_Parlour-Frontend",
        hostLink: "https://mens-parlour-front-end.vercel.app/"
      },
      {
        projectName: "Event Focus",
        discription: "A MERN stack project for Event & Catering management, allowing users to order food and manage events. Gives complete event control and service management, with secure and efficient backend functionality.",
        technology: "HTML, CSS, React, JavaScript, Context API",
        projectImage: event,
        githubLink: "https://github.com/harikrishnan2193/Event-Frontend",
        hostLink: "https://event-front-end-weld.vercel.app/"
      },
      {
        projectName: "Shop Mart",
        discription: "A Platform for online shopping, includes add to cart, wishlist and checkout section for place the order.",
        technology: "Angular, Typescript, Paypal, Node.js",
        projectImage: ecart,
        githubLink: "https://github.com/harikrishnan2193/Shope_Mart-Frontend",
        hostLink: "https://shope-mart-front-end.vercel.app/"
      }
    ]

    setAllProject(projects);
  }, []);

  return (
    <>
      <div className='container mx-auto lg:px-lg-padding xl:px-xl-padding relative' id='potfolio'>
        <h2 className='text-4xl py-20 font-roboto bg-clip-text text-transparent text-start bg-gradient-to-r from-blue-400 to-purple-500'>
          PROJECTS
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {allProject?.length > 0 ? (
            allProject.map((project, index) => (
              <div key={index} className="group relative bg-gradient-to-tl from-gray-800 to-black border-gradient overflow-hidden shadow-lg transition-all duration-300 mb-10">
                <img
                  src={project.projectImage}
                  alt="Project Image"
                  className="w-full h-60 transition-transform duration-300 group-hover:translate-y-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-gray-800 to-black p-4 flex flex-col justify-center items-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 text-3xl text-gray-400 hover:text-gray-200"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}
                  <h3 className="text-white text-center text-sm font-roboto">{project.discription}</h3>
                  <p className="text-gray-400 text-sm font-raleway">Tech: {project.technology}</p>
                </div>
                <div className="absolute bottom-2 w-full text-center">
                  {project.hostLink && (
                    <a
                      href={project.hostLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-800 font-roboto text-lg"
                    >
                      {project.projectName} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Projects are loading..</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
