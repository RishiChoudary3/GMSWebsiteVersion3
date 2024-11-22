import React from 'react';
import { Trophy, GraduationCap, Star, Award } from 'lucide-react';

export default function AchievementsPage() {
  const awards = [
    {
      title: "BEST MANAGED SCHOOL AWARD",
      year: "2019",
      description: "Indian School Awards @ Delhi",
      image: "https://i.ibb.co/JtNmcsZ/Embedded-Image.jpg",
      icon: <Trophy className="w-8 h-8" />
    }
  ];

  const results = [
    {
      year: "2022",
      highlights: [
        "3 Students above 580 marks",
        "16 Students above 550 marks",
        "34 students above 500 marks",
        "Distinction: 52 (71%)",
        "100% First class students"
      ],
      image: "https://i.ibb.co/yhYNHqB/2022.jpg"
    },
    {
      year: "2019",
      highlights: [
        "10 Students got the 10 GPA",
        "11 Students got the 9.8 GPA",
        "92% of Students got above 9.0 GPA",
        "Overall Class Average is 9.5 GPA"
      ],
      image: "https://i.ibb.co/MNP1RqP/2019.jpg"
    },
    {
      year: "2018",
      highlights: [
        "13 Students out of 41 Students got 10 GPA",
        "32% of Students got 10 GPA",
        "92% of Students got 9 GPA",
        "46% of Students got 10 and 9.8 GPA",
        "Overall Class Average = 9.63"
      ],
      image: "https://i.ibb.co/1XT8kmr/2018.png"
    },
    {
      year: "2017",
      highlights: [
        "13 Students got 10 GPA",
        "20 Students got 10 and 9 GPA",
        "Overall Class Average = 9.3 GPA"
      ],
      image: "https://i.ibb.co/ykgvpV6/2017.jpg"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Awards Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-purple-800 mb-8 flex items-center justify-center">
              <Award className="w-10 h-10 mr-3" />
              Our Achievements
            </h1>
            
            <div className="grid grid-cols-1 gap-8">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative h-64 md:h-96">
                    <img 
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-900/30"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full inline-block mb-4">
                        {award.icon}
                      </div>
                      <h2 className="text-3xl font-bold mb-2">{award.title}</h2>
                      <p className="text-xl mb-2">{award.year}</p>
                      <p className="text-purple-100">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-12 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 mr-3" />
              Academic Excellence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {results.map((result, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img 
                      src={result.image}
                      alt={`${result.year} Results`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{result.year} Results</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {result.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}