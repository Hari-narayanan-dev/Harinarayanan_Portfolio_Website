import React, { useState } from 'react';

const Github = ({ className = "w-6 h-6" }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4A5 5 0 0 0 18 2h-3a5 5 0 0 0-1 1v2H7V3a5 5 0 0 0-1-1H3a5 5 0 0 0-1 4 5.5 5.5 0 0 0 1.5 4c0 5 3 6.5 6 6.5-1 1-1 2.5-1 3.5v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className = "w-6 h-6" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterX = ({ className = "w-6 h-6" }) => (
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const Footer = () => {
  const [open, setOpen] = useState(false);

  const resumeUrl =
    "https://drive.google.com/file/d/1nDo-u8BBf7kxKuqsF4N9oC8LPGYjhOM2/preview";

  return (
    <>
      <footer className="flex flex-col items-center justify-center space-y-8 px-4 py-16 border-t border-gray-900">
        <button
          onClick={() => setOpen(true)}
          className="text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg border border-gray-700 transition-colors"
        >
          View Resume
        </button>

        <div className="flex items-center space-x-6 text-gray-500">
          <a
            href="https://github.com/Hari-narayanan-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/harinarayanan-pari/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a href="#" className="hover:text-white transition-colors">
            <TwitterX className="w-6 h-6" />
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Harinarayanan. All rights reserved.
        </p>
      </footer>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-4xl h-[80vh] bg-gray-900 rounded-lg border border-gray-700">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <iframe
              src={resumeUrl}
              className="w-full h-full rounded-lg"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </>
  );
};