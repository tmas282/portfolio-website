import type { JSX } from "react"

export type Contact = {
    icon: JSX.Element,
    contact: string | number | URL,
    type: ContactType
}
export type ContactType = {
    category: string,
    prefix?: string | number
}