class Cheerleader {
    constructor(nome, time, posicao) {
        this.id = Cheerleader.incrementId();
        this.nome = nome;
        this.time = time;
        this.posicao = posicao;
    }

    static incrementId() {
        Cheerleader.currentId = (Cheerleader.currentId || 0) + 1;
        return Cheerleader.currentId;
    }
}

const cheerleaders = [];

module.exports = { Cheerleader, cheerleaders };
