import Kartya from "./kartya.js";

class Jatekter {
    #kepekLista;
    #kivalaszottKepekLista;

    constructor (kepekLista) {
        this.#kepekLista = kepekLista;
        let szuloElem = $("main");
        new Kartya(this.#kepekLista, szuloElem);

    }
}

export default Jatekter;