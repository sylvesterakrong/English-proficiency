document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('year');
    const startYear = 1900;
    const currentYear = new Date().getFullYear(); // Get the current year

    for (let year = startYear; year <= currentYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        selectElement.appendChild(option);
    }
});