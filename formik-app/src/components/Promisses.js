//promesas para hacer proceso asincronos hay unas cosas que se van ejercutar y hay otras que no sabemos.

/* 
definir la promesa = (que se resuelve exitosamente la promesa, y la otra se rechaza)

 then (entonces hago esto) .catch (sino hago esto), despues de que se resolvio, puedo ejecutar algo más 
 */
//let isMatch = true;
let isMatch = true;
let isADoublematch = true;
const thatCuteGuyCallMe = new Promise((resolve, reject) => {
    if(isMatch){
        resolve('Jump Girl Jump!')
    } else {
        let reason = new Error('Never mind there another fish in the sea');
        reject(reason);
    }
})

//otra promesa

const thatCuteGuyTextMe = new Promise((resolve, reject) => {
    if(isADoublematch){
        resolve({
            date: '18/04/2021',
            textMesg: 'Holis, como tai?'
        })
    } else {
        reject(new Error('Pucha, no me escribio na :('))
    }
})

//llamar a la promesa
/* const lookThePhone = () =>{
    //    thatCuteGuyCallMe.then(data => console.log('Respuesta => ', data))
    //encadenar una tras otra
    // thatCuteGuyCallMe.then(response => console.log('Respuesta => ', response))
    //     .catch(err => console.log(err))
    //Primero va ejecutar la primera luego la segunda
    //thatCuteGuyCallMe.then(response1 => console.log('Respuesta', response1))
    thatCuteGuyCallMe.then(thatCuteGuyTextMe => {
        //si existe este dato
        if(thatCuteGuyTextMe){
            console.log('Respuesta', thatCuteGuyTextMe)
            .then(response => console.log('Respuesta', response))
        }
    })
        .catch(err => console.log(err));
    //Mejor es esta opción
    //Promise.all([thatCuteGuyTextMe, thatCuteGuyCallMe])
    //.then(values => console.log('Respuesta => ', values))
    //.catch(err => console.log('Err => ',err));
} */
//ejecuta la funcion que lla la función
//lookThePhone()
//async await :o
//axios lo ocupa desde el front, promesas sirve para el backend
//mongoose usa promises
//Promesa dentro de otra promesa

//Le indicio un proceso asyncrono
const lookThePhone = async () => {
    try{
        //await promesa
        //llamo la funcion sin el () en el await; es una variable que tiene una promsise no es una funcion (en la linea 11)
        let data1 = await thatCuteGuyCallMe;
        let data2 = await thatCuteGuyTextMe;
        console.log("data1", data1);
        console.log("data2", data2);
    }
    catch(err){
        console.log('Err',err);
    }
}
lookThePhone()

//Los formularios funcionan de manera asyncrona al igual que sus tests