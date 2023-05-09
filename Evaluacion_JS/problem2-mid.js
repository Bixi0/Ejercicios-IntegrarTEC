/*
    Para continuar celebrando el campeonato mundial de Argentina haremos un ejercicio en su
    honor. Sabiendo que la fecha en que Argentina ganó la tercera fue el 2022-12-18 haga función
    para indicar cuántos días pasaron hasta hoy de manera “humanizada”.
*/

function daysFromTheThird(third){
    const spanishDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"]

    const spanishMonths = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    //Created new variable with today's Date.
    let today = new Date()

    //Then get the difference of time in milliseconds between both dates and transform it into seconds.
    let timeDifference = (today.getTime() - third.getTime()) / 1000
    
    //Convert the seconds to days.
    let daysPassed = Math.floor(timeDifference / 86400)

    return `Pasaron ${daysPassed} días desde el ${spanishDays[third.getDay()]}, ${third.getDate() + 1} de ${spanishMonths[third.getMonth()]} del ${third.getFullYear()}`
}

let third = new Date("2022-12-18")