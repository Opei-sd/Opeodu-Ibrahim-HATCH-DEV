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