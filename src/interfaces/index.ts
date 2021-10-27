export type ITransaction = {
  id: string
  createdAt: Date
  description: string
}

export type IAddress = {
  city: string
  street: string
  postalCode: string
}

export type IUser = {
  id: string
  avatarUrl: string
  name: string
  username: string
  email: string
  age: number
  address: IAddress[]
}
