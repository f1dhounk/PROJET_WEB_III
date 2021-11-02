class Ecran{
    constructor(id){
        this.element = document.getElementById(id);
        this.element.style.opacity = 0;
        this.opac = 0;
    }

    tick() {
        this.opac += 0.009;

        if (this.opac <= 0.9){
            this.element.style.opacity = this.opac;
        }
        
    }
}