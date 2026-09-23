class University{
    students: Student[];
    teachers: Teacher[];
    constructor(students: Student[], teachers: Teacher[]){
        this.students = students;
        this.teachers = teachers;
    }
    showUniversityInfo (): void {
        console.log("University Infprmation:");
        console.log("Teacher: ");
        this.teachers.forEach(t => {
            console.log(t.getTeacherInfo());
        });
        console.log("Students:");
        this.students.forEach(s => {
            console.log(s.getStudentInfo());
        });
    }
}

class Student{
    constructor(private id:string, private name:string, private faculty:string ) {}
    getStudentInfo():string{
        return `นักศึกษารหัส ${this.id} ชื่อ ${this.name} คณะ ${this.faculty}`;
    }
}

class Teacher{
    constructor(private name:string, private major:string){}
    getTeacherInfo():string{
        return `ชื่ออาจารย์ ${this.name} วิชา ${this.major}`;
    }
    teach(student: Student):void{
        console.log(` ${this.getTeacherInfo()} สอน ${student.getStudentInfo()} `);
    }
}
const student1 = new Student("684245001","อำนาจ","Science")
const student2 = new Student("684245002","วันเพ็ญ","Science")
const student3 = new Student("684245003","เด่นชัย","Education")
const teacher1 = new Teacher("สมประสงค์","คอมพิวเตอร์")
const teacher2 = new Teacher("สุรวิศ","คอมพิวเตอร์")
console.log(student1.getStudentInfo());
console.log(student2.getStudentInfo());
const npru = new University([student1,student2,student3],[teacher1,teacher2]);
npru.showUniversityInfo();
console.log("-------------------------------");
teacher1.teach(student1);
teacher1.teach(student2);
teacher2.teach(student3);