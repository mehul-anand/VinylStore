import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Hip-hop"
  },
  {
    _id: uuid(),
    categoryName: "Rock"
  },
  {
    _id: uuid(),
    categoryName: "RnB"
  },
  {
    _id: uuid(),
    categoryName: "Pop"
  }
];
