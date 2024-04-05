document.addEventListener('DOMContentLoaded', function () {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];

            users.forEach(user => {
                const row = document.createElement('tr');
                const firstNameCell = document.createElement('td');
                firstNameCell.textContent = user.name.first;
                const cityCell = document.createElement('td');
                cityCell.textContent = user.location.city;

                row.appendChild(firstNameCell);
                row.appendChild(cityCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
});
