import {useParams} from 'react-router-dom'
import { Footer } from '../components/Footer'

export function Sobre() {
  const { name } = useParams()
  
  return <div>
    <p>Bem vindo ao chuu filmes! Veja filmes interessantes para assistir!</p>
    <Footer />
  </div>
}