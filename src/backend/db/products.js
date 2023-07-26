import { v4 as uuid } from "uuid";
import {
  SS,
  Jackboys,
  Midnights,
  Starboy,
  BID,
  Astroworld,
  HNM,
  GAGR,
  HH,
  Blonde,
  Orange,
  BIB,
  Aerosmith,
  Handwritten
} from "../../Assets/images";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "3fbe8787-7618-4606-aee2-5df44023578b",
    title: "Astroworld",
    artist: `Travis Scott`,
    badge: "Best Seller",
    image: Astroworld,
    price: 1349,
    discount: 20,
    rating: 4.5,
    reviewers: 42,
    categoryName: "Hip-hop"
  },
  {
    _id: "9d8b7008-53b7-4ef1-ae7a-a9bf3cafe69b",
    title: "Jackboys",
    artist: "Travis Scott and Jackboys",
    badge: "",
    image: Jackboys,
    price: 3299,
    discount: 30,
    rating: 3.5,
    reviewers: 28,
    categoryName: "Hip-hop"
  },
  {
    _id: "1df47f33-50e1-4b4d-9e7e-7f73cabf42c9",
    title: "Midnights",
    artist: "Taylor Swift",
    badge: "Best Seller",
    image: Midnights,
    price: 4199,
    discount: 45,
    rating: 4,
    reviewers: 34,
    categoryName: "Pop"
  },
  {
    _id: "041b5d72-d90c-45ba-8f28-4df2e15b36f3",
    title: "An Evening with Silk Sonic",
    artist: `Silk Sonic, Anderson .Paak, Bruno Mars`,
    badge: "",
    image: SS,
    price: 4999,
    discount: 25,
    rating: 4.5,
    reviewers: 56,
    categoryName: "Pop"
  },
  {
    _id: "0e2a940c-4819-4a54-81a5-d8f57993c01b",
    title: "Beauty in Death",
    artist: "Chase Atlatic",
    badge: "New Best Seller",
    image: BID,
    price: 3299,
    discount: 12,
    rating: 4.5,
    reviewers: 30,
    categoryName: "RnB"
  },
  {
    _id: "511c319d-e584-4433-b861-63d0fb652f09",
    title: "Starboy",
    artist: "The Weekend",
    badge: "",
    image: Starboy,
    price: 3299,
    discount: 20,
    rating: 4,
    reviewers: 54,
    categoryName: "Pop"
  },
  {
    _id: "b012cb96-201f-4a05-b4bc-134d98909817",
    title: "Honestly Never Mind",
    artist: "Drake",
    badge: "Out of Stock",
    image: HNM,
    price: 1149,
    rating: 1.5,
    reviewers: 3,
    categoryName: "Hip-hop"
  },
  {
    _id: "300c8fe7-db61-404a-aad2-e8b10ee1b227",
    title: "Goodbye & Good Riddance",
    artist: "Juice WRLD",
    badge: "",
    image: GAGR,
    price: 2499,
    discount: 50,
    rating: 3,
    reviewers: 23,
    categoryName: "Hip-hop"
  },
  {
    _id: "d251ff01-9051-4fc2-b336-535b30591f00",
    title: "Harry's House",
    artist: "Harry Styles",
    badge: "",
    image: HH,
    price: 899,
    discount: 0,
    rating: 3.5,
    reviewers: 152,
    categoryName: "Pop"
  },
  {
    _id: "6944f288-124f-4ec9-8ef5-4ce351b6feb9",
    title: "Blonde",
    artist: "Frank Ocean",
    badge: "New",
    image: Blonde,
    price: 3199,
    discount: 67,
    rating: 3.5,
    reviewers: 29,
    categoryName: "RnB"
  },
  {
    _id: "5dd8e435-52ec-4e04-9cc0-1fbfb108fbe2",
    title: "channel ORANGE",
    artist: "Frank Ocean",
    badge: "",
    image: Orange,
    price: 1699,
    discount: 30,
    rating: 2.5,
    reviewers: 43,
    categoryName: "RnB"
  },
  {
    _id: "91bb055b-87c6-463a-b3c9-546cf82cd2c5",
    title: "Back In Black",
    artist: "ACDC",
    badge: "",
    image: BIB,
    price: 1999,
    discount: 20,
    rating: 4,
    reviewers: 59,
    categoryName: "Rock"
  },
  {
    _id: "b75cb869-a94d-4ddd-8b0c-ccd0e674ff74",
    title: "Aerosmith",
    artist: "Aerosmith",
    badge: "",
    image: Aerosmith,
    price: 2750,
    discount: 10,
    rating: 3.5,
    reviewers: 122,
    categoryName: "Rock"
  },
  {
    _id: "4d6f7abc-9785-45ca-b9b9-fdb12b3cba98",
    title: "Handwritten",
    artist: "Shawn Mendes",
    badge: "",
    image: Handwritten,
    price: 3200,
    discount: 12,
    rating: 4,
    reviewers: 157,
    categoryName: "Pop"
  }
];
