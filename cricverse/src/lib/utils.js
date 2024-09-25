import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return tw(clsx(inputs))
}

function tw(...inputs) {
  return twMerge(clsx(inputs))
}