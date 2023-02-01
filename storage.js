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
