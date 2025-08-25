
// ประกาศ Employee เป็น Interface 

interface Employee {
    // ประกาศตัวแปรใน Employee มีข้อมูล: id, name, position, salary 
    id: number 
    name: string
    position: string
    salary: number
}


// สร้างอาเรย์ employees: Employee[ ] กำหนดข้อมูลของพนักงานอย่างน้อย 3 คน  
const employees: Employee[] = [
  { id: 1, name: "Alice", position: "Developer", salary: 35000 },
  { id: 2, name: "Bob", position: "Designer", salary: 30000 },
  { id: 3, name: "Charlie", position: "Manager", salary: 45000 },
];

// เขียนฟังก์ชัน findEmployeeByName 
function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(emp => emp.name === name);
}


// แสดงผลข้อมูลพนักงานทั้งหมด 
console.log("ข้อมูลพนักงานทั้งหมด:");
employees.forEach(emp => {
  console.log(emp);
});


// แสดงผลการค้นหาพนักงาน 
console.log("\nค้นหาพนักงานชื่อ Bob:");
console.log(findEmployeeByName("Bob"));