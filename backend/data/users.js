import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Salam Sheikh",
    email: "salam@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "El",
    email: "el@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
