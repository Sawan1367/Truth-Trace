// import React, { useState } from 'react';
// import { User, Mail, BookOpen, Brain } from 'lucide-react';

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     name: '',
//     email: '',
//     currentRole: '',
//     interests: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: Implement profile update
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-8">
//       <header className="text-center">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Profile</h1>
//         <p className="text-gray-600">
//           Keep your information up to date to receive the most relevant career guidance
//         </p>
//       </header>

//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               <div className="flex items-center space-x-2">
//                 <User className="h-4 w-4" />
//                 <span>Full Name</span>
//               </div>
//             </label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//               value={profile.name}
//               onChange={(e) => setProfile({ ...profile, name: e.target.value })}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               <div className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4" />
//                 <span>Email</span>
//               </div>
//             </label>
//             <input
//               type="email"
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//               value={profile.email}
//               onChange={(e) => setProfile({ ...profile, email: e.target.value })}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               <div className="flex items-center space-x-2">
//                 <BookOpen className="h-4 w-4" />
//                 <span>Current Role</span>
//               </div>
//             </label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//               value={profile.currentRole}
//               onChange={(e) => setProfile({ ...profile, currentRole: e.target.value })}
//             />
          
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               <div className="flex items-center space-x-2">
//                 <Brain className="h-4 w-4" />
//                 <span>Professional Interests</span>
//               </div>
//             </label>
//             <textarea
//               className="w-full h-32 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//               value={profile.interests}
//               onChange={(e) => setProfile({ ...profile, interests: e.target.value })}
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Profile;