import React from "react";
import { useDispatch } from "react-redux";
import { setIndexAC } from "../../redux/fullInfoEnReducer";
import {TNoun, TVerb} from '../../typesDeclaration/wordsEngType'
import { SvgLeaf } from '../svgIconComponents/SvgLeaf'
import { SvgFlower } from '../svgIconComponents/SvgFlower'
import { SvgCherry } from '../svgIconComponents/SvgCherry'
import s from "./WordCard.module.scss";

type TProps = {
  index: number
  wordId: string
  wordEn: string
  wordRu: string
  type: string
  noun: TNoun
  verb: TVerb
  countGame: number
  getDescriptEnTC: any
};

const WordCard: React.FC<TProps> = ({index, wordId, wordEn, wordRu, type, noun, verb, countGame, getDescriptEnTC}) => {
  const dispatch = useDispatch()

  const showDescriptHandler = () => {
    dispatch(setIndexAC(index))
    getDescriptEnTC(wordId)
  }

  return (
    <div className={s.cardWrapper} onClick={showDescriptHandler}>
        { (countGame < 10) && <SvgLeaf width="30px" height="26px"/> }
        { (countGame >= 10 && countGame < 20) && <SvgFlower width="30px" height="30px"/> }
        { (countGame >= 20) && <SvgCherry width="30px" height="30px"/> }
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
    </div>
  );
};

export default WordCard
