export const Skills = () => (
  <section className="max-w-6xl mx-auto px-4 pb-24">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-slate-900 p-8 rounded-2xl border border-gray-800 shadow-xl">
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">
          Frontend Development
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-blue-400">&#8226;</span>
            Modern React Architectures
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-400">&#8226;</span>
            Performance Optimization
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-400">&#8226;</span>
            Responsive & Interactive UIs
          </li>
        </ul>
      </div>
      <div className="bg-slate-900 p-8 rounded-2xl border border-gray-800 shadow-xl">
        <h3 className="text-2xl font-semibold text-purple-400 mb-4">
          Backend Development
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-purple-400">&#8226;</span>
            API Design & Development
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-400">&#8226;</span>
            Database Architecture
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-400">&#8226;</span>
            Real-time Systems
          </li>
        </ul>
      </div>
      <div className="bg-slate-900 p-8 rounded-2xl border border-gray-800 shadow-xl">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          System Design & Cloud 
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-green-400">&#8226;</span>
            AWS/Azure Infrastructure 
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">&#8226;</span>
            Low level and High level design
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">&#8226;</span>
            Scalable Architecture
          </li>
        </ul>
      </div>
    </div>
  </section>
);
