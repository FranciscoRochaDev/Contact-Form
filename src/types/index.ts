
export type ContactUs = {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    queryType: 'general' | 'support',
    message: string,
    terms: boolean
}
