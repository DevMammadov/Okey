import { ICategory } from "types";

export const createLink = (name: string) => `/${name?.replace(/ /g, "-").toLocaleLowerCase()}`;

export const makeProductLink = (name: string, categ: string) => {
  return `${createLink(categ)}${createLink(name)}`;
};

export const unlink = (name: string) => `${name?.replace(/-/g, " ").toLocaleLowerCase()}`;
