export type TNoun = {
    multyForm?: string
}

export type TVerb = {
    heSheItForm?: string | null
    pastForm?: string | null
    thirdForm?: string | null
}

export type TWordsEng = {
    id: string
    wordEn: string
    wordRu: string
    type: string
    noun?:TNoun
    verb?: TVerb
    countGame: number
}

// this type may be not in use! check it latter
export type TNewWordEn = {
    newWordEN: string
    newWordUA: string
    type: string
    multyForm: string | null
    heSheItForm: string | null
    pastForm: string | null
    thirdForm: string | null
    description: string | null
    usualEn: string | null
    isFetching: boolean
    fetchInProcess: boolean
  }