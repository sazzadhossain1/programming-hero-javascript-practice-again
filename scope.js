function Patrichai(age, earning) {
  console.log(age);
  console.log(earning);
  var decision = canMarry(15000);
  console.log(decision);
  var trueAge = age + 7;
  function canMarry(expense) {
    const remaining = earning - expense;
    if (remaining > 1000) {
      return true;
    } else {
      return false;
    }
  }
}
