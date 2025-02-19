import React, { useState, useEffect } from 'react';
import { Heart, Users, Globe2, ChevronLeft, ChevronRight } from 'lucide-react';
import members from '../images/members.jpg'
import backend from '../images/backend.jpg'
import team from '../images/our-team.jpg'
import mcs from '../images/mcs.jpg'
import Chloe from '../images/Chloe.png'
import Jolin from '../images/Jolin.png'
import Melodie from '../images/Melodie.png'
import Steven from '../images/Steven.png'
import background from '../images/Background2.jpg'

const images = [
  members,
  team,
  backend,
  mcs
];

const teamMembers = [
  {
    name: "Steven",
    role: "Co-President",
    image: `${Steven}`
  },
  {
    name: "Jolin",
    role: "Co-President",
    image: `${Jolin}`
  },
  {
    name: "Chloe",
    role: "Co-Vice President",
    image: `${Chloe}`
  },
  {
    name: "Melodie",
    role: "Co-Vice President",
    image: `${Melodie}`
  }
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: `center ${scrollY * -0.4}px`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  };
  
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={parallaxStyle}
      />
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b"
      />
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">About East Asian Student Association</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We are a student-led organization dedicated to celebrating and sharing East Asian culture
              within the Abbey Park High School and the HDSB community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative h-[250px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-white w-4' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-200 mb-6">
                The East Asian Student Association aims to create a welcoming space where students can explore,
                celebrate, and share East Asian cultures. We promote cultural understanding through
                various activities, events, and educational programs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow">
                  <Heart className="h-6 w-6 text-red-800 mb-2" />
                  <h3 className="font-bold mb-1">Inclusivity</h3>
                  <p className="text-sm text-gray-600">Open to all students interested in East Asian culture</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow">
                  <Globe2 className="h-6 w-6 text-red-800 mb-2" />
                  <h3 className="font-bold mb-1">Cultural Exchange</h3>
                  <p className="text-sm text-gray-600">Sharing traditions and modern culture<br />Collaborate with other school's related club and society</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8 mt-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-red-800">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Us!</h2>
            <p className="text-gray-200 mb-8">
              We meet every Wednesday after school in Room 204. New members are always welcome!
            </p>
            <button className="bg-red-800 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg" onClick={() => (window.location.href = "https://docs.google.com/forms/d/1U5jVxUf6B-TFbKBiKCEDBn0JJO5HTmPO3WPuO40YX8s/viewform?edit_requested=true#settings")}>
              Apply To Be An Executive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;