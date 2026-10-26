import os
import sys

# Ensure UTF-8 output on Windows terminals
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

from flask import Flask, render_template, send_from_directory

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

# Catch-all to support direct file access or client-side routes
@app.route('/<path:path>')
def static_proxy(path):
    if os.path.exists(os.path.join(app.root_path, path)):
        return send_from_directory(app.root_path, path)
    return render_template('index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print("\n=======================================================")
    print(" Advanced Library Management System")
    print(f" Running at: http://localhost:{port} or http://127.0.0.1:{port}")
    print(" Login Credentials:")
    print("   Librarian (Admin): jay23 / jay2312")
    print("   Teacher:           teacher / teacher123")
    print("   Student:           student / student")
    print("=======================================================\n")
    app.run(host='0.0.0.0', port=port, debug=True)