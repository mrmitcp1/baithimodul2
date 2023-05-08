import {Class} from "./class";
import {ListStudent} from "./listStudent";


export const readlineSync = require("readline-sync")
export  const studentManager = new ListStudent();
const mainMenu: string[] = [
    'Hien thi danh sach sinh vien',
    'Tim kiem sinh vien theo ten',
    'Nhap thong tin sinh vien moi',
    'Chinh sua thong tin nhan vien',
    'Xoa nhan vien khoi ung dung'
];

export function inputData(data: string) {
    return readlineSync.question(data);
}

export function pressEnterToBack() {
    return readlineSync.question('Nhan phim "Enter" de quay lai!');
}
const classOfRoom: string[] = [
    '12A1',
    '12A2',
    '12A3',
    '12A4',
    '12A5'
]
function init() {
    let loop: boolean = true;
    while (loop) {
        let index = readlineSync.keyInSelect(mainMenu,'Chon chuc nang:', {cancel: 'EXIT'})
        switch (index) {
            case 0:

                console.table(studentManager.showListStudents())
                pressEnterToBack();
                break;
            case 1: {
                let name = readlineSync.question('input name ')
                console.table(studentManager.findByName(name))
                pressEnterToBack();
                break
            }
            case 2: {

                let id = +readlineSync.question('input id ')
                let name = readlineSync.question('input name ')
                let classRoom = readlineSync.keyInSelect(classOfRoom,'input class ')
                let address = readlineSync.question('input address ')
                let point = +readlineSync.question('input point ')
                let hobby = readlineSync.question('input hobby ')
                 studentManager.addStudent(id,name,classRoom,address,point,hobby)
                console.table(studentManager.listStudent)
                pressEnterToBack();
                break;
            }
            case 3: {
                let id = +readlineSync.question('input id ')
                let name = readlineSync.question('input name ')
                let classRoom = readlineSync.keyInSelect(classOfRoom,'input class ')
                let address = readlineSync.question('input address ')
                let point = +readlineSync.question('input point ')
                let hobby = readlineSync.question('input hobby ')
                studentManager.updateStudent(id,name,classRoom,address,point,hobby)
                console.table(studentManager.listStudent)
                pressEnterToBack();
                break;
            }
            case 4: {
                let id = +readlineSync.question('input id')

              studentManager.deleteStudent(id)
                console.table(studentManager.listStudent)
                pressEnterToBack();
                break;
            }
            default:
                if (readlineSync.keyInYN('Ban co chac chan muon thoat?')) {
                    loop = false;
                }
                break;
        }
    }
}

init();
