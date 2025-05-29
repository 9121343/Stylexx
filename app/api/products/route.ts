import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Look 1",
    description: "Stylish and modern look 1",
    image: "/images/shop1.png",
    price: 59.99,
  },
  {
    id: 2,
    name: "Look 2",
    description: "Cool and casual look 2",
    image: "/images/shop2.png",
    price: 49.99,
  },
  {
    id: 3,
    name: "Look 3",
    description: "Elegant evening look 3",
    image: "/images/shop3.png",
    price: 79.99,
  },
  {
    id: 4,
    name: "Look 4",
    description: "Sporty and active look 4",
    image: "/images/shop4.png",
    price: 39.99,
  },
  {
    id: 5,
    name: "Look 5",
    description: "Trendy and urban look 5",
    image: "/images/shop5.png",
    price: 69.99,
  },
  {
    id: 6,
    name: "Look 6",
    description: "Classic and timeless look 6",
    image: "/images/shop6.png",
    price: 59.99,
  },
  {
    id: 7,
    name: "Look 7",
    description: "Bold and vibrant look 7",
    image: "/images/shop7.png",
    price: 89.99,
  },
  {
    id: 8,
    name: "Look 8",
    description: "Relaxed and comfy look 8",
    image: "/images/shop8.png",
    price: 45.99,
  },
  {
    id: 9,
    name: "Look 9",
    description: "Chic and fashionable look 9",
    image: "/images/shop9.png",
    price: 75.99,
  },
];

export async function GET() {
  return NextResponse.json(products);
}
