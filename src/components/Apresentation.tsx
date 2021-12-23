import { Fragment } from 'react'

export default function Apresentation() {
  return (
    <Fragment>
      <div className='apresentation-left-content'>
        <p>
          Projeto desenvolvido utilizando JavaScript, React, TypeScript, SCSS, NodeJs, Express e
          MongoDB. Para rodar o projeto primeiramente instale as dependências com o comando npm i,
          depois rode o comando npm start e abra a porta 3000. O back-end do projeto esta exposto em
          meu GitHub e você pode visualiza-lo clicando: &nbsp;
          <a href='https://github.com/GuilhermeOlavoLaux/trello-back'>aqui</a>.
        </p>

        <div className='about-me'>
          <img
            src='https://media.discordapp.net/attachments/882783374060695582/923665395615924234/Guilherme.png'
            alt='Guilherme Laux'
          />

          <div className='about-me-text'>
            <h3>Guilherme Laux</h3>
            <p>Desenvolvedor FullStack</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
