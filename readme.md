# 📊 Mini CRM Backend API

A RESTful CRM (Customer Relationship Management) Backend built using **Node.js**, **Express.js**, and **MongoDB**. This project allows businesses to manage leads efficiently by creating, updating, tracking, and deleting customer leads.

---

## 🚀 Features

### Lead Management

* Create new leads
* View all leads
* View lead by ID
* Update lead status
* Add notes to leads
* Delete leads

### Validation & Error Handling

* Required field validation
* Duplicate email prevention
* Lead existence verification
* Centralized async error handling

### Database Operations

* MongoDB integration with Mongoose
* Automatic timestamp management
* Sorted lead retrieval

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Utilities

* Async Handler Middleware
* REST API Architecture

---

## 📁 Project Structure

```bash
src/
│
├── controllers/
│   └── leadController.js
│
├── models/
│   └── leadModel.js
│
├── routes/
│   └── leadRoutes.js
│
├── middleware/
│
├── utils/
│   └── asyncHandler.js
│
├── config/
│
├── server.js
└── package.json
```

---

## 📌 API Endpoints

### Create Lead

```http
POST /api/leads
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Interested in CRM solution"
}
```

Response:

```json
{
  "message": "Lead created successfully"
}
```

---

### Get All Leads

```http
GET /api/leads
```

Response:

```json
{
  "leads": [...]
}
```

---

### Get Lead By ID

```http
GET /api/leads/:id
```

Response:

```json
{
  "lead": {...}
}
```

---

### Update Lead

```http
PUT /api/leads/:id
```

Request Body:

```json
{
  "status": "contacted",
  "notes": "Customer requested demo"
}
```

Response:

```json
{
  "message": "Lead updated successfully"
}
```

---

### Delete Lead

```http
DELETE /api/leads/:id
```

Response:

```json
{
  "message": "Lead deleted successfully"
}
```

---

## 🗄️ Lead Schema Example

```json
{
  "_id": "leadId",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Interested in services",
  "status": "new",
  "notes": [],
  "createdAt": "2026-01-01T10:00:00.000Z"
}
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Shaurya925/mini-crm-backend.git
```

### Navigate To Project

```bash
cd mini-crm-backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Start Development Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:5000
```

---

## 🎯 Future Enhancements

* User Authentication
* JWT Authorization
* Role-Based Access Control (RBAC)
* Dashboard Analytics
* Lead Assignment System
* Email Notifications
* CSV Export
* Search & Filtering
* Pagination
* Activity Logs

---

## 📚 Learning Outcomes

This project helped strengthen understanding of:

* REST API Development
* CRUD Operations
* MongoDB & Mongoose
* Error Handling
* Middleware Architecture
* Backend Project Structure
* API Testing with Postman

---

## 👨‍💻 Author

**Shaurya Kumar**

Full Stack Developer | MERN Stack Developer | Backend Engineer

GitHub: https://github.com/Shurya925

LinkedIn: https://www.linkedin.com/in/shaurya-kumar-a9366a321?utm_source=share_via&utm_content=profile&utm_medium=member_ios

---

## 📄 License

This project is licensed under the MIT License.

⭐ If you found this project useful, consider giving it a star on GitHub.
