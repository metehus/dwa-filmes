import { Footer } from "../components/Footer";
import { useParams } from 'react-router-dom'
import { filmes } from "../filmes";

export function Detalhes() {
  const { filme: filmeId } = useParams()
  
  const filme = filmes.find(f => f.id === Number(filmeId))

  return <>
    {
      filme ? (<div className="container">
          <img className="w-3 card-img-top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${filme.poster_path}`} />
        <h3>Filme {filme.original_title}</h3>
      </div>
      ) : (
        <h1>Filme inválido</h1>
      )
    }
    <Footer />
  </>
}