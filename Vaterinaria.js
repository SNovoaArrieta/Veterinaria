const dueños = new Map();       
const mascotas = new Map();    

let idDueño = 1;
let idMascota = 1;

function mostrarMenu() {
  let opcion;
  do {
    opcion = prompt(`
*****  MENU  ***********
1. Registrar un nuevo dueño 
2. Registrar una nueva mascota 
3. Listar todas las mascotas
4. Buscar una mascota por nombre 
5. Actualizar estado de salud
6. Eliminar una mascota 
7. Ver mascotas de un dueño 
8. Salir
Elige una opción:`);

    switch (opcion) {
      case "1": registrarDueñoAsync(); break;
      case "2": registrarMascotaAsync(); break;
      case "3": listarMascotas(); break;
      case "4": buscarMascotaAsync(); break;
      case "5": actualizarSaludAsync(); break;
      case "6": eliminarMascotaAsync(); break;
      case "7": verMascotasPorCedulaAsync(); break;
      case "8": alert("¡Hasta luego!"); break;
      default: alert("Opción inválida");
    }
  } while (opcion !== "8");
}

function registrarDueñoAsync() {
  const nombre = prompt("Nombre del dueño:");
  const cedula = prompt("Cédula:");
  const telefono = prompt("Teléfono:");
  const correo = prompt("Correo electrónico:");

  if (!nombre || !cedula || !telefono || !correo) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  setTimeout(() => {
    const nuevoDueño = {
      id: idDueño++,
      nombre,
      cedula,
      telefono,
      correo
    };
    dueños.set(cedula, nuevoDueño);
    alert("Dueño registrado con éxito!");
  }, 1500);
}

function registrarMascotaAsync() {
  const nombre = prompt("Nombre de la mascota:");
  const especie = prompt("Especie (Perro, Gato, Ave, Reptil, Otro):");
  const edad = parseFloat(prompt("Edad (años):"));
  const peso = parseFloat(prompt("Peso (kg):"));
  const estado = prompt("Estado de salud (Sano, Enfermo, En tratamiento):");
  const cedulaDueño = prompt("Cédula del dueño:");

  if (!nombre || !especie || isNaN(edad) || edad <= 0 || isNaN(peso) || peso <= 0 || !estado || !cedulaDueño) {
    alert("Datos inválidos.");
    return;
  }

  setTimeout(() => {
    const dueño = dueños.get(cedulaDueño);
    if (!dueño) {
      alert("Dueño no encontrado (async).");
      return;
    }

    const nuevaMascota = {
      id: idMascota++,
      nombre,
      especie,
      edad,
      peso,
      estado,
      idDueño: dueño.id,
      cedulaDueño
    };
    mascotas.set(nuevaMascota.id, nuevaMascota);
    alert("Mascota registrada con éxito!");
  }, 2000);
}

function listarMascotas() {
  if (mascotas.size === 0) {
    alert("No hay mascotas registradas.");
    return;
  }

  console.log("Lista de Mascotas:");
  mascotas.forEach(m => {
    const dueño = dueños.get(m.cedulaDueño);
    console.log(`• ${m.nombre} (${m.especie}) - ${m.estado} - Dueño: ${dueño?.nombre}`);
  });
}

function buscarMascotaAsync() {
  const nombre = prompt("Nombre de la mascota:");

  const buscar = new Promise((resolve, reject) => {
    setTimeout(() => {
      const mascota = [...mascotas.values()].find(m => m.nombre.toLowerCase() === nombre.toLowerCase());
      mascota ? resolve(mascota) : reject("Mascota no encontrada.");
    }, 1500);
  });

  buscar
    .then(m => {
      const dueño = dueños.get(m.cedulaDueño);
      alert(`Mascota encontrada:\nNombre: ${m.nombre}\nEstado: ${m.estado}\nDueño: ${dueño?.nombre}`);
    })
    .catch(err => alert(err));
}

async function actualizarSaludAsync() {
  const nombre = prompt("Nombre de la mascota:");
  const nuevaSalud = prompt("Nuevo estado (Sano, Enfermo, En tratamiento):");

  const mascota = [...mascotas.values()].find(m => m.nombre.toLowerCase() === nombre.toLowerCase());
  if (!mascota) {
    alert("Mascota no encontrada.");
    return;
  }

  await new Promise(resolve => setTimeout(resolve, 1000));
  mascota.estado = nuevaSalud;
  alert("Estado de salud actualizado.");
}

function eliminarMascotaAsync() {
  const nombre = prompt("Nombre de la mascota a eliminar:");

  const eliminar = new Promise((resolve, reject) => {
    setTimeout(() => {
      const mascotaEntry = [...mascotas.entries()].find(([_, m]) => m.nombre.toLowerCase() === nombre.toLowerCase());
      if (!mascotaEntry) {
        reject("Mascota no encontrada.");
      } else {
        mascotas.delete(mascotaEntry[0]);
        resolve("Mascota eliminada con éxito.");
      }
    }, 2000);
  });

  eliminar
    .then(msg => alert(msg))
    .catch(err => alert(err));
}

async function verMascotasPorCedulaAsync() {
  const cedula = prompt("Cédula del dueño:");
  const dueño = dueños.get(cedula);
  if (!dueño) {
    alert("Dueño no encontrado.");
    return;
  }

  await new Promise(resolve => setTimeout(resolve, 2000));
  const susMascotas = [...mascotas.values()].filter(m => m.cedulaDueño === cedula);

  if (susMascotas.length === 0) {
    alert("Este dueño no tiene mascotas registradas.");
    return;
  }

  console.log(`🐾 Mascotas de ${dueño.nombre}:`);
  susMascotas.forEach(m => {
    console.log(`• ${m.nombre} (${m.especie}) - ${m.estado}`);
  });
}

mostrarMenu();
