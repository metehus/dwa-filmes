export function Planos() {
  return <div className="container">
    <h2>Planos</h2>

      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Gratuito</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">R$0 <small className="text-muted">/ mês</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>ver os filmes</li>
              <li>só isso</li>
            </ul>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">R$15 <small className="text-muted">/ mês</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>nada mais que o gratuito, mesma coisa</li>
            </ul>
          </div>
        </div>
        
    </div>
  </div>
}