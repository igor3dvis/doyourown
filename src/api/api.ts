import axios from 'axios'
import { TUsualEn } from '../typesDeclaration/usualTypes'
import { TWordsEng } from '../typesDeclaration/wordsEngType'

const axiosInstance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:3001/'
})

export const wordsEnApi = {
    /* GET all words by "wordEn" order */
    async requestWords(currentPage: number, wordsOnPage: number){
        const responce = await axiosInstance.get(`wordsEn?_sort=wordEn&_page=${currentPage}&_limit=${wordsOnPage}`)
        return responce.data
        // const responce = await axiosInstance.get(`wordsEn?_sort=wordEn&_page=${currentPage}&_limit=${wordsOnPage}`)

    },

    /* GET all words by "wordEn" order */
    async requestWordsByLetterEn(currentPage: number = 1, wordsOnPage: number = 10){
        const responce = await axiosInstance.get(`wordsEn?wordEn_like=^${'p'}&_sort=wordEn&_page=${currentPage}&_limit=${wordsOnPage}`)
        return responce.data
    },

    /* GET word's Base  Info */
    async requestBaseInfo(id: string){
        const responce = await axiosInstance.get(`wordsEn/${id}`)
        return responce.data
    },

    /* GET word's Description */
    async requestDescript(id: string){
        const responce = await axiosInstance.get(`usualEn/${id}`)
        return responce.data
    },

    /* POST new word's Base  Info */
    async sendNewWordBaseInfo(valuesForm: TWordsEng){
        const result = await axiosInstance.post(`wordsEn/`, valuesForm)
        { result.status === 201 && alert('Word saccesfully added!') }
    },

    /* POST new word's Description */
    async sendNewWordDescription(descript: TUsualEn){
        const result = await axiosInstance.post(`usualEn/`, descript)
        { result.status === 201 && alert('Description saccesfully added!') }
    }
}
