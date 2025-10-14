import React from 'react'

const About = () => {
  return (
    <section className="mb-18" id="about">
      <h2 className="text-1xl font-bold text-link-hover uppercase py-6">About</h2>
      <p>
        I’m a Senior Full Stack Developer with solid experience in <span className="text-link">React, Vue, PHP, and Laravel.</span>
      </p>
      <br/>
      <p>
        Until recently, I worked on projects for the <span className="text-link">Government of Portugal</span>, specifically for the <span className="text-link">Polícia Judiciária</span>, where I was responsible for <span className="text-link">framework migration, maintenance, and the creation of custom modules and components.</span>
      </p>
      <br />
      <p>
        Currently, I’m not engaged in any commercial projects — I’m focusing on <span className="text-link">personal development</span> by building my own side projects to sharpen my skills and learn <span className="text-link">Node.js</span>, which is the next technology I’m diving into.
      </p>
      <br />
      <p>Outside of work, I enjoy exploring new restaurants with my wife and playing trading card games to unwind and stay inspired.</p>
    </section>
  );
};

export default About;