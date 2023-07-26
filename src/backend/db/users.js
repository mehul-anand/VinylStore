import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Mehul",
    lastName: "Anand",
    email: "mehulmail@gmai.com",
    password: bcyrpt.hashSync("bestpassword", 5),
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password: bcyrpt.hashSync("johnDoe123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "Dum",
    lastName: "Aloo",
    email: "aloo@gmail.com",
    password: bcyrpt.hashSync("aloosupremacy", 5),
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
];
