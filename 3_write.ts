/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
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
type OperationData = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
};
export type Cost = {
  type: "Cost";
} & OperationData;
export type Profit = {
  type: "Profit";
} & OperationData;

/**
 * Возвращает 50/50
 * */
const isLucky = () => {
  return Math.random() > 0.5;
};

/**
 * Создает случайную строку с максимальной длиной 19
 * */
const createRandomString = (len?: number) => {
  if (typeof len === "number") {
    len = len > 19 ? 19 : len;
  }
  return Math.random().toPrecision(21).toString().substring(2, len);
};
/**
 * Создает случайное число от 0 до 1000
 * */
const createRandomPrice = () => {
  return Math.random() * 10000;
};
/**
 * Создает случайную категорию (Category)
 * */
const createRandomCategory = () => {
  return {
    id: createRandomString(),
    name: "categoryName_" + createRandomString(6),
    photo: "photo_" + createRandomString(10),
  };
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: createRandomString(),
    name: "productName_" + createRandomString(6),
    photo: "productPhoto_" + createRandomString(6),
    desc: "productDesc_" + createRandomString(6),
    createdAt: createdAt,
    oldPrice: createRandomPrice(),
    price: createRandomPrice(),
    category: createRandomCategory(),
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  return {
    type: isLucky() ? "Profit" : "Cost",
    id: createRandomString(),
    name: "operationName_" + createRandomString(6),
    desc: "operationDesc_" + createRandomString(6),
    createdAt: createdAt,
    amount: createRandomPrice(),
    category: createRandomCategory(),
  };
};
