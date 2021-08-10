/*
Pilhas coleção ordenada de itens que segue o princípio LIFO(Last In First Out), ou seja, o último a entrar é o primeiro a sair. Temos vários exemplos da vida real que podem nos ajudar a compreender este princípio, um deles é a pilha de livros
*/

function Stack(){
    var itens = []

    this.push = function(element){
        //adiciona um novo item a pilha
        itens.push(element)
    }

    this.pop = function(){
        //remove o tinem do topo da pilha
        return itens.pop()
    }

    this.peek = function(){
        //devolve o elemento que está no top
        return itens[itens.length - 1]
    }

    this.isEmpty = function(){
        //informa se a pilha esta vazia ou não
        return itens.length === 0
    }

    this.clear = function(){
        //limpar a pilha
        itens = []
    }

    this.size = function(){
        //informar o tamanho da pilha 
        return itens.length
    }

    this.print = function(){
        //imprime a pilha no console 
        console.log(itens.toString())
    }
}

var pilha = new Stack()

pilha.push(2)
pilha.push(4)
pilha.push(6)
pilha.push(8)
pilha.push(10)

//console.log(pilha.peek())
//console.log(pilha.isEmpty())
console.log(pilha.size())
//pilha.clear()
pilha.print()