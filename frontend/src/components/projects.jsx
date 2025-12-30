import React, { useState } from 'react';

const ArchitectureDiagram = ({ schema }) => (
  <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 w-full">
    <h4 className="text-lg font-semibold text-white mb-6 text-center">
      {schema.title}
    </h4>
    <div className="flex flex-col items-center space-y-2">
      {schema.layers.map((layer, layerIndex) => (
        <React.Fragment key={layerIndex}>
          <div className={`flex ${layer.direction === 'row' ? 'flex-row gap-4' : 'flex-col gap-2'} justify-center w-full`}>
            {layer.nodes.map((node) => (
              <div
                key={node.name}
                className={`text-sm font-medium p-3 rounded-lg border-2 text-center ${node.color} ${layer.direction === 'row' ? 'flex-1' : 'w-3/4'}`}
              >
                {node.name}
              </div>
            ))}
          </div>
          {layerIndex < schema.layers.length - 1 && (
            <div className="text-gray-600 text-2xl">&#8595;</div> // Down Arrow
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

// 4b. Project Card Component
const ProjectCard = ({ project, diagramSchema }) => (
  <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Project Info */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-8">{project.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-3">
              {project.col1.title}
            </h4>
            <ul className="space-y-2 text-gray-300">
              {project.col1.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-blue-400">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-3">
              {project.col2.title}
            </h4>
            <ul className="space-y-2 text-gray-300">
              {project.col2.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-purple-400">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {project.col3 && (
            <div className="mt-8">
                <h4 className="text-xl font-semibold text-green-400 mb-3">
                    {project.col3.title}
                </h4>
                <ul className="space-y-2 text-gray-300">
                {project.col3.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                    <span className="text-green-400">&#8226;</span>
                    {item}
                    </li>
                ))}
                </ul>
            </div>
        )}
      </div>

      {/* Architecture Diagram */}
      <div className="flex items-center justify-center">
        <ArchitectureDiagram schema={diagramSchema} />
      </div>
    </div>
  </div>
);



// 4c. Main Projects Section
export const Projects = () => {
  // Data for Project 1
  const project1 = {
    title: 'Students Management System',
    description: 'A web application to manage student records with CRUD operations, built using Django framework and responsive frontend design.',
    col1: {
      title: 'Frontend Architecture',
      items: [
        'Html5 & CSS3',
        'Django Templates',
        'JavaScript for Interactivity',
        'Responsive Design with Flexbox',
      ],
    },
    col2: {
      title: 'Backend Systems',
      items: [
        'django Framework',
        'urls.py for Routing',
        'Views for Business Logic',
      ],
    },
    col3: {
        title: 'Key Achievements',
        items: [
            'CRUD Operations for Student Records',
            'Form Handling and Validation',
            'Dynamic Page Updates without Full Reloads'
        ]
    }
  };

  const schema1 = {
    title: 'System Architecture',
    layers: [
  {
    direction: 'col',
    nodes: [
      {
        name: 'Web Browser',
        color: 'border-blue-500 text-blue-300'
      }
    ]
  },
  {
    direction: 'row',
    nodes: [
      {
        name: 'Frontend UI (Django Templates) | HTML | CSS | JS | Student Form (Add/Edit) | Student Table | Update Button (per row) | Delete Button (per row) | Page Reload / Simple DOM Update',
        color: 'border-purple-500 text-purple-300'
      },
      {
        name: 'Django Views | Add Student | List Students | Update Student | Delete Student',
        color: 'border-purple-500 text-purple-300'
      }
    ]
  },
  {
    direction: 'col',
    nodes: [
      {
        name: 'Django URL Routing (urls.py) | Maps URLs to Views',
        color: 'border-green-500 text-green-300'
      }
    ]
  },
  {
    direction: 'col',
    nodes: [
      {
        name: 'Django CRUD Logic | Form Handling | Basic Validation',
        color: 'border-yellow-500 text-yellow-300'
      }
    ]
  }
]



  };

  // Data for Project 2
  const project2 = {
    title: 'Real-time Analytics Platform',
    description: 'A scalable analytics platform processing 1M+ events per minute with real-time dashboards and ML-powered insights.',
    col1: {
      title: 'Frontend Features',
      items: [
        'Real-time Data Visualization',
        'Interactive Dashboards',
        'Custom Chart Components',
        'Data Export Tools',
      ],
    },
    col2: {
      title: 'Backend Pipeline',
      items: [
        'Apache Kafka Streams',
        'ClickHouse Analytics DB',
        'Python Data Processing',
        'Redis Time Series',
      ],
    },
    col3: {
        title: 'Performance Metrics',
        items: [
            '1M+ Events/Minute Processing',
            'Sub-second Query Response',
            '99.99% Data Accuracy'
        ]
    }
  };
  
  const schema2 = {
      title: 'Data Flow Architecture',
      layers: [
          { direction: 'row', nodes: [{ name: 'Web Events', color: 'border-blue-500 text-blue-300' }, { name: 'Mobile Events', color: 'border-blue-500 text-blue-300' }, { name: 'API Events', color: 'border-blue-500 text-blue-300' }] },
          { direction: 'col', nodes: [{ name: 'Kafka Event Streaming', color: 'border-purple-500 text-purple-300' }] },
          { direction: 'row', nodes: [{ name: 'Stream Processing', color: 'border-green-500 text-green-300' }, { name: 'Batch Processing', color: 'border-green-500 text-green-300' }] },
          { direction: 'row', nodes: [{ name: 'ClickHouse', color: 'border-blue-500 text-blue-300' }, { name: 'Redis Time Series', color: 'border-purple-500 text-purple-300' }] },
          { direction: 'col', nodes: [{ name: 'GraphQL API Layer', color: 'border-green-500 text-green-300' }] },
      ]
  };
  // Data for Project 3
  const project3 = {
    title: 'Image search Engine',
    description: 'A scalable analytics platform processing 1M+ events per minute with real-time dashboards and ML-powered insights.',
    col1: {
      title: 'Frontend Features',
      items: [
        'Real-time Data Visualization',
        'Interactive Dashboards',
        'Custom Chart Components',
        'Data Export Tools',
      ],
    },
    col2: {
      title: 'Backend Pipeline',
      items: [
        'Apache Kafka Streams',
        'ClickHouse Analytics DB',
        'Python Data Processing',
        'Redis Time Series',
      ],
    },
    col3: {
        title: 'Performance Metrics',
        items: [
            '1M+ Events/Minute Processing',
            'Sub-second Query Response',
            '99.99% Data Accuracy'
        ]
    }
  };
  
  const schema3 = {
      title: 'Data Flow Architecture',
      layers: [
          { direction: 'row', nodes: [{ name: 'Web Events', color: 'border-blue-500 text-blue-300' }, { name: 'Mobile Events', color: 'border-blue-500 text-blue-300' }, { name: 'API Events', color: 'border-blue-500 text-blue-300' }] },
          { direction: 'col', nodes: [{ name: 'Kafka Event Streaming', color: 'border-purple-500 text-purple-300' }] },
          { direction: 'row', nodes: [{ name: 'Stream Processing', color: 'border-green-500 text-green-300' }, { name: 'Batch Processing', color: 'border-green-500 text-green-300' }] },
          { direction: 'row', nodes: [{ name: 'ClickHouse', color: 'border-blue-500 text-blue-300' }, { name: 'Redis Time Series', color: 'border-purple-500 text-purple-300' }] },
          { direction: 'col', nodes: [{ name: 'GraphQL API Layer', color: 'border-green-500 text-green-300' }] },
      ]
  };

  return (
    <section className="max-w-6xl mx-auto px-4 pb-24">
      <h2 className="text-5xl font-bold text-center text-white mb-16">
        Full Stack Projects
      </h2>
      <div className="space-y-16">
        <ProjectCard project={project1} diagramSchema={schema1} />
        {/* <ProjectCard project={project2} diagramSchema={schema2} />
      </div>
      <h2 className="text-5xl font-bold text-center text-white mb-16">
        Frontend Projects(with API)
      </h2>
      <div className="space-y-16">
        <ProjectCard project={project1} diagramSchema={schema1} />
        <ProjectCard project={project2} diagramSchema={schema2} /> */}
      </div>
    </section>
  );
};