import React from 'react';
import { Briefcase, GraduationCap, Clock, MapPin, ChevronRight } from 'lucide-react';
import JobApplicationForm from './JobApplicationForm';

export default function Careers() {
  const [selectedJob, setSelectedJob] = React.useState<string | null>(null);

  const jobs = [
    {
      id: 'english-teacher',
      title: 'English Teacher',
      department: 'Primary Section (Classes I to V)',
      type: 'Full Time',
      location: 'Multiple Branches, Ongole',
      qualifications: [
        'Bachelor\'s/Master\'s degree in English',
        'B.Ed. with relevant specialization',
        'Minimum 2 years of teaching experience',
        'Excellent communication skills'
      ],
      responsibilities: [
        'Develop and deliver engaging English lessons',
        'Create interactive learning materials',
        'Assess and evaluate student progress',
        'Participate in school events and activities'
      ]
    },
    {
      id: 'mathematics-teacher',
      title: 'Mathematics Teacher',
      department: 'Primary Section (Classes I to V)',
      type: 'Full Time',
      location: 'Multiple Branches, Ongole',
      qualifications: [
        'Bachelor\'s/Master\'s degree in Mathematics',
        'B.Ed. with relevant specialization',
        'Minimum 2 years of teaching experience',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Teach mathematics concepts effectively',
        'Develop practical learning activities',
        'Monitor student performance',
        'Provide additional support when needed'
      ]
    },
    {
      id: 'science-teacher',
      title: 'Science Teacher',
      department: 'Primary Section (Classes I to V)',
      type: 'Full Time',
      location: 'Multiple Branches, Ongole',
      qualifications: [
        'Bachelor\'s/Master\'s degree in Science',
        'B.Ed. with relevant specialization',
        'Minimum 2 years of teaching experience',
        'Hands-on approach to teaching'
      ],
      responsibilities: [
        'Conduct engaging science lessons',
        'Organize practical demonstrations',
        'Maintain lab safety protocols',
        'Foster scientific thinking'
      ]
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be part of our mission to provide quality education and shape the future generation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job.id)}
                    className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors flex items-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Qualifications</h4>
                    <ul className="space-y-2">
                      {job.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span className="text-gray-600">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span className="text-gray-600">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedJob && (
        <JobApplicationForm
          jobId={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </section>
  );
}