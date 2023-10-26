alert("Bienvenido, a continuación elija un número para ver el listado de alumnos ingresados en las salitas del jardín");
let salita = parseInt(prompt("Opción 1: Salita 3 años, Opción 2: Salita 4 años, Opción 3: Salita 5 años"));
const alumnos3añitos = [
    {
        Nombre: "Ramiro",
        Apellido: "Gonzalez"
    },
    {
        Nombre: "Sebastian",
        Apellido: "Rodriguez"
    },
    {
        Nombre: "Camila",
        Apellido: "Rodriguez"
    },
    {
        Nombre: "Estefania",
        Apellido: "Perez"
    },
    {
        Nombre: "Nadia",
        Apellido: "Sanchez"
    }
];
const alumnos4añitos = [
    {
        Nombre: "Tamara",
        Apellido: "Hernandez"
    },
    {
        Nombre: "Micaela",
        Apellido: "Perez"
    },
    {
        Nombre: "Candela",
        Apellido: "Gonzalez"
    },
    {
        Nombre: "Marcos",
        Apellido: "Campos"
    },
    {
        Nombre: "Angelica",
        Apellido: "Cedillo"
    },
    {
        Nombre: "Franco",
        Apellido: "Berumen"
    },
    {
        Nombre: "Nadia",
        Apellido: "Perez"
    }
];
const alumnos5añitos = [
    {
        Nombre: "Paula",
        Apellido: "Gutierrez"
    },
    {
        Nombre: "Adrian",
        Apellido: "Rojo"
    },
    {
        Nombre: "Martin",
        Apellido: "Rojas"
    },
    {
        Nombre: "Estefania",
        Apellido: "Juarez"
    },
    {
        Nombre: "Valeria",
        Apellido: "Nuñes"
    },
    {
        Nombre: "Nadia",
        Apellido: "Florez"
    }
];
if (salita === 1) {
    for (let i = 0; i < alumnos3añitos.length; i++) {
        alert(alumnos3añitos[i].Nombre + " " + alumnos3añitos[i].Apellido);
    }
} else if (salita === 2) {
    for (let i = 0; i < alumnos4añitos.length; i++) {
        alert(alumnos4añitos[i].Nombre + " " + alumnos4añitos[i].Apellido);
    }
} else if (salita === 3) {
    for (let i = 0; i < alumnos5añitos.length; i++) {
        alert(alumnos5añitos[i].Nombre + " " + alumnos5añitos[i].Apellido);
    }
} else {
    alert("Elija opción 1, 2 o 3");
}