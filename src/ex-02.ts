const students: string[] = ["พศวีร์", "มาร์คคริส", "ขุนพล", "ชุติวัฒน์",  

"คิมจินวุค", "ชญานนท์", "ณัฐกิตติ์", "ภูธัชชัย", 

"เดชาวัต", "อชิรกรณ์", "จั๋งธีร์", "ภีมวสุ" 

]; 

 

function listStudents(names: string[]): void { 

    for(const n of names) { 

        console.log("Student:", n); 

    } 

} 

 

listStudents(students); 

console.log("Total Students:", students.length); 


// Run 

// เปลี่ยนคำสั่ง for เป็น forEach 

// เปลี่ยนคำสั่ง for เป็น map 