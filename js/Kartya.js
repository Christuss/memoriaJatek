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
        this.#divElem.on("click", () => {
            this.setKep(this.#adat);
            this.trigger();
        });
    }

    getAdat(){
        return this.#adat;
    }

    setKep(kep){
        this.#imgElem.attr("src",kep);
    }

    trigger(){
        const ev = new CustomEvent("fordit", {detail: this.#adat});
        window.dispatchEvent(ev);
    }
}

export default Kartya;