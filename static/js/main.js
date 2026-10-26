// Advanced Library Management System - Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  // Live Client-side Search and Filter for Book Cards & Table Rows
  const searchInput = document.getElementById('searchBooks');
  const categoryFilter = document.getElementById('filterCategory');
  const bookCards = document.querySelectorAll('.book-card');
  const tableRows = document.querySelectorAll('.data-table tbody tr');

  function filterBooks() {
    const query = (searchInput ? searchInput.value.toLowerCase().trim() : '');
    const selectedCategory = (categoryFilter ? categoryFilter.value.toLowerCase() : 'all');

    // Filter Cards (Public Page)
    bookCards.forEach(card => {
      const title = card.querySelector('.book-title')?.textContent.toLowerCase() || '';
      const author = card.querySelector('.book-author')?.textContent.toLowerCase() || '';
      const category = card.getAttribute('data-category')?.toLowerCase() || '';

      const matchesQuery = title.includes(query) || author.includes(query);
      const matchesCategory = (selectedCategory === 'all' || category === selectedCategory);

      card.style.display = (matchesQuery && matchesCategory) ? 'flex' : 'none';
    });

    // Filter Table Rows (Dashboard Page)
    tableRows.forEach(row => {
      const title = row.querySelector('.col-title')?.textContent.toLowerCase() || '';
      const author = row.querySelector('.col-author')?.textContent.toLowerCase() || '';
      const category = row.getAttribute('data-category')?.toLowerCase() || '';

      const matchesQuery = title.includes(query) || author.includes(query);
      const matchesCategory = (selectedCategory === 'all' || category === selectedCategory);

      row.style.display = (matchesQuery && matchesCategory) ? '' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterBooks);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterBooks);
  }

  // Modal open/close handlers
  const openModalBtn = document.getElementById('openAddBookModal');
  const closeModalBtn = document.getElementById('closeAddBookModal');
  const modalBackdrop = document.getElementById('addBookModal');

  if (openModalBtn && modalBackdrop) {
    openModalBtn.addEventListener('click', () => {
      modalBackdrop.classList.add('active');
    });
  }

  if (closeModalBtn && modalBackdrop) {
    closeModalBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('active');
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('active');
      }
    });
  }

  // Auto-dismiss Flash Alerts
  const flashAlerts = document.querySelectorAll('.flash-message');
  flashAlerts.forEach(alert => {
    setTimeout(() => {
      alert.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      alert.style.opacity = '0';
      alert.style.transform = 'translateY(-10px)';
      setTimeout(() => alert.remove(), 400);
    }, 4500);
  });
});

// Demo login auto-filler
function fillDemoCredentials() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  if (usernameInput && passwordInput) {
    usernameInput.value = 'admin';
    passwordInput.value = 'admin123';
    usernameInput.focus();
  }
}
