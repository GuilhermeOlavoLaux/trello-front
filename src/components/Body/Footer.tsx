import { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <Fragment>
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-links'>
            <a href='https://www.instagram.com/guilherme__laux/' target={'_blank'}>
              <FontAwesomeIcon icon={faInstagram} size='lg' color='white' />
            </a>
            <a href='https://www.linkedin.com/in/guilherme-laux1999/' target={'_blank'}>
              <FontAwesomeIcon icon={faLinkedin} size='lg' color='white' />
            </a>
            <a href='https://github.com/GuilhermeOlavoLaux' target={'_blank'}>
              <FontAwesomeIcon icon={faGithub} size='lg' color='white' />
            </a>
          </div>

          <img
            src='https://cdn.discordapp.com/attachments/882783374060695582/923786814404304897/256x256bb.png'
            alt=''
          />
        </div>
      </div>
    </Fragment>
  )
}
