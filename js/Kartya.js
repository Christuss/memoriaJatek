class Kartya {
    #adat;
    #divElem;
    #imgElem;

    constructor (adat, szuloElem) {
        this.#adat = adat;
        let txt = "";
        txt += '<div><img src="kepek/hatter.jpg"></div>';
        szuloElem.append(txt);
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img:last-child");
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