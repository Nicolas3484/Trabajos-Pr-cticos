const datosBici = require('./datosBici')

const dhBici = {
    bicicletas: datosBici.leerJSON(),
    buscarBici: function(id) {
        const biciEncontrada = this.bicicletas.filter((bici) => {
            return bici.id === id
        })
        if(biciEncontrada.length === 0){
         return null
        }
        return biciEncontrada;
    },
    venderBici: function (id) {
        const biciEncontrada = this.buscarBici(id)
        if(biciEncontrada === null) {
            return "Bicicleta no encontrada."
        }
        biciEncontrada[0].vendida = true
        return biciEncontrada[0]
    },
    biciParaLaVenta: function() {
        const bicisNoVendidas = this.bicicletas.filter((bici) => {
            return !bici.vendida 
        })
        return bicisNoVendidas
    },
    totalDeVentas: function() {
    
        const total = this.bicicletas.reduce((acum, bici) => {
            if(bici.vendida) {
                acum += bici.precio;
            }
            return acum
        }, 0)
        return total
    }
    // aumentoBici: function(porcentaje) {
    //     const aumento = this.bicicletas.map ( (x) => {         
    //         return x * porcentaje / 100
    //     })                           
    // }                                "Me rendí en intentarlo jsjsjs" - Yo :c
}

// console.log(dhBici.buscarBici(5))

// console.log(dhBici.venderBici(5))

// console.log(dhBici.biciParaLaVenta())

// console.log(dhBici.totalDeVentas())


