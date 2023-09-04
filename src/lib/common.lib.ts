import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase().concat(str.slice(1).toLowerCase());
