
import React, { useEffect, useState, useRef } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [allSkills, setAllSkills] = useState([]);
  const skillsRef = useRef(null);

  useEffect(() => {
    const skills = [
      {
        name: "React",
        percentage: 90,
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256"
      },
      {
        name: "Node",
        percentage: 95,
        icon: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png"
      },
      {
        name: "JavaScript",
        percentage: 90,
        icon: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
      },
      {
        name: "MongoDB",
        percentage: 85,
        icon: "https://www.svgrepo.com/show/331488/mongodb.svg"
      },
      {
        name: "MySQL",
        percentage: 90,
        icon: "https://pngimg.com/d/mysql_PNG9.png"
      },
      {
        name: "PostgreSQL",
        percentage: 75,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVJB-o3IXzAv2wof5t_JI0Y5Kna-Tw_auaQ&s"
      },
      {
        name: "Tailwind CSS",
        percentage: 85,
        icon: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp"
      },
      {
        name: "Bootstrap",
        percentage: 80,
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
      },
      {
        name: "RESTful API",
        percentage: 88,
        icon: "https://media.licdn.com/dms/image/v2/D4D12AQEeNNHq05k7MA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687786979245?e=2147483647&v=beta&t=gatszJ18T6cgUmXRbQWWQhxNGjpH7RLqvLLGnDYJbYE"
      },
      {
        name: "Redux",
        percentage: 85,
        icon: "https://ih1.redbubble.net/image.370541778.7231/st,small,845x845-pad,1000x1000,f8f8f8.u20.jpg"
      },
      {
        name: "Docker",
        percentage: 75,
        icon: "https://img.icons8.com/color/512/docker.png"
      },
      {
        name: "Swagger",
        percentage: 80,
        icon: "https://archive.org/download/github.com-swagger-api-swagger-ui_-_2021-09-30_17-43-44/cover.jpg"
      },
      {
        name: "Postman",
        percentage: 85,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s"
      },
      {
        name: "Git & GitHub",
        percentage: 90,
        icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
      },
      {
        name: "Angular",
        percentage: 75,
        icon: "https://thumbs.dreamstime.com/b/angular-logo-editorial-illustrative-white-background-angular-logo-editorial-illustrative-white-background-eps-download-208329119.jpg"
      }
    ];

    setAllSkills(skills);
  }, []);

  function PercentageLoader({ percentage }) {
    const [currentPercentage, setCurrentPercentage] = useState(0);

    useEffect(() => {
      setCurrentPercentage(0);
      const duration = 2000;
      const stepTime = Math.ceil(duration / percentage);
      let current = 0;
      let timeout;

      const increment = () => {
        if (current < percentage) {
          current += 1;
          setCurrentPercentage(current);
          timeout = setTimeout(increment, stepTime);
        }
      };

      increment();

      return () => clearTimeout(timeout);
    }, [percentage]);

    return (
      <div className="absolute text-white text-3xl font-bold pt-20">
        {currentPercentage}%
      </div>
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div ref={skillsRef} id="skills-section" className="container mx-auto lg:px-lg-padding xl:px-xl-padding relative">
      <h2 className="text-4xl pt-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        SKILLS
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {allSkills?.length > 0 ? (
          allSkills.map((skill) => (
            <div key={skill.name} className="w-full sm:w-1/3 lg:w-1/5 text-center">
              <div className="relative w-36 h-56 mx-auto flex items-center justify-center bg-black border-2 border-blue-300 rounded-full">
                <div className="absolute inset-0 flex items-start justify-center pt-5">
                  <img src={skill.icon} alt={skill.name} className="w-16 h-16 rounded-full" />
                </div>
                {isVisible && <PercentageLoader key={skill.name} percentage={skill.percentage} />}
              </div>
              <div className="text-white font-raleway mt-4">{skill.name}</div>
            </div>
          ))
        ) : (
          <p>Skills loading..</p>
        )}
      </div>
    </div>
  );
}

export default Skills;
