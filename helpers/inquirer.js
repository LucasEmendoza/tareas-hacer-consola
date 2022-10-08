const inquirer = require('inquirer')
const colors = require('colors')

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿ Que desea hacer ?',
    choices: [
      {
        value: 1,
        name: `${'1'.toString().blue} Crear una tarea`,
      },
      {
        value: 2,
        name: `${'2'.toString().blue} Listar tareas`,
      },
      {
        value: 3,
        name: `${'3'.toString().blue} Listar tareas completadas`,
      },
      {
        value: 4,
        name: `${'4'.toString().blue} Listar tareas pendientes`,
      },
      {
        value: 5,
        name: `${'5'.toString().blue} Completar tareas(s)`,
      },
      {
        value: 6,
        name: `${'6'.toString().blue} Borrar tarea`,
      },
      {
        value: 7,
        name: `${'7'.toString().blue} Salir`,
      },
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()
  console.log(
    colors.green('=============================================='.magenta)
  )
  console.log(colors.green('Seleccione un opción'.bgBlue))
  console.log(
    colors.green('=============================================='.magenta)
  )

  const { opcion } = await inquirer.prompt(preguntas)
  return opcion
}

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      messege: `Presion ${'enter'.magenta} para continuar`,
    },
  ]
  console.log('\n')
  await inquirer.prompt(question)
}

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor valido'
        }
        return true
      },
    },
  ]
  const { desc } = await inquirer.prompt(question)
  return desc
}
const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    }
  })
  choices.unshift({
    value: '0',
    name: '0.'.green + 'Cancelar',
  })

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices,
    },
  ]

  const { id } = await inquirer.prompt(preguntas)
  return id
}
const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ]
  const { ok } = await inquirer.prompt(question)
  return ok
}

const mostrarListadoChecklist = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    }
  })

  const preguntas = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices,
    },
  ]

  const { ids } = await inquirer.prompt(preguntas)
  return ids
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  mostrarListadoChecklist,
  confirmar,
}
