import { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <Fragment>
      <div className='footer'>
        <div className='footer-container'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faInstagram} size='lg' />
              Instagram
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size='lg' />
              Linkedin
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} size='lg' />
              GitHub
            </li>
          </ul>

          <img
            src='https://cdn.discordapp.com/attachments/882783374060695582/923786814404304897/256x256bb.png'
            alt=''
          />
        </div>
      </div>
    </Fragment>
  )
}
