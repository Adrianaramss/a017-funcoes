// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__

//=========parte============A
function digaseunome(nome){
    console.log (`olá,${nome}`)
}
digaseunome("adriana")

//=========parte============B
function tabuadadeseis (array) {
    let novoarray = []
    for (let i=1; i<=10; i++){
        console.log (`${6*i}`);
    }
}
tabuadadeseis()

//=========parte============C

const digaseunome1 = (nome) => {
    console.log (`olá, ${nome}`)
}
digaseunome1(`adriana`)

const tabuadadeseisarrow = () => {
    let novoarray = []
    for (let i=1; i<=10; i++){
        console.log (` ${6*i}`);
    }
}
tabuadadeseis()





