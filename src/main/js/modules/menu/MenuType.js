export class MenuType{

    constructor() {
    }

    setSubSign(useSubSign){
        this.subsign = useSubSign;
    }

    setHeight(height){
        this.height = height;
    }

    setWidth(width){
        this.width = width;
    }

    create(){
        let settings = {};
        for (const [key,value] of Object.entries(this)){
            settings[key] = value;
        }
        return settings;
    }

}