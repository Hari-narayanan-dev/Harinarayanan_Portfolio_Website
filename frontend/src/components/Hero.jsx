// --- 2. Hero Component ---
export const Hero = () => (
  <section className="flex flex-col items-center justify-center min-h-screen w-full text-center px-4 pt-24 pb-16">
    <h1 className="text-7xl md:text-8xl font-bold text-white mb-4">
      Hari Narayanan
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">.</span>
    </h1>
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6">
      Software Developer
    </h2>
    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-6">
      I craft end-to-end solutions with 1.7+ years of experience building scalable
      applications and maintaining/enhancing them.
    </p>
    <p className="text-md text-gray-500 max-w-2xl mb-8">
      Currently Junior Software Developer at{' '}
      <a href="https://finkraft.ai/en" className="text-blue-400 hover:underline">
        Finkraft.ai
      </a>{' '}
      {/* and Tech Lead at{' '}
      <a href="#" className="text-gray-200 hover:underline">
        Vercel
      </a> */}
      .
    </p>
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="text-sm font-medium text-blue-300 bg-blue-900/50 px-4 py-1.5 rounded-full border border-blue-800">
        DSA
      </span>
      <span className="text-sm font-medium text-purple-300 bg-purple-900/50 px-4 py-1.5 rounded-full border border-purple-800">
        React.js
      </span>
      <span className="text-sm font-medium text-green-300 bg-green-900/50 px-4 py-1.5 rounded-full border border-green-800">
        Flask
      </span>
      <span className="text-sm font-medium text-yellow-300 bg-yellow-900/50 px-4 py-1.5 rounded-full border border-yellow-800">
        Python
      </span>
      <span className="text-sm font-medium text-orange-300 bg-orange-900/50 px-4 py-1.5 rounded-full border border-orange-800">
        AWS/AZURE
      </span>
      <span className="text-sm font-medium text-blue-300 bg-blue-900/50 px-4 py-1.5 rounded-full border border-blue-800">
        MongoDb(No sql)
      </span>
      <span className="text-sm font-medium text-purple-300 bg-purple-900/50 px-4 py-1.5 rounded-full border border-purple-800">
        Postgress(sql)
      </span>
      <span className="text-sm font-medium text-green-300 bg-green-900/50 px-4 py-1.5 rounded-full border border-green-800">
        Django
      </span>
      <span className="text-sm font-medium text-orange-300 bg-orange-900/50 px-4 py-1.5 rounded-full border border-orange-800">
        Git & Github
      </span>
      <span className="text-sm font-medium text-blue-300 bg-blue-900/50 px-4 py-1.5 rounded-full border border-blue-800">
        AI (RAG/GEMINI/OPENAI API)
      </span>
    </div>
  </section>
);