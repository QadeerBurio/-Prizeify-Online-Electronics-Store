Prizeify

💻 Prizeify — A modern React-based e‑commerce platform for electronics.




Prizeify is a polished, responsive e‑commerce web app built with React, Bootstrap, and Material UI. It uses localStorage for lightweight persistence and includes common e‑commerce features: product listings, product detail pages, shopping cart, checkout, user authentication, and an admin dashboard for managing products and orders.

🚀 Live Preview

If you host this project, place your URL here.

🧩 Tech Stack

Frontend: React (Create React App or Vite)

UI: Bootstrap 5 + Material UI components

State / Storage: React state + localStorage for persistence

Networking: Axios (if using APIs)

Auth: Simple email/password stored in localStorage (for demo)

✨ Key Features

Responsive product listing (grid & list view)

Product details with images, description, specs, and reviews

Add to cart, update quantity, remove items

Cart summary, promo code support (demo), and checkout flow

User signup/login (demo auth using localStorage)

Admin dashboard to add/edit/delete products and view orders

Search, filtering, and category navigation

Persistent cart and user session using localStorage

Clean, modern UI with Bootstrap and Material UI accents


⚙️ Admin & Demo Accounts

For a demo, you can create accounts using the Signup UI. If you'd like seed accounts, create a seed.json or add them programmatically in localStorage on first load.

Example seed script (run once in console):

localStorage.setItem('users', JSON.stringify([
  { id: 1, name: 'Admin', email: 'admin@prizeify.com', role: 'admin', password: 'admin123' },
  { id: 2, name: 'Customer', email: 'customer@prizeify.com', role: 'user', password: 'cust123' }
]));
🧩 Implementation Notes

localStorage keys used: users, products, cart, orders, session

Keep authentication logic on client side only for demo purposes. For production, replace with a secure backend (JWTs, hashed passwords, HTTPS).

Admin routes should be guarded by checking the session role and redirecting unauthenticated users to login.



✅ Good-to-have enhancements

Real backend (Node/Express + MongoDB ) for auth & product storage

Wishlist & order tracking

Unit + integration tests

🤝 Contributing

Contributions are welcome! Please follow these steps:

Fork the repo

Create a feature branch (git checkout -b feat/your-feature)

Commit your changes (git commit -m "feat: add ...")

Push to your branch (git push origin feat/your-feature)

Open a Pull Request



✉️ Contact

Created by AQ Khan — reach me at abdulqadeerburiro110@example.com or find me on GitHub: https://github.com/QadeerBuriro.

Made with ❤️ — Prizeify
