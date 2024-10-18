import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12" id="contact">

      <div className="glass-effect w-full max-w-3xl p-8 rounded-lg flex flex-col items-center">

        <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-lg text-white mb-6 text-center">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center text-white">

          <a href="mailto:gabrielgaleza@gmail.com" className="flex items-center gap-2 text-lg hover:text-blue-500">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            <span>Email</span>
          </a>

          <a href="https://www.linkedin.com/in/gabriel-gałęza-058566177/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/YoungVigz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-blue-500">
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            <span>GitHub</span>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Contact
