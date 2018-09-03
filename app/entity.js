class Entity{
    constructor(name, height) {
        this.name= name;
        this.height=height;
    }
     greet(){
         console.log(`hello i am ${this.name} from middle earth`);
     }
}

export default Entity;