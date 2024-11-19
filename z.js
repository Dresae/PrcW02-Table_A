function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

function addRegistry() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !phone) {
        alert('Please fill in all fields');
        return;
    }

    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
    `;

    tableBody.appendChild(newRow);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    // Add animation class
    newRow.style.opacity = '0';
    newRow.style.transform = 'translateY(20px)';
    setTimeout(() => {
        newRow.style.transition = 'all 0.3s ease';
        newRow.style.opacity = '1';
        newRow.style.transform = 'translateY(0)';
    }, 50);
}

function clearTable() {
    const tableBody = document.getElementById('tableBody');
    const rows = tableBody.getElementsByTagName('tr');
    
    // Add fade-out animation to each row
    Array.from(rows).forEach((row, index) => {
        setTimeout(() => {
            row.style.transition = 'all 0.3s ease';
            row.style.opacity = '0';
            row.style.transform = 'translateY(20px)';
        }, index * 100);
    });

    // Remove rows after animation
    setTimeout(() => {
        tableBody.innerHTML = '';
    }, rows.length * 100 + 300);
}