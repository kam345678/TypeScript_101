// // ฟังก์ชันกรองอาเรย์ของ object โดยเปรียบเทียบค่าของคีย์ที่ระบุ 
// // คืนค่า: อาเรย์ของ object ที่มีค่าของ key ตรงกับ value 

// // ใช้ Generics เพื่อให้รองรับ object ที่มีคีย์และค่าหลายแบบ 

// function filterByKeyEquals<T, K extends keyof T>(items: T[], key: K, value: T[K]): T[] { 

//   // T: ชนิดของ object ในอาเรย์ 

//   // K: ชนิดของคีย์ที่ใช้กรอง (ต้องเป็นหนึ่งใน keyof T) เช่น "role", "category" 

//   // K extends keyof T: K ต้องเป็นหนึ่งในคีย์ของ T 

//   // items: อาเรย์ของ object ที่ต้องการกรอง 

//   // key: ชื่อคีย์ที่ต้องการกรอง (ต้องเป็นหนึ่งใน keyof T) 

//   // value: ค่าที่จะใช้เปรียบเทียบ (ชนิดตรงกับค่าของ key) 

   

//   return items.filter(item => item[key] === value); 

// } 

// // ------------------ ตัวอย่างการใช้งาน ------------------ 

// // ชุดข้อมูลพนักงาน 

// type Employee = { id: number; name: string; role: "dev" | "designer" | "manager" }; 

// const employees: Employee[] = [ 

//   { id: 1, name: "Alice", role: "dev" }, 

//   { id: 2, name: "Bob", role: "designer" }, 

//   { id: 3, name: "Charlie", role: "dev" }, 

// ]; 

// // ใช้ฟังก์ชันกรองพนักงาน role = "dev" 

// const devs = filterByKeyEquals(employees, "role", "dev"); 

// console.log("Employees (role=dev):", devs); 

 

// // ชุดข้อมูลสินค้า 

// type Product = { id: number; title: string; category: "laptop" | "phone" }; 

// const products: Product[] = [ 

//   { id: 101, title: "UltraBook", category: "laptop" }, 

//   { id: 102, title: "Pocket", category: "phone" }, 

// ]; 

// // ใช้ฟังก์ชันกรองสินค้า category = "laptop" 

// const laptops = filterByKeyEquals(products, "category", "laptop"); 

// console.log("Products (category=laptop):", laptops); 


// // Run 