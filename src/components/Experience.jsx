import React, { useEffect, useState } from 'react';

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const experience = [
      {
        jobRole: "Full-Stack Developer Intern",
        companyName: "BzAnalyticsPvt Ltd",
        companyUrl: 'https://bzanalytics.ai/',
        location: "Thiruvananthapuram, Kerala",
        discription: "During the time, I gained experience in backend development with Node.js, EJS, and MySQL, completed the ENV-Manager project, and learned Next.js while collaborating on UI/UX improvements.",
        cirtificateURL: "https://drive.google.com/file/d/1X9S0oFy1tiV0cXoCFhU8MJifaNLrCCs8/view?usp=drive_link"
      },
      {
        jobRole: "MERN Stack Developer",
        companyName: "Luminar Technolab",
        companyUrl: 'https://www.luminartechnolab.com/',
        location: " Kochi, Kerala",
        discription: "I gained expertise in front-end development with HTML, CSS, JavaScript, Angular, and React. Additionally, I mastered backend technologies like Node.js, Express.js, and MongoDB for API development and database management.",
        cirtificateURL: "https://drive.google.com/file/d/1wcfke3p_q3gSwhHO4LvDzUZKLeKKTCcR/view?usp=drive_link"
      }
    ];

    setExperience(experience);
  }, []);

  return (
    <div className="container mx-auto lg:px-lg-padding xl:px-xl-padding" id='experience'>

      <h2 className="text-4xl py-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        EXPERIENCE
      </h2>
      <div className="grid xl:px-24 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {experience?.length > 0 ? (
          experience.map((data, index) => (
            <div key={index} className="bg-gray-800 p-6 shadow-lg border-2.5 border-gradient">
              <h3 className="text-xl font-semibold font-roboto text-white">{data.jobRole}</h3>
              <p className="text-purple-400 font-raleway flex">
                <a href={data.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 hover:cursor-pointer">
                  {data.companyName}
                </a>
                / {data.location}
              </p>
              <p className="text-white mt-2 text-sm font-roboto">
                {data.discription}
              </p>
              <a href={data.cirtificateURL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-roboto text-sm">
                Certificate <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>

      <h2 className="text-4xl pt-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" id='education'>
        EDUCATION
      </h2>
      <div className="mt-8 xl:px-24">
        <div className="bg-gray-800 p-6 shadow-lg border-2.5 border-gradient rounded-lg">
          <h3 className="text-xl font-semibold font-roboto text-white">BSc Computer Science</h3>
          <p className="text-purple-400 font-raleway">Kannur University / 2020 - 2023</p>
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-white font-medium text-lg">CGPA:</span>
            <span className="text-blue-400 font-bold text-lg">7.4</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Experience;
