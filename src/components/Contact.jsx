import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // function for sent message
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = formData;
    if (!name || !message) {
      alert("Please fill all fields before sending the message.");
      return;
    }
    const whatsappMessage = `Hello, my name is ${name}. My message is: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/9495312193?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="container mx-auto lg:px-lg-padding xl:px-xl-padding py-10" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        <div>
          <h2 className="text-4xl font-bold font-roboto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            DO YOU HAVE A PROJECT TO DISCUSS?
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">
            GET IN TOUCH <span role="img" aria-label="chat"><i className="fa-regular fa-comment-dots"></i></span>
          </h3>
          <p className="text-gray-400 mb-3">CONTACT</p>
          <p className="text-blue-400 mb-4">harikrishnank2193@gmail.com</p>
          <p className="text-gray-400 mb-3">SOCIAL MEDIA</p>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.linkedin.com/in/harikrishnan-k-9747792a2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/harikrishnan2193?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://wa.me/9495312193" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://t.me/hari_krishnank" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">CONTACT FORM</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white rounded-2xl"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-900 text-white rounded-2xl"
              />
            </div>
            <button type="submit" className="button-bg mt-6 py-2 text-lg font-medium text-white shadow-lg">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
