const names = ["Jorge", "Rúbia", "Duda", "Luiza"];

export default function HomePage() {
  return (
    <main>
      <h1>Lista de Nomes</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
