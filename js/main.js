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

// Función que devuelve una promesa después de 2 segundos
function evaluarAlumno() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let name = document.getElementById("name").value.trim();
      let surname = document.getElementById("surname").value.trim();
      let points = document.getElementById("points").value.trim();

      if (!name || !surname || points === "") {
        reject("Datos no validos");
        return;
      }

      let puntos = Number(points);

      if (isNaN(puntos) || puntos < 0 || puntos > 10) {
        reject("La puntuación debe estar entre 0 y 10");
        return;
      }

      try {
        const alumno = new Alumno(name, surname, puntos);
        resolve(alumno.getInfo());
      } catch (error) {
        reject(error.message);
      }
    }, 2000);
  });

  // Función principal que usa async/await y maneja errores
  async function showUserResult() {
    try {
      const resultado = await evaluarAlumno();
      console.log(resultado);
    } catch (error) {
      console.error("Error: ", error);
    }
  }
}
