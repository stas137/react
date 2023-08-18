import { v4 as uuidv4 } from 'uuid';

import ProductImg1 from 'src/stories/assets/product1.jpg';
import ProductImg2 from 'src/stories/assets/product2.jpg';
import ProductImg3 from 'src/stories/assets/product3.jpg';

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string | string[];
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type Operation = Cost | Profit;

export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

const categoriesProducts: Category[] = [
  {
    id: 'chemical-1',
    name: 'smartphones',
    photo: 'smartphone.png',
  },
  {
    id: 'chemical-2',
    name: 'notebooks',
    photo: 'notebook.png',
  },
  {
    id: 'chemical-3',
    name: 'household-chemicals-and-hygiene',
    photo: 'chemicals-and-hygiene.png',
  },
];

const products: Product[] = [
  {
    id: 'product-1',
    name: 'iphone-11',
    photo: [ProductImg3],
    desc: 'an-apple-mobile-which-is-nothing-like-apple-(iphone-9)',
    createdAt: '2023-07-06T12:06:56.957Z',
    oldPrice: 50000,
    price: 75000,
    category: categoriesProducts[0],
  },
  {
    id: 'product-2',
    name: 'iphone-10',
    photo: [ProductImg2],
    desc: 'an-apple-mobile-which-is-nothing-like-apple-(iphone-10)',
    createdAt: '2023-07-16T12:06:56.957Z',
    oldPrice: 60000,
    price: 85000,
    category: categoriesProducts[0],
  },
  {
    id: 'product-3',
    name: 'samsung',
    photo: [ProductImg1],
    desc: 'samsung-is-(notebook)',
    createdAt: '2023-07-15T12:06:56.957Z',
    oldPrice: 70000,
    price: 95000,
    category: categoriesProducts[1],
  },
  {
    id: 'product-4',
    name: 'laundry-gel-laska-super',
    photo: [ProductImg1, ProductImg2, ProductImg3],
    desc: 'restore-color-for-color-liquid-laundry-detergent-4l-66-washes',
    createdAt: '2023-07-15T12:06:56.957Z',
    oldPrice: 2000,
    price: 1450,
    category: categoriesProducts[2],
  },
  {
    id: 'product-5',
    name: 'iphone-5',
    photo: [ProductImg1, ProductImg2, ProductImg3],
    desc: 'restore-color-for-color-liquid-laundry-detergent-4l-66-washes',
    createdAt: '2023-07-15T12:06:56.957Z',
    oldPrice: 2000,
    price: 1450,
    category: categoriesProducts[2],
  },
  {
    id: 'product-6',
    name: 'iphone-6',
    photo: [ProductImg1, ProductImg2, ProductImg3],
    desc: 'restore-color-for-color-liquid-laundry-detergent-4l-66-washes',
    createdAt: '2023-07-15T12:06:56.957Z',
    oldPrice: 2000,
    price: 1450,
    category: categoriesProducts[2],
  },
  {
    id: 'product-7',
    name: 'iphone-7',
    photo: [ProductImg1, ProductImg2, ProductImg3],
    desc: 'restore-color-for-color-liquid-laundry-detergent-4l-66-washes',
    createdAt: '2023-07-15T12:06:56.957Z',
    oldPrice: 2000,
    price: 1450,
    category: categoriesProducts[2],
  },
  {
    id: 'product-8',
    name: 'iphone-8',
    photo: [ProductImg1, ProductImg2, ProductImg3],
    desc: 'restore-color-for-color-liquid-laundry-detergent-4l-66-washes',
    createdAt: '2023-07-15T12:06:56.957Z',
    oldPrice: 2000,
    price: 1450,
    category: categoriesProducts[2],
  },
  {
    id: 'product-9',
    name: 'iphone-9',
    photo: [ProductImg1, ProductImg2, ProductImg3],
    desc: 'restore-color-for-color-liquid-laundry-detergent-4l-66-washes',
    createdAt: '2023-07-15T12:06:56.957Z',
    oldPrice: 2000,
    price: 1450,
    category: categoriesProducts[2],
  },
];

const categoriesOperations: Category[] = [
  { id: '1', name: 'Cinema', photo: 'cinema.png' },
  { id: '2', name: 'Job', photo: 'job.png' },
];

const operations: Operation[] = [
  {
    id: '1',
    name: 'Dead walk',
    desc: 'Cool cinema (Dead walk)',
    createdAt: '2023-06-10T12:06:56.957Z',
    amount: 1000,
    category: categoriesOperations[0],
    type: 'Cost',
  },
  {
    id: '2',
    name: 'Terminator',
    desc: 'Cool cinema (Terminator)',
    createdAt: '2023-06-03T12:06:56.957Z',
    amount: 1000,
    category: categoriesOperations[0],
    type: 'Cost',
  },
  {
    id: '3',
    name: 'Salary',
    desc: 'Assets',
    createdAt: '2023-06-11T12:06:56.957Z',
    amount: 95000,
    category: categoriesOperations[1],
    type: 'Profit',
  },
];

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomElement = <T>(arr: T[]): T => {
  return arr[getRandomNumber(0, arr.length - 1)];
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

export const createRandomProduct = (createdAt: string): Product => {
  const newProduct = {
    id: uuidv4(),
    name: getRandomElement(products).name,
    photo: getRandomElement(products).photo,
    desc: getRandomElement(products).desc,
    createdAt,
    oldPrice: getRandomElement(products).oldPrice,
    price: getRandomElement(products).price,
    category: getRandomElement(categoriesProducts),
  };

  return newProduct;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

export const createRandomOperation = (createdAt: string): Operation => {
  const newOperation: Operation = {
    id: uuidv4(),
    name: getRandomElement(operations).name,
    desc: getRandomElement(operations).desc,
    createdAt,
    amount: getRandomElement(operations).amount,
    category: getRandomElement(categoriesOperations),
    type: Math.random() < 0.5 ? 'Cost' : 'Profit',
  };

  return newOperation;
};
