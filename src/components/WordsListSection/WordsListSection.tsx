import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getWordsTC } from '../../redux/wordsEnReducer'
import { getDescriptEnTC } from '../../redux/fullInfoEnReducer'
import { TWordsEng } from '../../typesDeclaration/wordsEngType'
import WordCard from '../WordCard/WordCard'
import s from './WordsListSection.module.scss'
import { getCurrentPage, getIsFetching, getWordsOnPage, getWordsEn } from '../../redux/wordsEnSelectors'
import { getIsShowed } from '../../redux/fullInfoEnSelectors'
import FullWordInfoCard from '../FullWordInfoCard/FullWordInfoCard'

type TProps = {
  wordsEn: Array<TWordsEng>
  wordsOnPage: number
  currentPage: number
  isFetching: boolean
  getWordsTC: any
  getDescriptEnTC: any
  isShowed: boolean
}

const WordsListCection: React.FC<TProps> = ({wordsEn, wordsOnPage, currentPage, isFetching, getWordsTC, getDescriptEnTC, isShowed}) => {
  
  useEffect(() => {
   // getWordsTC(currentPage, wordsOnPage)
    getWordsTC()
  }, [])

  return (
    <div className={s.wordListWrapper}>
      {isShowed && <FullWordInfoCard /> }
      
      {wordsEn.map((e, i) => {
        return (
          <WordCard
            key={e.id}
            index = {i}
            wordId={e.id}
            wordEn={e.wordEn}
            wordRu={e.wordRu}
            type={e.type}
            noun={e.noun}
            verb={e.verb}
            countGame={e.countGame}
            getDescriptEnTC={getDescriptEnTC}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  wordsEn: getWordsEn(state),
  isShowed: getIsShowed(state),
  wordsOnPage: getWordsOnPage(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
})

export default compose( connect ( mapStateToProps, { getWordsTC, getDescriptEnTC } ) )( WordsListCection )
