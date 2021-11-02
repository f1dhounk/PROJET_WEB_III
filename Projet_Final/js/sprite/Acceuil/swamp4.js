class swamp4 {
    constructor(id){
        this.element = document.getElementById(id)
        this.position = 0;
    }

    tick () {
        this.position -= 3.5;
        this.element.style.transform = "translateX("+ this.position + "px)"        

        if(this.position <= -1536) {
            this.position = 1536
        }
    }
}