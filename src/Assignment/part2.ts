
// สร้างคลาส Student, Course 
class Course {
    // Course มีข้อมูล(property): ชื่อวิชา, เกรด(number) 
  subject: string;
  grade: number;

  //   สร้าง Constructor ของทั้ง 2 Class 
  // Constructor Course
  constructor(subject: string, grade: number) {
    this.subject = subject;
    this.grade = grade;
  }
}

// Student มีข้อมูล(property): studentID, name, Course[ ]   (1 คนมีหลายรายวิชา) 
class Student {
  studentID: number;
  name: string;
  courses: Course[];

// สร้าง Constructor ของทั้ง 2 Class 
// Constructor Student
  constructor(studentID: number, name: string) {
    this.studentID = studentID;
    this.name = name;
    this.courses = [];
  }

/*  ใน Student มี method การทำงาน 
    --> addCourse: เพิ่มรายวิชาใหม่เข้าไปใน Array 
    --> getAverage: คำนวณเกรดเฉลี่ยรวม 
*/

  addCourse(course: Course): void {     // addCourse: เพิ่มรายวิชาใหม่เข้าไปใน Array 
    this.courses.push(course);
  }

  getAverage(): number {
    const sum = this.courses.reduce((acc, c) => acc + c.grade, 0); // getAverage: คำนวณเกรดเฉลี่ยรวม 
    return sum / this.courses.length;
  }
}

/*การทำงานหลัก  
    > ให้กำหนดข้อมูลนักศึกษา 3 คน คนละ 4 รายวิชา 
    > แสดงผลข้อมูลของนักศึกษาทุกคน พร้อมทั้งเกรดเฉลี่ย 
    > เพิ่มรายวิชาและเกรด คนละ 1 รายวิชา 
    > แสดงผลข้อมูลของนักศึกษาทุกคน พร้อมทั้งเกรดเฉลี่ย */


// นักศึกษา 3 คน
const s1 = new Student(1, "Somchai");
const s2 = new Student(2, "Suda");
const s3 = new Student(3, "Anan");

// กำหนดข้อมูลคนละ 4 วิชา
[s1, s2, s3].forEach(student => {
  student.addCourse(new Course("Math", 3.5));
  student.addCourse(new Course("English", 3.0));
  student.addCourse(new Course("Science", 4.0));
  student.addCourse(new Course("History", 2.5));
});

// แสดงผลข้อมูลของนักศึกษาทุกคน พร้อมทั้งเกรดเฉลี่ย 
console.log("ข้อมูลนักศึกษาและเกรดเฉลี่ย:");
[s1, s2, s3].forEach(s => {
  console.log(`ID: ${s.studentID}, Name: ${s.name}, GPA: ${s.getAverage()}`);
});

// เพิ่มรายวิชาและเกรดใหม่คนละ 1 วิชา
s1.addCourse(new Course("PE", 4.0));
s2.addCourse(new Course("PE", 3.0));
s3.addCourse(new Course("PE", 2.0));

// แสดงผลข้อมูลของนักศึกษาทุกคน พร้อมทั้งเกรดเฉลี่ย หลังเพิ่ม วิชาและเกรด
console.log("\nข้อมูลนักศึกษาหลังเพิ่มวิชาและเกรดใหม่:");
[s1, s2, s3].forEach(s => {
  console.log(`ID: ${s.studentID}, Name: ${s.name}, GPA: ${s.getAverage()}`);
});

