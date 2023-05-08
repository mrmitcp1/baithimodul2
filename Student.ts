import {Class} from "./class";

export class Student {
    id:number
    name:string;
    classRoom : Class;
    address:string;
    point:number;
    hobby :string;


    constructor(id: number, name: string, classRoom: Class, address: string, point: number,hobby:string) {
        this.id = id;
        this.name = name;
        this.classRoom = classRoom;
        this.address = address;
        this.point = point;
        this.hobby=hobby
    }
}