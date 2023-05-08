import {Student} from "./Student";
import {Class} from "./class";


export class ListStudent {
    listStudent: Student[] = []

    showListStudents(){
        let fiveStudents =[]
        if (this.listStudent.length===0){
            console.log('khong co du lieu')
        }else {
            for (let i = 0; i < this.listStudent.length; i++) {
                fiveStudents.push(this.listStudent[i])
               if (i >=4){
                  break
               }
            }
            return fiveStudents
        }
    }
    findByName(name:string) {

        let product = this.listStudent.find(item => item.name === name)
        return product ? product : 'khong co du lieu phu hop'
    }
    findById(id:number){

        return this.listStudent.find(item=>item.id===id)
    }

    addStudent(
        id:number,
        name:string,
        classRoom : Class,
        address:string,
        point:number,
        hobby:string

) {
        if (name.length===0||address.length===0||point<=0||hobby.length===0||address.length===0) {
            console.log('du lieu dau vao khong hop le')
            return
        }
        const student : Student = {
            id,
            name,
            classRoom,
            address,
            point,
            hobby

        };

        this.listStudent.push(student);
        // console.log('them sinh vien thanh cong:', student);
    }
    updateStudent(         id:number,
                           name:string,
                           classRoom : Class,
                           address:string,
                           point:number,
                           hobby:string
    ){
        if (!id){
            console.log('khong ton tai sinh vien')
            return
        }else{
            let updateStudent = this.findById(id)
            updateStudent.id=id;
            updateStudent.name=name;
            updateStudent.classRoom=classRoom;
            updateStudent.address=address;
            updateStudent.point=point;
            updateStudent.hobby=hobby
        }

    }
    deleteStudent(id:number){
        if (!this.findById(id)){
            console.log('khong ton tai sinh vien can  xoa')
            return
        }else {
            this.listStudent=this.listStudent.filter(item=>item.id!==id)
            console.log('xoa thanh cong')
        }
    }


}
