import './index.scss'
import ButtonAtv from '../buttonAtv/ButtonAtv'

export default function YouTube() {
  return(
    <>
      <div className="youtube">
        <video autoPlay loop muted src="bgMovieYoutube.mp4" typeof='video/mp4'></video>
        <div className="youtube__content">
          <h1>Conheça nosso canal do Youtube</h1>
          <p>Em nosso canal temos conteúdos sobre serigrafia, esclarecendo as principais dúvidas do mundo silk, como transmitimos a capacitação: Estampador de Sucesso!</p>
          <p>Se você deseja tirar dúvidas sobre serigrafia, clique aqui e conheça o canal mais intenso.</p>
          <ButtonAtv
          link=""
          largura=""
          nome="inscreva-se no nosso canal"
          />
        </div>
      </div>
    </>
  )
}