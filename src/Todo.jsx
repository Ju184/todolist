import { useState } from "react";
import "./styles.css";

export default function Todo() {
  const [taches, setTaches] = useState(["a", "b"]);
  const [tache, setTache] = useState("t1");
  function majTache(e) {
    e.preventDefault();

    setTache(e.target.value);
  }
  function addTache() {
    setTaches([...taches, tache]);
  }
  return (
    <div>
      {tache}
      <ul>
        {taches.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
      <input valeur={tache} onChange={majTache} />
      <button onClick={addTache}>add</button>
    </div>
  );
}
