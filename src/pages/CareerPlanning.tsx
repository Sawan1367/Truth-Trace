import React, { useState } from 'react';
import { Brain, Target, BookOpen, ArrowRight, Briefcase, GraduationCap, Award, TrendingUp, Code, BarChart as ChartBar } from 'lucide-react';

const CareerPlanning = () => {
  const [interests, setInterests] = useState('');
  const [analyzing, setAnalyzing] = useState(false);

  const recommendedCareers = [
    {
      title: 'Software Engineer',
      description: 'Design and develop software applications',
      skills: ['JavaScript', 'Python', 'System Design', 'Algorithms'],
      salary: '$80k - $150k',
      growth: '22% by 2029',
      certifications: [
        { name: 'AWS Certified Developer', provider: 'Amazon', url: 'https://aws.amazon.com/certification/certified-developer-associate/' },
        { name: 'Google Cloud Professional', provider: 'Google', url: 'https://cloud.google.com/certification/cloud-developer' }
      ],
      resources: [
        { name: 'LeetCode', type: 'Practice', url: 'https://leetcode.com' },
        { name: 'System Design Primer', type: 'Learning', url: 'https://github.com/donnemartin/system-design-primer' }
      ]
    },
    {
      title: 'Data Scientist',
      description: 'Analyze complex data sets to drive business decisions',
      skills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
      salary: '$90k - $160k',
      growth: '31% by 2029',
      certifications: [
        { name: 'TensorFlow Developer', provider: 'Google', url: 'https://www.tensorflow.org/certificate' },
        { name: 'IBM Data Science', provider: 'IBM', url: 'https://www.ibm.com/training/badge/data-science-professional-certificate' }
      ],
      resources: [
        { name: 'Kaggle', type: 'Practice', url: 'https://www.kaggle.com' },
        { name: 'Fast.ai', type: 'Learning', url: 'https://www.fast.ai' }
      ]
    }
  ];

  const learningPaths = [
    {
      path: 'Full Stack Development',
      duration: '12-18 months',
      stages: [
        {
          title: 'Frontend Fundamentals',
          courses: [
            { name: 'Complete Web Development Bootcamp', platform: 'Udemy', url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp' },
            { name: 'React for Beginners', platform: 'Frontend Masters', url: 'https://frontendmasters.com/courses/complete-react-v8/' }
          ]
        },
        {
          title: 'Backend Development',
          courses: [
            { name: 'Node.js Complete Guide', platform: 'Udemy', url: 'https://www.udemy.com/course/nodejs-the-complete-guide' },
            { name: 'SQL and Databases', platform: 'Coursera', url: 'https://www.coursera.org/learn/sql-for-data-science' }
          ]
        },
        {
          title: 'DevOps & Deployment',
          courses: [
            { name: 'Docker & Kubernetes', platform: 'Pluralsight', url: 'https://www.pluralsight.com/courses/kubernetes-getting-started' },
            { name: 'CI/CD Pipelines', platform: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/learning-jenkins' }
          ]
        }
      ]
    }
  ];

  const handleAnalysis = async () => {
    setAnalyzing(true);
    // TODO: Implement AI analysis
    setTimeout(() => setAnalyzing(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Career Planning</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Let AI help you discover and plan your ideal career path based on your interests and market trends
        </p>
      </header>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Brain className="h-6 w-6 text-indigo-600" />
          Share Your Interests
        </h2>
        <textarea
          className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Tell us about your interests, skills, and aspirations..."
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
        <button
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 flex items-center space-x-2"
          onClick={handleAnalysis}
          disabled={analyzing}
        >
          <span>{analyzing ? 'Analyzing...' : 'Analyze'}</span>
          {!analyzing && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recommended Careers */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-indigo-600" />
            Recommended Careers
          </h2>
          
          {recommendedCareers.map((career, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{career.title}</h3>
                  <p className="text-gray-600">{career.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ChartBar className="h-5 w-5 text-green-500" />
                  <span className="text-green-500 font-medium">{career.growth}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">{career.salary}</span>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Recommended Certifications</h4>
                  <div className="space-y-2">
                    {career.certifications.map((cert, idx) => (
                      <a
                        key={idx}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2 hover:bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-indigo-600">{cert.name}</p>
                            <p className="text-sm text-gray-500">{cert.provider}</p>
                          </div>
                          <GraduationCap className="h-5 w-5 text-gray-400" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Paths */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            Learning Path
          </h2>

          {learningPaths.map((path, pathIndex) => (
            <div key={pathIndex} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{path.path}</h3>
                  <p className="text-gray-600">Estimated duration: {path.duration}</p>
                </div>
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>

              <div className="space-y-8">
                {path.stages.map((stage, stageIndex) => (
                  <div key={stageIndex} className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-200" />
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-indigo-600 rounded-full -translate-x-1.5" />
                      <h4 className="font-semibold text-lg text-gray-800 mb-4">{stage.title}</h4>
                      <div className="space-y-3">
                        {stage.courses.map((course, courseIndex) => (
                          <a
                            key={courseIndex}
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 hover:bg-indigo-50 rounded-lg transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-indigo-600">{course.name}</p>
                                <p className="text-sm text-gray-500">{course.platform}</p>
                              </div>
                              <Code className="h-5 w-5 text-gray-400" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareerPlanning;