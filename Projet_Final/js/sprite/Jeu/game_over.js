class game_over{
    constructor(id){
        this.element = document.getElementById(id);
        this.element.style.opacity = 0;
        this.opac = 1;
    }

    tick() {        
        if ( gameover == true ) {
            if (this.opac <= 1){
                this.element.style.opacity = this.opac;
            }

            fin = true;
        }    
    }
}