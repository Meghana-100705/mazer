fetch("src/data/data.json")
  .then(response => response.json())
  .then(data => {
    fetch("/src/data/data.json")
  .then(res => res.json())
  .then(data => {

    const table = document.getElementById("userTable");

    data.users.forEach(user => {
      table.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.role}</td>
          <td>
            <span class="badge bg-${user.status === "Active" ? "success" : "danger"}">
              ${user.status}
            </span>
          </td>
        </tr>
      `;
    });

  });

    const container = document.getElementById("stats");

    data.stats.forEach(item => {
      container.innerHTML += `
        <div class="col-md-4">
          <div class="card">
            <div class="card-body text-center">
              <h6>${item.title}</h6>
              <h3>${item.value}</h3>
            </div>
          </div>
        </div>
      `;
    });
  });
