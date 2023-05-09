/*
    Para continuar celebrando el campeonato mundial de Argentina haremos un ejercicio en su
    honor. Sabiendo que la fecha en que Argentina ganó la tercera fue el 2022-12-18 haga función
    para indicar cuántos días, horas y minutos pasaron hasta hoy de manera “humanizada”.
*/

function calculateDaysHoursMinutes(third){
    let today = new Date()
    let secondsPassed = (today.getTime() - third.getTime()) / 1000

    let daysPassed = Math.floor(secondsPassed / 86400)
    secondsPassed -= daysPassed * 86400

    let hoursPassed = Math.floor(secondsPassed / 3600)
    secondsPassed -= hoursPassed * 3600

    let minutesPassed = Math.floor(secondsPassed / 60)
    secondsPassed -= minutesPassed * 60

    return `${daysPassed} días, ${hoursPassed} horas, ${minutesPassed} minutos y ${Math.floor(secondsPassed)} segundos`
}

function daysFromTheThird(third){
    const spanishDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"]

    const spanishMonths = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


    return `Pasaron ${calculateDaysHoursMinutes(third)} desde el ${spanishDays[third.getDay()]}, ${third.getDate() + 1} de ${spanishMonths[third.getMonth()]} del ${third.getFullYear()}`
}

let third = new Date("2022-12-18")

console.log(daysFromTheThird(third))