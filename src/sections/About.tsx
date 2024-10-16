import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faNodeJs, faGit, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12" id="about">
      <div className="glass-effect w-full max-w-4xl p-8 rounded-lg flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-white mb-6 text-center">
          I am a passionate developer skilled in both front-end and back-end technologies. Here's a breakdown of my skills:
        </p>

        <div className="mb-8 w-full text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Front-end:</h3>
          <div className="flex flex-wrap gap-6 justify-center text-white">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faReact} className="text-4xl" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faJs} className="text-4xl" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faCodeBranch} className="text-4xl" />
              <span>SCSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faReact} className="text-4xl" />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="mb-8 w-full text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Back-end:</h3>
          <div className="flex flex-wrap gap-6 justify-center text-white">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faNodeJs} className="text-4xl" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faCodeBranch} className="text-4xl" />
              <span>Express.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faCodeBranch} className="text-4xl" />
              <span>Nest.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faDatabase} className="text-4xl" />
              <span>SQL</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faDatabase} className="text-4xl" />
              <span>GraphQL</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faDatabase} className="text-4xl" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Others:</h3>
          <div className="flex flex-wrap gap-6 justify-center text-white">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faGit} className="text-4xl" />
              <span>Git</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faGithub} className="text-4xl" />
              <span>GitHub</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faFigma} className="text-4xl" />
              <span>Figma</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faCodeBranch} className="text-4xl" />
              <span>Insomnia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
