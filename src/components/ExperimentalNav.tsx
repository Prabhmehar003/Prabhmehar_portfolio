// import { useState, useEffect } from 'react';

// export const ExperimentalNav = () => {
//   const [activeSection, setActiveSection] = useState('hero');
//   const [isVisible, setIsVisible] = useState(false);

//   const navItems = [
//     { id: 'hero', label: 'HOME', char: '█' },
//     { id: 'about', label: 'ABOUT', char: '▓' },
//     { id: 'skills', label: 'SKILLS', char: '▒' },
//     { id: 'projects', label: 'WORK', char: '░' },
//     { id: 'experience', label: 'EXP', char: '▫' },
//     { id: 'contact', label: 'CONTACT', char: '▪' },
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   return (
//     <nav
//       className={`
//         fixed top-6 right-4 z-40
//         w-[96px]
//         border border-black
//         bg-white
//         transition-all duration-700
//         ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
//       `}
//     >
//       <div className="bg-background border-2 border-foreground p-3">

//         {/* Navigation Title */}
//         <div className="text-right mb-4">
//           <span className="font-mono text-xs tracking-widest">
//             NAVIGATION
//           </span>
//         </div>

//         {/* Navigation Items */}
//         <div className="space-y-2">
//           {navItems.map((item, index) => (
//             <button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               className={`
//                 w-full
//                 h-[44px]
//                 px-3
//                 flex items-center justify-between
//                 border border-foreground
//                 font-mono text-xs tracking-wider
//                 transition-all duration-200
//                 ${
//                   activeSection === item.id
//                     ? 'bg-foreground text-background'
//                     : 'hover:bg-foreground hover:text-background'
//                 }
//               `}
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Label */}
//               <span className="text-left">
//                 {item.label}
//               </span>

//               {/* Indicator */}
//               <span className="text-lg leading-none">
//                 {item.char}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Experimental Footer Text */}
//         <div className="mt-6 text-right">
//           <div className="font-mono text-xs opacity-60 leading-none">
//             <div>EXP</div>
//             <div>PORT</div>
//             <div>FOLIO</div>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// };
