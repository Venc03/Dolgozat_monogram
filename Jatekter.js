import Elem from "./Elem.js";


class Jatekter {
    #lista = [];
    constructor() {
        this.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        const szuloElem = $("article");
        for (let index = 0; index < 9; index++) {
            const elem = new Elem(index, szuloElem);
        }
    }
}

export default Jatekter;