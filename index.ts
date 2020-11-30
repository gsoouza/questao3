// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

enum Curso{
  mecatronica = 1,
  informatica,
  redes,
  sistemas};

  enum disciplina = [ ];

  disciplina.push(Curso[1],Curso[2],Curso[3]);

  document.write(`Meus cursos são ${disciplina}`);
}