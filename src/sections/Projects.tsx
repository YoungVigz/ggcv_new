const Projects = () => {
    return (
      <div id="projects" className="w-full flex flex-col items-center justify-center py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">

          <div className="glass-effect w-full h-80 flex flex-col items-center justify-start p-4 text-white rounded-lg">
            <img
              src="/assets/p1.png"
              alt="Project 1"
              className="w-full h-36 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">GGCV</h3>
            <p className="text-sm">Technologies: React.js, TailwindCSS, Node.js, Three.js</p>
          </div>

          <div className="glass-effect w-full h-80 flex flex-col items-center justify-start p-4 text-white rounded-lg">
            <img
              src="/assets/p2.png"
              alt="Project 2"
              className="w-full h-36 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Todo Haven</h3>
            <p className="text-sm">Technologies: React.js, Node.js, Express.js, MonogDB</p>
          </div>
  
          <div className="glass-effect w-full h-80 flex flex-col items-center justify-start p-4 text-white rounded-lg">  
            <h3 className="text-xl font-semibold mb-2">TBA</h3>
          </div>
        </div>
  
        <div className="mt-8 glass-effect w-full max-w-xs h-16 flex items-center justify-center p-4 text-white rounded-lg">
          <a href="https://github.com/YoungVigz" target="_blank" className="underline">
            For more, check out my GitHub
          </a>
        </div>
      </div>
    )
  }
  
  export default Projects
  