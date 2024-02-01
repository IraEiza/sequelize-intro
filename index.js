const { checkDB, syncModels, sequelize } = require('./db/index')

const Student = require('./models/student.model')

async function createStudent(newUserData) {
  try {
    const newUser = await Student.create(newUserData)
    console.log(newUser)
  } catch (error) {
    console.log(error)
  }
}

async function start() {
  try {
    await checkDB()
    await syncModels()
    await createStudent({ 
      name: 'Andrea', 
      age: 31,
      email: 'andrea@gmail.com',
      favourite_pokemon: 'Snorlax y Gigglipuff'
    })
    await createStudent({ 
      name: 'Adriel', 
      age: 31,
      email: 'aaaadriel@gmail.com',
      favourite_pokemon: 'PIKACHUUUU <3'
    })
  } catch (error) {
    
  }
}

start()
