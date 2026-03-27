import clsx, { type ClassValue } from 'clsx';
import { twMerge as twMergeOrigin } from 'tailwind-merge';

export const cn = (...classList: ClassValue[]) => {
  return twMergeOrigin(clsx(...classList));
};
