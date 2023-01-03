const readline = require('readline')
const connection = require('./lib/connectMongoose')
const Anuncio = require('./models/Anuncio')

// Main asynchronous function
async function main() {

    // Ask the user if they are sure
    const continueDelete = await answerYesOrNo('¿Estás seguro que quieres borrar la base de datos? [n]')
    if (!continueDelete) {
        process.exit()
    }

    await initAnuncios()
    connection.close()
}


// Function to initialize the ad model
async function initAnuncios() {
    // delete all documents from the ad collection 
    const result = await Anuncio.deleteMany()
    console.log(`Eliminados ${result.deletedCount} anuncios`)

    // create starter ads
    const inserted = await Anuncio.insertMany([
        { name: "Bicicleta", sale: true, price: 120, photo:"bici.jpg", tags:["motor"]},
        { name: "iPhone 3G", sale: false, price: 500, photo:"iphone.png", tags:["work","mobile"]},
        { name: "PlayStation 4", sale: true, price: 250, photo:"playstation.jpg", tags:["lifestyle"]}
    ])
    console.log(`Creados ${inserted.length} anuncios`)
}

main().catch(err => console.log('Hubo un error', err))



function answerYesOrNo(text) {
    return new Promise((resolve, reject) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        interface.question(text, reply => {
            interface.close()
            if (reply.toLocaleLowerCase() === 'y') {
                resolve(true)
                return
            }
            resolve(false)
        })
    })

}