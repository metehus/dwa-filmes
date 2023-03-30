import "./card.css";
import Comments from './../Comments/index';
import { filmes, getImageUrl, seenMovies } from "../../filmes";

function Assitido({ seen }) {
  if (seen) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card() {
  return (
    <div className="container text-center">
      <div className="movie-list">
        {filmes.map((filme, i) => (
          <div className="col movie-col" key={i}>
            <div className="card">
              <img src={getImageUrl(filme.poster_path)} alt={filme.title} className="card-img-top" />
              <div className="card-body">
                  <h5 className="card-title">{filme.title} ({new Date(filme.release_date).getFullYear()}) </h5>
                  <p>Sinopse</p>
                  <p className="card-text text-truncate">{filme.overview}</p>
                  
                  <p>Nota {filme.vote_average}</p>
                <Assitido
                  seen={seenMovies.includes(filme.id)}
                />
                <a
                  href={`/detalhes/${filme.id}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
            <Comments filme={filme.nome} />
          </div>
        ))}
      </div>
    </div>
  )
}