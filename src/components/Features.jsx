import React from 'react'
import { FiCheck, FiUser, FiRewind
 } from 'react-icons/fi';

const Features = () => {
  return (
    <section id='features' className="py-16 px-6  text-gray-800">
      <div className="max-w-7xl mx-auto text-center ">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">Why Choose Us</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <FeatureCard icon={<FiCheck className='mx-auto'/>} title="Best Quality" text="100% Good Quality Products."  />
          <FeatureCard icon={<FiUser className='mx-auto' />} title="User Friendly" text="A Good Experience For Users." />
          <FeatureCard icon={<FiRewind className='mx-auto'/>} title="Easy Replace" text="Under 7 Days Replace." />
        </div>
      </div>
    </section>
  );
};


const FeatureCard = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
    <div className="text-yellow-400 text-6xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p>{text}</p>
  </div>
);



export default Features
