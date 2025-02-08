import React from 'react';
import { LineChart as LucideChart, Brain, Target, BookOpen, Search, Clock, TrendingUp, Code, Briefcase, GraduationCap, Book } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, Legend } from 'recharts';

const timeCategories = [
  { name: 'Technical Learning', value: 8.5, color: '#4F46E5' },
  { name: 'Soft Skills', value: 4.2, color: '#10B981' },
  { name: 'Career Research', value: 5.1, color: '#F59E0B' },
  { name: 'Project Work', value: 2.2, color: '#EC4899' }
];

const activityData = [
  { date: 'Mon', technical: 2.5, soft: 1.0, research: 1.5, project: 0.5 },
  { date: 'Tue', technical: 3.1, soft: 0.8, research: 1.2, project: 0.4 },
  { date: 'Wed', technical: 4.2, soft: 1.5, research: 1.8, project: 0.7 },
  { date: 'Thu', technical: 2.8, soft: 1.2, research: 1.4, project: 0.3 },
  { date: 'Fri', technical: 3.9, soft: 1.1, research: 1.6, project: 0.8 },
  { date: 'Sat', technical: 1.5, soft: 0.5, research: 0.8, project: 0.2 },
  { date: 'Sun', technical: 2.0, soft: 0.7, research: 1.0, project: 0.3 }
];

const searchCategories = [
  { category: 'Programming', count: 45, trend: '+15%' },
  { category: 'Data Science', count: 32, trend: '+8%' },
  { category: 'Cloud Computing', count: 28, trend: '+20%' },
  { category: 'UI/UX Design', count: 17, trend: '+5%' }
];

const learningPath = {
  current: 'Full Stack Development',
  progress: 68,
  nextMilestones: [
    {
      title: 'Frontend Fundamentals',
      courses: [
        { name: 'React Complete Guide', platform: 'Udemy', url: 'https://www.udemy.com/course/react-the-complete-guide' },
        { name: 'JavaScript Advanced Concepts', platform: 'Frontend Masters', url: 'https://frontendmasters.com/courses/javascript-hard-parts-v2' }
      ]
    },
    {
      title: 'Backend Development',
      courses: [
        { name: 'Node.js Developer Course', platform: 'Coursera', url: 'https://www.coursera.org/learn/nodejs' },
        { name: 'API Development', platform: 'Pluralsight', url: 'https://www.pluralsight.com/courses/api-design' }
      ]
    },
    {
      title: 'DevOps & Deployment',
      courses: [
        { name: 'Docker Fundamentals', platform: 'Docker', url: 'https://www.docker.com/learn' },
        { name: 'AWS Essentials', platform: 'AWS', url: 'https://aws.amazon.com/training' }
      ]
    }
  ]
};

const careerTracks = [
  {
    path: 'Full Stack Developer',
    match: 95,
    skills: ['React', 'Node.js', 'SQL', 'AWS'],
    salary: '$85k - $150k',
    demand: 'High'
  },
  {
    path: 'Data Scientist',
    match: 82,
    skills: ['Python', 'Machine Learning', 'Statistics'],
    salary: '$90k - $160k',
    demand: 'Very High'
  },
  {
    path: 'DevOps Engineer',
    match: 78,
    skills: ['Docker', 'Kubernetes', 'CI/CD'],
    salary: '$95k - $165k',
    demand: 'High'
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome back, Alex!</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your AI-powered career planning assistant. Here's your personalized dashboard.
        </p>
      </header>

      {/* Time Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-6">Time Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={timeCategories}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {timeCategories.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-6">Weekly Activity Breakdown</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="technical" stackId="1" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.6} name="Technical" />
                <Area type="monotone" dataKey="soft" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="Soft Skills" />
                <Area type="monotone" dataKey="research" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} name="Research" />
                <Area type="monotone" dataKey="project" stackId="1" stroke="#EC4899" fill="#EC4899" fillOpacity={0.6} name="Project" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Search Categories */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-6">Search Analytics</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {searchCategories.map((category, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-800">{category.category}</h3>
              <div className="mt-2">
                <span className="text-2xl font-bold text-indigo-600">{category.count}</span>
                <span className="ml-2 text-green-500">{category.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Learning Path: {learningPath.current}</h2>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-24 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-indigo-600 rounded-full"
                style={{ width: `${learningPath.progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">{learningPath.progress}%</span>
          </div>
        </div>
        
        <div className="space-y-6">
          {learningPath.nextMilestones.map((milestone, index) => (
            <div key={index} className="border-l-2 border-indigo-200 pl-4">
              <h3 className="font-semibold text-lg text-gray-800">{milestone.title}</h3>
              <div className="mt-2 space-y-2">
                {milestone.courses.map((course, courseIndex) => (
                  <a
                    key={courseIndex}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-indigo-600">{course.name}</p>
                        <p className="text-sm text-gray-500">{course.platform}</p>
                      </div>
                      <BookOpen className="h-5 w-5 text-gray-400" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Tracks */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-6">Recommended Career Tracks</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {careerTracks.map((track, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg text-gray-800">{track.path}</h3>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  {track.match}% Match
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{track.salary}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Demand: {track.demand}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {track.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;