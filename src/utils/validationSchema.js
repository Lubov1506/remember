import { object, string, email, password } from 'yup'

export const SIGN_UP_SCHEMA = object({
  firstName: string(),
  lastName: string(),
  email: string().email(),
  password: string()
})
