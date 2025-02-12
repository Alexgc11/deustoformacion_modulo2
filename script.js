// Definición de la clase Alumno
class Alumno {
  #nombre;
  #apellidos;
  #puntos;

  constructor(nombre, apellidos, puntos) {
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#puntos = puntos;
  }

  // Método SET para establecer puntos con validación
  set puntos(valor) {
    if (valor >= 0 && valor <= 10) {
      this.#puntos = valor;
    } else {
      throw new Error("La puntuación debe estar entre o y 10.");
    }
  }

  // Método GET para obtener el estado de aprobación
  get apto() {
    return this.#puntos >= 5 ? "Apto" : "No apto";
  }

  getInfo() {
    return `Alumno: ${this.#nombre} ${this.#apellidos} - Resultado: ${
      this.apto
    }`;
  }
}
