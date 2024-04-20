// function getStudentsNames(){
//   return["ade", "james", "john", "jane", "mary"]

// }

// function getTotalNumbersOfStudents(){
//   const studentsNames = getStudentsNames()
//   return studentsNames.length
// }

class HatchDevClass{
  private pupils: string[]

  constructor(student: string[]){
    this.pupils = student;
  }

  getStudentsNames(){
    return this.pupils;
  }

  getTotalNumbersOfStudents(){
    return this.pupils.length;
  }
}

const excelSheet =["ade", "james", "john", "jane", "mary"]
const hatchDevClass = new HatchDevClass(excelSheet)

console.log(hatchDevClass.getStudentsNames())


 
// Assignment
// how does the browser work
// how does google search work
// read up on access modifiers in oop
// why is bracket notetion exposing private propereties unlike dot notation
// static method static properties instance method instance properties

