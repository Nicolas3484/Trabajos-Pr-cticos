const importar = (marca) => {
    const fs = require('fs')

    let nArchivo = ''

    if(marca === 'Hot Toys') {
        nArchivo = "figuras1"
    } else if (marca === 'Bandai') {
        nArchivo = "figuras2"
    } else if (marca === 'Star Wars') {
        nArchivo = "figuras3"
    }
    const ruta = `./datos/${nArchivo}.json`
    const marcaJSON = fs.readFileSync(ruta, "utf-8")
    const marcaParse = JSON.parse(marcaJSON)

   return marcaParse
}

module.exports = importar