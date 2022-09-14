function doisnumeros(n1,n2) {
    const somadosnumeros1 = n1 + n2
    console.log(somadosnumeros1)   
}
doisnumeros(14,33)
///////////////////////////////////////////////////////

function verificacao(n1,n2) {
 let teste = n1 >= n2
 console.log(teste);
}
 verificacao(2,5)
    
///////////////////////////////////////////////
function recebe1numero (n1) {
    if (n1%2 ===0) {
        console.log('o numero e par');
    }else{
        console.log('o numero e impar');
    }

}

recebe1numero(55)
///////////////////////////////////////////
function  nome(string){
    console.log (`${string.length} - ${string.toUpperCase()}`)

}
nome('brasil')
