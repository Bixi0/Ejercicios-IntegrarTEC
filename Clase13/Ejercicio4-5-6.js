/*
    4- Hubo una conferencia de programación hace poco y necesitamos saber quienes fueron las personas que estuvieron en el evento. 
    Sabemos que la información está guardada en un array de objetos. Necesitamos saber cuántas personas del continente que 
    escogimos asistieron. Haga una función para devolver dicho valor.

    5- Teniendo en cuenta la misma conferencia anterior, necesitamos poder personalizar un mensaje para cada persona que asista al 
    evento la próxima vez. Para eso, nuestra tarea es tener una función que devuelva un array donde cada posición tiene un objeto 
    con una nueva propiedad de nombre “greeting” o “bienvenida”.

    6- Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber programadores de cierto lenguaje para 
    poder preparar contenido específico. Por lo tanto, necesitamos una función que nos devuelva “true” o “false” cuando le preguntemos 
    por cierto lenguaje.
*/

const filterByContinent = (array, continent) => {
    const filteredArray = array.filter(element => element.continent === continent)
    return filteredArray.length
}

const addGreetings = (array) => {
    array.map(object => object.greetings = `Hi ${object.firstName}, what do you like the most about ${object.language}?`)
}

const verifyLanguagePresence = (array, languageToSearch) => {
    if (array.find(object => object.language === languageToSearch)){
        return true
    }
    return false
}

const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  
  //Resolviendo Ejercicio 4
  console.log(`1- Individuals from Asia = ${filterByContinent(list, "Asia")}`)
  
  //Resolviendo Ejercicio 5
  addGreetings(list)
  console.log("Showing new array with 'Greetings' parameter added")
  console.log(list)

  //Resolviendo Ejercicio 6
  console.log(`Is there any Python programmer? ${verifyLanguagePresence(list, "Python")}`)
  console.log(`Is there any JavaScript programmer? ${verifyLanguagePresence(list, "JavaScript")}`)