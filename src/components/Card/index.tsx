import { Link } from 'react-router-dom'
import { filmes } from '../../filmes'
import './Card.css'



export function Card() {
  return <div>
    <div className="container">
      <div className="row" style={{ overflowX: 'auto'}}>
        {
          filmes.map(filme => <div className="col-4">
            <div className="card mt-4">
              <div className="card-body">
                <img className="card-img-top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${filme.poster_path}`} />
                <h5 className="card-title">{filme.title}</h5>
                <p className="card-text">{filme.overview}</p>
                <Link to={`/detalhes/${filme.id}`} className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  </div>
}