import React, { useState } from 'react';

const MapPin = ({ className = "w-6 h-6" }) => (
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
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// --- 5. Contact Component ---
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // 'success', 'error', or ''

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = { name, email, message };
        const BACKEND_API_URL = "https://harinarayanan-portfolio-website.onrender.com"

        // --- PYTHON BACKEND INTEGRATION ---
        // This is where you would send the data to your Python backend.
        // You might be using Flask, FastAPI, or Django.
        //
        // Example using fetch to a hypothetical /api/contact endpoint:
        
        try {
            const response = await fetch(`${BACKEND_API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }


        // --- SIMULATION FOR THIS DEMO ---
        // We'll just log the data and simulate a successful response.
        console.log('Form data to send to Python backend:', formData);
        
        // Simulate network delay
        setTimeout(() => {
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
            
            // Reset status message after a few seconds
            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    return (
        <section className="max-w-8xl mx-auto px-4 pb-24">
            <h2 className="text-10xl font-bold text-center text-white mb-6">
                Let's Build Something Amazing
            </h2>
            <p className="text-lg text-gray-400 text-center max-w-xl mx-auto mb-8">
                Looking for a full-stack developer who can architect and implement complete solutions? Let's discuss your project.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-12">
                <MapPin className="w-5 h-5" />
                Banglore, India
            </div>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                
                <div className="text-center">
                    <button 
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full text-lg font-semibold text-white px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
                {status === 'success' && (
                    <p className="text-center text-green-400">Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                     <p className="text-center text-red-400">Something went wrong. Please try again.</p>
                )}
            </form>
        </section>
    );
}

export default Contact;
