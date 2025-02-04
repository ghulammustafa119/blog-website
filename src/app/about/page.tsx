import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to GMBHUTTO! We are a company committed to delivering excellent
        products and services to our customers. Our mission is to provide
        innovative solutions and create meaningful experiences.
      </p>
      <h2 className="text-xl font-semibold mt-6">Our Vision</h2>
      <p className="text-lg text-gray-700">
        Our vision is to be a leading provider of high-quality products,
        dedicated to improving lives through our creative and thoughtful
        solutions.
      </p>
      <h2 className="text-xl font-semibold mt-6">Our Values</h2>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>Customer Satisfaction</li>
        <li>Innovation</li>
        <li>Integrity</li>
        <li>Sustainability</li>
      </ul>
    </div>
  );
};

export default About;
