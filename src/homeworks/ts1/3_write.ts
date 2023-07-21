/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string;
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
    id: '1',
    name: 'Smartphones',
    photo: 'smartphone.png',
  },
  {
    id: '2',
    name: 'Notebooks',
    photo: 'notebook.png',
  },
];

const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 9',
    photo: 'iphone9.png',
    desc: 'An apple mobile which is nothing like apple  (iPhone 9)',
    createdAt: '2023-07-06T12:06:56.957Z',
    oldPrice: 50000,
    price: 75000,
    category: categoriesProducts[0],
  },
  {
    id: '2',
    name: 'iPhone 10',
    photo: 'iphone10.png',
    desc: 'An apple mobile which is nothing like apple (iPhone 10)',
    createdAt: '2023-07-16T12:06:56.957Z',
    oldPrice: 60000,
    price: 85000,
    category: categoriesProducts[0],
  },
  {
    id: '3',
    name: 'Samsung',
    photo: 'samsung.png',
    desc: 'Samsung is ... (Notebook)',
    createdAt: '2023-07-15T12:06:56.957Z',
    oldPrice: 70000,
    price: 95000,
    category: categoriesProducts[1],
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
    id: createdAt,
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
    id: createdAt,
    name: getRandomElement(operations).name,
    desc: getRandomElement(operations).desc,
    createdAt,
    amount: getRandomElement(operations).amount,
    category: getRandomElement(categoriesOperations),
    type: Math.random() < 0.5 ? 'Cost' : 'Profit',
  };

  return newOperation;
};
