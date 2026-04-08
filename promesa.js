
export function promesa(pepito) {
    return new Promise(
        (resolve, reject) => {
            if (pepito == true) {
                resolve("todo bien")
            } else {
                reject("todo mal")
            }



        })

}
