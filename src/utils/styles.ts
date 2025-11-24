import classNames from 'classnames'

export type ClassValue = Parameters<typeof classNames>[0]

export function cn(...inputs: ClassValue[]) {
  return classNames(inputs)
}
