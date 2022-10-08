const colors = require('colors')
const { resolve } = require('path')

const mostrarMenu = () => {
  return new Promise((resolve) => {
    

    console.log(`${'1'.toString().blue}.${'Crear una tarea'.toString().bgRed}`)
    console.log(
      `${'2'.toString().blue}.${'Listar tareas'.toString().bgMagenta}`
    )
    console.log(
      `${'3'.toString().blue}.${
        'Listar tareas completadas'.toString().bgYellow
      }`
    )
    console.log(
      `${'4'.toString().blue}.${'Listar tareas pendientes'.toString().bgCyan}`
    )
    console.log(
      `${'5'.toString().blue}.${'Completar tareas(s)'.toString().bgRed}`
    )
    console.log(`${'6'.toString().blue}.${'Borrar tarea'.bgMagenta}`)
    console.log(`${'0'.toString().blue}.${'Salir'.toString().bgYellow}`)

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    readline.question(`Selecione una opción:`, (opt) => {
      readline.close()
      resolve(opt)
    })
  })
}

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    readline.question(`Presionwe ENTER para continuar`, (opt) => {
      readline.close()
      resolve()
    })
  })
}

module.exports = {
  mostrarMenu,
  pausa,
}
