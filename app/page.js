const names = ["Jorge", "Rúbia", "Duda", "Luiza (Lulu)"];

export default function HomePage() {
  return (
    <main>
      <h1>Minha linda família: eu e minha família serviremos a Deus</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
