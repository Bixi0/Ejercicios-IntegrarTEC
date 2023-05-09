/*
    Para continuar celebrando el campeonato mundial de Argentina haremos un ejercicio en su
    honor. Sabiendo que la fecha en que Argentina ganó la tercera fue el 2022-12-18 haga una
    función para “humanizar” dicha fecha.
*/

function humanizeDate(date){
    const spanishDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"]
    const spanishMonths = [ "Enero", "Febrero", "Marzo", 
                            "Abril", "Mayo", "Junio", 
                            "Julio", "Agosto", "Septiembre", 
                            "Octubre", "Noviembre", "Diciembre"]

    return `${spanishDays[date.getDay()]}, ${date.getDate() + 1} de ${spanishMonths[date.getMonth()]} del ${date.getFullYear()}`
}

let third = new Date("2022-12-18")