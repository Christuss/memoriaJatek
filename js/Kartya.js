class Kartya {
    #adat;
    #divElem;
    #imgElem;

    constructor (adat, szuloElem) {
        this.#adat = adat;
        let txt = "";
        for (let index = 0; index < this.#adat.length; index++) {
            txt += '<div id= "' + index + '"><img src="kepek/hatter.jpg"" alt="' + index + '"></div>';
        }
        szuloElem.append(txt);
        this.#divElem = szuloElem.chidren("div:last-child");
        this.#imgElem = this.#divElem.chidren("img:last-child");
    }

    getAdat(){
        return this.#adat;
    }

    trigger(){
        const ev = new CustomEvent("trigger", {detail: this.#adat});
        dispatchEvent(ev);
    }
}

export default Kartya;