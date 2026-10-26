# LibSphere - Advanced Library Management System

A modern, responsive, and secure Library Management web application built with **Flask**, **SQLite**, and **modern CSS/HTML5**.

---

## 🌟 Key Features

- **Public Book Catalog**: Browse library books with live search and category filtering.
- **Inventory Metrics**: Real-time counter for total titles, books available, issued books, and categories.
- **Staff / Admin Portal**: Secure session-based authentication (`admin` / `admin123`).
- **Book Issue & Return**: Issue books to registered members and return books with a single click.
- **Add / Remove Titles**: Interactive modal dialog for cataloging new books with ISBN and category.
- **Modern Glassmorphic UI**: Tailored dark-mode aesthetics, responsive card and table views, and subtle micro-interactions.

---

## 🚀 Quick Start (Running on Localhost)

### 1. Activate the Virtual Environment
Open PowerShell or your terminal in this directory:
```powershell
.\venv\Scripts\Activate.ps1
```

### 2. Install Dependencies (if not already installed)
```bash
pip install -r requirements.txt
```

### 3. Launch the Server
```bash
python app.py
```

### 4. Open in Browser
Open your browser and navigate to:
👉 **[http://localhost:5000](http://localhost:5000)** or **[http://127.0.0.1:5000](http://127.0.0.1:5000)**

---

## 🔐 Login Credentials

- **Librarian (Admin)**: `jay23` / `jay2312`
- **Teacher**: `teacher` / `teacher123`
- **Student**: `student` / `student`

---

## 📂 Project Structure

```
c:\advanced_library\
├── app.py                  # Main Flask application & SQLite database logic
├── requirements.txt        # Python package dependencies
├── library.db              # SQLite database (auto-created on first run)
├── templates/
│   ├── base.html           # Master layout with responsive navbar & alerts
│   ├── index.html          # Public catalog & search interface
│   ├── login.html          # Admin authentication screen
│   └── dashboard.html      # Management dashboard & book inventory table
├── static/
│   ├── css/
│   │   └── style.css       # Custom design system with glassmorphic styles
│   └── js/
│       └── main.js         # Interactive filtering & modal scripts
└── README.md               # Documentation & setup guide
```