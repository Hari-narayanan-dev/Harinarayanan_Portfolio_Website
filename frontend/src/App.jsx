// export default App
// import React, { useState } from 'react';
import "./App.css";
import ChatbotWidget from './components/chat_widget.jsx';
import { Skills } from './components/skills.jsx';
import {Footer} from './components/footer.jsx';
import {Projects} from './components/projects.jsx';
import { Hero } from './components/Hero.jsx';
import Contact from './components/contact.jsx';
// import { MdOutlineSmartToy } from "react-icons/md";

const Code = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ChevronLeft = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const Rocket = ({ className = "w-6 h-6" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22 22 0 0 1-3.95 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
);


// --- Main App Component ---
export default function App() {
  return (
    // Added a subtle grid pattern to the background like in the screenshots
   <div
  className="h-[300%] w-[124%] bg-black-1800 text-gray-200 font-sans 
            //  [background-image:linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] 
             [background-size:10rem_4rem] [background-position:0_0,0_0]"
>
      <div className="relative z-10 bg-gradient-to-b from-black via-black to-black w-full">
        {/* <Header /> */}
        <main>
          <Hero />
          <ChatbotWidget />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}







// import React, { useState } from 'react';

// // --- Icon Components ---
// const MapPin = ({ className = "w-6 h-6" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const Github = ({ className = "w-6 h-6" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4A5 5 0 0 0 18 2h-3a5 5 0 0 0-1 1v2H7V3a5 5 0 0 0-1-1H3a5 5 0 0 0-1 4 5.5 5.5 0 0 0 1.5 4c0 5 3 6.5 6 6.5-1 1-1 2.5-1 3.5v4" />
//     <path d="M9 18c-4.51 2-5-2-7-2" />
//   </svg>
// );

// const Linkedin = ({ className = "w-6 h-6" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//     <rect width="4" height="12" x="2" y="9" />
//     <circle cx="4" cy="4" r="2" />
//   </svg>
// );

// const TwitterX = ({ className = "w-6 h-6" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M18 6 6 18" />
//     <path d="m6 6 12 12" />
//   </svg>
// );

// const Code = ({ className = "w-6 h-6" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <polyline points="16 18 22 12 16 6" />
//     <polyline points="8 6 2 12 8 18" />
//   </svg>
// );

// const ChevronLeft = ({ className = "w-6 h-6" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="m15 18-6-6 6-6" />
//   </svg>
// );

// const Rocket = ({ className = "w-6 h-6" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
//     <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22 22 0 0 1-3.95 2z"/>
//     <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
//     <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
//   </svg>
// );

// // --- Hero Section ---
// const Hero = () => (
//   <section className="flex flex-col items-center justify-center min-h-screen w-full text-center pt-24 pb-16 px-4">
//     <h1 className="text-7xl md:text-8xl font-bold text-white mb-4">
//       Hari Narayanan
//       <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">.</span>
//     </h1>
//     <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6">Software Developer</h2>
//     <p className="text-lg md:text-xl text-gray-400 max-w-4xl mb-6">
//       I craft end-to-end solutions with 1.7+ years of experience building scalable
//       applications and leading development teams.
//     </p>
//     <p className="text-md text-gray-500 max-w-4xl mb-8">
//       Previously Junior Software Developer at{' '}
//       <a href="#" className="text-blue-400 hover:underline">Finkraft.ai</a>.
//     </p>
//     <div className="flex flex-wrap items-center justify-center gap-3">
//       {['DSA','React.js','Flask','Python','AWS','MongoDb(No sql)','Postgress(sql)','Azure'].map(skill => (
//         <span key={skill} className="text-sm font-medium text-white bg-gray-900/50 px-4 py-1.5 rounded-full border border-gray-700">{skill}</span>
//       ))}
//     </div>
//   </section>
// );

// // --- Skills Section ---
// const Skills = () => (
//   <section className="w-full px-4 pb-24">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//       {[
//         { title: 'Frontend Development', color: 'blue', items: ['Modern React Architectures','Performance Optimization','Responsive & Interactive UIs'] },
//         { title: 'Backend Development', color: 'purple', items: ['API Design & Development','Database Architecture','Real-time Systems'] },
//         { title: 'DevOps & Cloud', color: 'green', items: ['AWS Infrastructure','CI/CD Pipelines','Scalable Architecture'] },
//       ].map(skill => (
//         <div key={skill.title} className={`bg-slate-900 p-8 rounded-2xl border border-gray-800 shadow-xl`}>
//           <h3 className={`text-2xl font-semibold text-${skill.color}-400 mb-4`}>{skill.title}</h3>
//           <ul className="space-y-2 text-gray-300">
//             {skill.items.map(i => <li key={i} className={`flex items-center gap-2`}><span className={`text-${skill.color}-400`}>&#8226;</span>{i}</li>)}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// // --- Projects Section ---
// const Projects = () => (
//   <section className="w-full px-4 pb-24">
//     <h2 className="text-5xl font-bold text-center text-white mb-16">Full Stack Projects</h2>
//     <div className="space-y-16">
//       {/* Repeat ProjectCard with your project data here */}
//     </div>
//   </section>
// );

// // --- Contact Section ---
// const Contact = () => {
//   const [name,setName] = useState(''); const [email,setEmail] = useState(''); const [message,setMessage] = useState(''); const [status,setStatus] = useState('');
//   const handleSubmit = e => { e.preventDefault(); setStatus('success'); setName(''); setEmail(''); setMessage(''); };
//   return (
//     <section className="w-full px-4 pb-24">
//       <h2 className="text-5xl md:text-7xl font-bold text-center text-white mb-6">Let's Build Something Amazing</h2>
//       <p className="text-lg text-gray-400 text-center max-w-4xl mx-auto mb-8">Looking for a full-stack developer who can architect and implement complete solutions? Let's discuss your project.</p>
//       <div className="flex items-center justify-center gap-2 text-gray-400 mb-12"><MapPin className="w-5 h-5"/>San Francisco, CA</div>
//       <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-6">
//         <input type="text" placeholder="Name" className="w-full p-4 rounded-lg bg-slate-800 text-white border border-gray-700" value={name} onChange={e => setName(e.target.value)}/>
//         <input type="email" placeholder="Email" className="w-full p-4 rounded-lg bg-slate-800 text-white border border-gray-700" value={email} onChange={e => setEmail(e.target.value)}/>
//         <textarea rows="5" placeholder="Message" className="w-full p-4 rounded-lg bg-slate-800 text-white border border-gray-700" value={message} onChange={e => setMessage(e.target.value)}/>
//         <button type="submit" className="w-full py-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
//       </form>
//     </section>
//   );
// };

// // --- Footer Section ---
// const Footer = () => (
//   <footer className="w-full flex flex-col items-center justify-center space-y-8 px-4 py-16 border-t border-gray-900">
//     <button className="text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg border border-gray-700 transition-colors">View Resume</button>
//     <div className="flex items-center space-x-6 text-gray-500">
//       <Github /><Linkedin /><TwitterX />
//     </div>
//     <p className="text-gray-600 text-sm">© {new Date().getFullYear()} David Miller. All rights reserved.</p>
//   </footer>
// );

// // --- Main App ---
// export default function App() {
//   return (
//     <div className="w-full min-h-screen bg-black text-gray-200 font-sans">
//       <main className="w-full">
//         <Hero />
//         <Skills />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

