class TeamMember {
  //   name;
  //   designation = "Support Web Dev";
  //   address = "BD";
  constructor(name, designation, address) {
    this.name = name;
    this.designation = designation;
    this.address = address;
  }
}
class Support extends TeamMember {
  startSession(name) {
    console.log(`${(this.name = name)} start a support seassion`);
  }
}

const sazzad = new Support("Sazzad", "programmer", "Bd");
console.log(sazzad);
const yeasin1 = new Support("Yeasin", "Student", "BD");
console.log(yeasin1);

sazzad.startSession("Sazzad");
yeasin1.startSession("Yeasin");

// class StudentCare {
//   buildRoutine(student) {
//     console.log(this.name, "Build a routine for", student);
//   }
// }

// const shayla = new StudentCare("Shayla Akthar", "House Wife", "Bd");
// console.log(shayla);
// shayla.buildRoutine("yeasin");

// const jannat = new StudentCare("Jannat", "Nothing", "Bd");
// console.log(jannat);

// shayla.buildRoutine(jannat.name);
