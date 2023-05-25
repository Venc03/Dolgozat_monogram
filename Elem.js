class Elem {
    #index;
    constructor( index,szuloElem) {
      this.#index = index;
      szuloElem.append("<div class='elem'><p></p></div>");
      this.divElem = $("article div:last-child");
  
      this.pElem = $("article div:last-child p");
  
    }
    getIndex() {
      return this.#index;
    }
    setElem(adat) {
      this.pElem.html(adat);
    }
  }
  
  export default Elem;