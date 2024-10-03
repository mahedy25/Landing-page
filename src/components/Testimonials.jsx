import React from 'react';
import { assets } from '../assets/assets';


const Testimonials = () => {
  return (
    <section className="py-16 px-6  text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">What Our Clients Say</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <TestimonialCard
            name="John Doe"
            text="Great customer support & good Quality of Products."
          />
          <TestimonialCard
            name="Jane Smith"
            
            text="Good Shopping experience online"
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name,image, text }) => (
  <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
    <img src={assets.profile} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
    <p className="mb-4">{text}</p>
    <h3 className="font-bold">{name}</h3>
  </div>
);

export default Testimonials;

