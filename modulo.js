import { contador, alerta } from "./contador.js";
import { promesa } from "./promesa.js";

const async=document.getElementById("async")
contador()


await promesa(true)
.then((response)=>{
    async.textContent=response
    console.log(response)
})
.catch((e)=>{
    async.textContent=e
    console.log(e)
})
;

