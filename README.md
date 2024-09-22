
# 🛍️ E-commerce App

An elegant and fully-featured e-commerce platform built using the MERN Stack, styled with Tailwind CSS, and integrated with Stripe for seamless payment processing.


## 🚀 Live Demo

Check out the live version: [link](https://e-commerce-mern-frontend-rbh6g91j9-kushalchavans-projects.vercel.app/)


## ✨ Features

- User Authentication: Secure user sign-up, login, and authentication.
- Admin Dashboard: Manage products, orders, and users.
- Product Management: Add, update, and delete products.
- Cart & Checkout: Fully functional cart and checkout process.
- Stripe Integration: Safe and secure online payments using Stripe.
- Responsive Design: Optimized for mobile and desktop using Tailwind CSS.


## 🛠️ Tech Stack

### Frontend:
- **React.js** : Fast, dynamic, and responsive UI.
- **Tailwind CSS** : Utility-first CSS framework for styling.
- **React Router DOM** : For routing.

### Backend:
- **Node.js**: Server-side runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user, product, and order data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Stripe**: Payment processing.


## ⚙️ Installation & Setup
To get a local copy up and running, follow these simple steps.

### Prerequisites
- **Node.js**  installed
- **MongoDB Atlas** account for remote database
- **Stripe account** for payment processing.


### Backend Setup

Clone the repository:
```bash
git clone https://github.com/Kushalchavan/e-commerce-mern.git
```

Install dependencies:

```bash
cd backend
npm install
```

Create a .env file and add the following:

```bash
MONGODB_URI=your-mongodb-url

# cloudinary
CLOUDINARY_API_KEY=your-cloudinary-key
CLOUDINARY_API_SECRET_KEY=your-cloudinary-api-key
CLOUDINARY_NAME=your-cloudinary-name

JWT_SECRET=reiqrepioqe

# for admin login
ADMIN_EMAIL=admin@zara.com
ADMIN_PASSWORD=qwerty123


STRIPE_SECRET_KEY=syour-stripe-key
```

Start the backend server:
```bash

npm run dev
```

### Frontend Setup

Install frontend dependencies:
```bash
Copy code
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```


## 💳 Stripe Payment Integration

For secure online payments, the app is integrated with Stripe. Ensure to set up a Stripe account and use your STRIPE_SECRET_KEY in the backend.


## 🛡️ Security

- User passwords are hashed using bcrypt.
- JWT-based authentication for user sessions.
- Stripe handles sensitive payment information.

## 🤝 Contributing
Feel free to fork this repository and contribute by submitting a pull request.

## 📝 License
Distributed under the MIT License. See LICENSE for more information.