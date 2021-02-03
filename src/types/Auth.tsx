export type Auth = {
    login: string
    password: string
}

export type Register = {
    login: string
    password: string
    role: string
    name?:string
    lastname?:string
}