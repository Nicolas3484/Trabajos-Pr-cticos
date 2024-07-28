
// 1-3

const arrNums = [1,2,3,4,5,6,7,8,9,10]

const [pos0,pos1,pos2,pos3,pos4, ...restos] = arrNums

const nums = [pos0,pos2,pos4]

const resto = [pos1,pos3,...restos]

//console.log(nums)
//console.log(resto)

// 4

const mascota = {
    nombre: "Tofi",
    tipo: "Perro",
    color: "Doradito",
    raza: "Golden retriever"
}

const {nombre, tipo, color, raza} = mascota

const mensaje = `Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}`

//console.log(mensaje);