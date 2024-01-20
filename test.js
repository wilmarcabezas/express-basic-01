const data = [
    { id: 1, name: "Claudia" },
    { id: 2, name: "Andrea" },
    { id: 3, name: "Antonio" },
    { id: 4, name: "Baltazar" },
  ];

  // Crear una funcion que reciba un id y muestre el id de data
  function filterStudent(idRequerido){
    return data.filter((student)=>student.id===idRequerido);
  }

  console.log(filterStudent(2));