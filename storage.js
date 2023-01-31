const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;

  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  //
  if (id && value) {
    localStorage.setItem(id, value);
  } else {
    alert("Please put valide input");
  }

  idInput.value = "";
  valueInput.value = "";
};
// // 42 number module er 7 number ta ses 8 number ta start
