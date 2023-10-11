import axios from 'axios';
import { Quote } from '../types/quote';

const baseUrl = 'https://api.quotable.io'
const basePath = '/quotes';

export const getRandomQuotes = async () => {
    try {
        const response = await axios.get<Quote[]>(`${baseUrl}${basePath}/random`)

        return response.data;
    } catch(e) {
        console.log('Error', e)
    }
}