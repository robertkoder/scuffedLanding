function toggleMenu() {
    let navList = document.getElementById('nav-list');
    if (navList.style.display === 'flex') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    
    const toggleButton = document.getElementById('darkModeToggle');
    
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Dark Mode';
        localStorage.setItem('themeMode', 'light');
    } else {
        toggleButton.textContent = 'Flashbang';
        localStorage.setItem('themeMode', 'dark');
    }
}

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', (event) => {
    const savedMode = localStorage.getItem('themeMode');
    const toggleButton = document.getElementById('darkModeToggle');
    
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
        toggleButton.textContent = 'Dark Mode';
    } else {
        toggleButton.textContent = 'Flashbang';
    }
});
