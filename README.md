# 🛍️ Product Store

A simple and modern full-stack product management application where users can add, view, update, and delete products. Built with **Node.js**, **Express**, **MongoDB Atlas**, and a **React/Chakra UI** frontend.

---

## 🚀 Features

* 🔐 Secure environment using `.env` variables
* 📦 Add new products with image, price, and description
* 📝 Edit and update existing products
* ❌ Delete products
* 📄 Display all products in a clean UI
* 🌐 MongoDB Atlas database integration
* ⚡ Fast API responses with Express
* 🎨 Beautiful UI using Chakra UI

---

## 🛠️ Tech Stack

### **Frontend**

* React
* Chakra UI
* React Router

### **Backend**

* Node.js
* Express.js
* MongoDB Atlas (Mongoose)

---

## 📂 Folder Structure

```
/product-store-mern
│── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│── .env
│── README.md
```

---

## ⚙️ Installation & Setup

### **1. Clone the Repository**

```bash
git clone https://github.com/HillolPias/product-store-mern.git
cd product-store-mern
```

### **2. Backend Setup**


Create a `.env` file:

```
MONGO_URI=your-mongodb-atlas-uri
PORT=5000
```

Start backend:

```bash
npm install
npm run dev
```

### **3. Frontend Setup**

```bash
cd frontend/
npm install
npm run dev
```

---


## 🚀 Future Improvements

* Add user authentication (login/signup)
* Add product categories and search
* Pagination
* Cloud image upload (Cloudinary/Supabase Storage)

---

## 🤝 Contributing

Feel free to open issues and pull requests!

---

## 📜 License

This project is licensed under the **MIT License**.

---
