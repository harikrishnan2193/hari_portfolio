import React, { useEffect, useState } from 'react';
// import '../../src/index.css';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const services = [
      {
        servicesName: "Full-Stack Web Development",
        servicesDisc: "I create dynamic and scalable web applications using the MERN stack, ensuring seamless frontend and backend integration for a smooth user experience.",
        icon: "💻"
      },
      {
        servicesName: "Frontend Development",
        servicesDisc: "I design modern, responsive UIs with React.js, focusing on performance, accessibility, and user-friendly experiences.",
        icon: "🎨"
      },
      {
        servicesName: "Backend Development",
        servicesDisc: "I build secure and scalable backend systems using Node.js and Express.js, handling APIs, authentication, and data processing efficiently.",
        icon: "🖥️"
      },
      {
        servicesName: "Database Management",
        servicesDisc: "I manage efficient databases using SQL and NoSQL, including MySQL and MongoDB, ensuring secure storage, fast queries, and optimized performance.",
        icon: "☁️"
      },
      {
        servicesName: "Maintenance & Support",
        servicesDisc: "I provide ongoing support, bug fixes, and updates to keep applications secure, optimized, and running smoothly.",
        icon: "🚀"
      }
    ];

    setServices(services);
  }, []);
  useEffect(() => {
    const cards = document.querySelectorAll('.card-content'); // select all cards

    if (cards.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const span = entry.target.querySelector('span');
          span.style.width = '0%';
          span.style.transition = '0.5s';

          const cardText = entry.target.querySelector('.card-text');
          cardText.style.transform = 'translateY(0)';
          cardText.style.opacity = '1';
          cardText.style.transition = 'transform 0.4s, opacity 2s'; // increased opacity transition time for appearing
        } else {
          // reset styles when the card is out of view
          const span = entry.target.querySelector('span');
          span.style.width = '100%';

          const cardText = entry.target.querySelector('.card-text');
          cardText.style.transform = 'translateY(100px)';
          cardText.style.opacity = '0';
          cardText.style.transition = 'transform 0.4s, opacity 0.1s'; // reduced opacity transition time for sudden disappearance
        }
      });

    }, observerOptions);

    cards.forEach((card) => observer.observe(card)); // observe all cards

    // cleanup on unmount
    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [services]);

  return (
    <>
      <div className="container mx-auto lg:px-lg-padding xl:px-xl-padding relative" id='services'>
        <h2 className="text-4xl pt-20 font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          MY SERVICES
        </h2>

        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white z-10"></div>

          {services?.length > 0 &&
            services.map((item, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mt-20`}
              >
                <div className="card-content bg-gradient-to-tl from-gray-800 to-black p-6 shadow-lg border text-white xl:w-3/5 z-20 relative">
                  <span></span>
                  <div className="card-text">
                    <div className="flex items-center mb-4">
                      <div className="text-blue-400 text-4xl">{item.icon}</div>
                      <h3 className="ml-4 text-2xl font-roboto">{item.servicesName}</h3>
                    </div>
                    <p className="text-base text-gray-300 font-raleway">{item.servicesDisc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Services;
