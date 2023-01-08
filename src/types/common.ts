import React from "react";

export type GetComponentProps<T> =
  T extends React.ComponentType<infer P>
  | React.Component<infer P>
    ? P
    : never

export type RealType = any extends infer R ? R : any

export type ReactAttribute<T extends HTMLElement, K extends keyof React.HTMLAttributes<T>>
  = Pick<React.HTMLAttributes<T>, K>

export type FoodMenuNames = 'Morning' | 'Luch' | 'Dinner' | 'Snack';
