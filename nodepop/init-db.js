const readline = require('readline')
const connection = require('./lib/connectMongoose')
const Anuncio = require('./models/Anuncio')

const anunciosJson = require('./anuncios.json')

// Main asynchronous function
async function main() {

    // Ask the user if they are sure
    const continueDelete = await answerYesOrNo('¿Estás seguro que quieres borrar la base de datos? [y/n]')
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
    const inserted = await Anuncio.insertMany(anunciosJson.anuncios)
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