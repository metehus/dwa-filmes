export function Assistido({ seen }) {
  if (seen) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}