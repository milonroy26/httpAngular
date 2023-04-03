import { Address } from "./address"
import { Company } from "./company"

export interface User_interface {
    id?: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    image?: string,
    phone: string,
    website: string,
    company: Company,
}
