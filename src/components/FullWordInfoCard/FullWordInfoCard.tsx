import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsShowedAC } from '../../redux/fullInfoEnReducer'
import { getDescription, getIndex, getUsualEn } from '../../redux/fullInfoEnSelectors'
import { getWordsEn } from '../../redux/wordsEnSelectors'
import { TWordsEng } from '../../typesDeclaration/wordsEngType'
import { SvgLeaf } from '../svgIconComponents/SvgLeaf'
import { SvgFlower } from '../svgIconComponents/SvgFlower'
import { SvgCherry } from '../svgIconComponents/SvgCherry'

import s from './FullWordInfoCard.module.scss'


//type TProps = {}

const FullWordInfoCard: React.FC = () => {
//   useEffect(() => { }, [])

const baseInfo: Array<TWordsEng> = useSelector(getWordsEn)
const index: number = useSelector(getIndex)
const description: string = useSelector(getDescription)
const usualEn: string = useSelector(getUsualEn)

const {wordEn, wordRu, type, noun, verb, countGame} = baseInfo[index]

const dispatch = useDispatch()

const handleClose = () => dispatch(setIsShowedAC(false))

    return (
        <div className={s.fullInfoWrapper}>
            {/* Dark Transparent Layer */}
            <div className={s.darkLayer}></div> 
            
            <div className={s.fullInfoCard}>
                <div className={s.countIconWrapper}>
                    {(countGame < 10) &&
                        <SvgLeaf width="24px" height="20px"/>
                    }
                    {(countGame >= 10 && countGame < 20) &&
                        <SvgFlower width="24px" height="20px"/>                        
                    }
                    {(countGame >= 20) &&
                        <SvgCherry width="24px" height="20px"/>
                    }
                </div>
                <button className={s.btnClose} onClick={handleClose}>x</button>
                <div className={s.wordsEnRu}>
                    <span>{wordEn}</span>

                    {(type === 'noun')&&
                    <div className={s.otherFormsBlock}>
                        <span className={s.defenition}>{'multyfomr: '}</span><span>{noun.multyForm}</span>
                    </div>}

                    {(type === 'verb')&&
                    <div className={s.otherFormsBlock}>
                        <div className={s.defenitionVerb}>
                            <span>{'He/She/It:'}</span>
                            <span>{'past:'}</span>
                            <span>{'third:'}</span>
                        </div>
                        <div className={s.otherFormsVerb}>
                            <span>{verb.heSheItForm}</span>
                            <span>{verb.pastForm}</span>
                            <span>{verb.thirdForm}</span>
                        </div>
                    </div>}
          
                    <span>{wordRu}</span>
                </div>
                <div className={s.description}>
                    <span className={s.blockTitle}>description:</span>
                    <p className={s.description__descriptText}>{description}</p>
                </div>
                <div className={s.usualCases}>
                    <span className={s.blockTitle}>usual cases:</span>
                    <p className={s.usualCases__usualText}>{usualEn}</p>
                </div>
                
            </div>
        </div>
    )
}

export default FullWordInfoCard 
