/**
 * recebe tamanho x e y em px da imagem e retorna valores proporcionais para render
 */
class tamanhoProporcional{

    static max1000(x, y) {
        this.x = x;
        this.y = y;
        if(this.x !== 0 && this.y !== 0){

            if (this.x > this.y) {
                let r = this.x / this.y; 
                return 600 / r;
            }
            if (this.x < this.y) {
                let r = this.y / this.x;
                return 600 / r;
            }
        }else{
            console.log('x e y devem ser diferentes de zero')
        }
        
    }
    static canvas(x, y){

        this.x = x;
        this.y = y;

        let r = this.x / this.y;
        return 600 * r;
    }
}

export default tamanhoProporcional;