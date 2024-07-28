const { log } = require('console')
const importar = require('./collectibles.js')


const hotToys = importar('Hot Toys')
const bandai = importar('Bandai')
const starWars = importar('Star Wars')

const unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
]

const collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function() {
        this.figuras.forEach((figuras, i) => {
            console.log(`${i + 1} - ${figuras.marca} ${figuras.nombre}:\n precio: $${figuras.precio}\n stock: ${figuras.stock}`)
        })
    },
    figuresByBrand: function(marca) {
        const figurasFiltr = this.figuras.filter(({marca: marca1}) => marca1.toLowerCase() === marca.toLowerCase())
        return figurasFiltr
    }
}


// console.log(collectibles.listFigures())

console.log(collectibles.figuresByBrand("hot toyS"))
