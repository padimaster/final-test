const handleSubmit = async () => {
  const form = document.getElementById("form");
  const formData = new FormData(form);
  const studentData = {};

  for (const [key, value] of formData) {
    studentData[key] = value;
  }

  try {
    const response = await fetch("http://localhost:8080/dev/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status !== 200) {
        throw new Error(response.status);
      }

    const data = await response.json();
    
  } catch (error) {
    alert("Se ha producido un error", error.message);
  }
};

const updateStudents = async () => {
  try {
    const response = await fetch("http://localhost:8080/dev/students");

    const data = await response.json();

    if (response.status !== 200) {
        throw new Error(response.status);
      }

    const tableContent = document.getElementById("table-content");

    for (student of data) {
      const row = document.createElement("tr");

      const id = document.createElement("td");
      id.setAttribute("class", "p-4 border border-slate-600");
      id.appendChild(document.createTextNode(student.id));

      const name = document.createElement("td");
      name.setAttribute("class", "p-4 border border-slate-600");
      name.appendChild(document.createTextNode(student.name));

      const address = document.createElement("td");
      address.setAttribute("class", "p-4 border border-slate-600");
      address.appendChild(document.createTextNode(student.address));

      const phone = document.createElement("td");
      phone.setAttribute("class", "p-4 border border-slate-600");
      phone.appendChild(document.createTextNode(student.phone));

      row.appendChild(id);
      row.appendChild(name);
      row.appendChild(address);
      row.appendChild(phone);

      tableContent.appendChild(row);
    }
  } catch (error) {
    alert("Se ha producido un error", error.message);
  }
};
