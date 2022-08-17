import React from 'react'
import { useFormik } from 'formik'
import s from './AddWordForm.module.scss'
import { TAddWordEnState } from '../../../typesDeclaration/stateTypes'
import { unicId } from '../../../utils/setUnicId'
import { TWordsEng } from '../../../typesDeclaration/wordsEngType'
import { TUsualEn } from '../../../typesDeclaration/usualTypes'

type TPropsAddWordTC = {addNewWordEnTC: any}
type TPropsAddWord = TAddWordEnState &  TPropsAddWordTC

const AddWordForm: React.FC<TPropsAddWord> = (props) => {
  const formik = useFormik({
    initialValues: {
      newWordEN: "",
      newWordUA: "",
      typeWord: "choose",
      multyForm: "",
      heSheItForm: "",
      pastForm: "",
      thirdForm: "",
      description: "",
      usualEn: "",
    },
    onSubmit: (values) => {
      const id = unicId()

      const wordNoun = {
        noun: {
          multyForm: values.multyForm
        }
      }
      const wordVerb = {
        verb: {
          heSheItForm: values.heSheItForm,
          pastForm: values.pastForm,
          thirdForm: values.thirdForm
        }
      }
      const wordBaseInfo: TWordsEng = {
        id: id,
        wordEn: values.newWordEN,
        wordRu: values.newWordUA,
        type: values.typeWord,
        countGame: 0
        }

      const wordDescription: TUsualEn = {
        id: id,
        description: values.description,
        usualCase: values.usualEn
      }

      if(values.typeWord === 'noun'){
        const wordToDb = {...wordBaseInfo, ...wordNoun}
        props.addNewWordEnTC(wordToDb, wordDescription)
      } else 
      if(values.typeWord === 'verb'){
        const wordToDb = {...wordBaseInfo, ...wordVerb}
        props.addNewWordEnTC(wordToDb, wordDescription)
      }
    },
  })

  const handleBlurAndCheck = () => {
    formik.handleBlur('newWordEN')
    console.log('CHECK WORD');
    
  }

  return (
    <div className={s.addWordFormWrapper}>
      <form className={s.formWrapper} onSubmit={formik.handleSubmit}>
        <input
          id="newWordEN" name="newWordEN" type="text" placeholder="add new word EN"
          value={formik.values.newWordEN}
          onChange={formik.handleChange}
          onBlur={handleBlurAndCheck}
        />
        <input
          id="newWordUA" name="newWordUA" type="text" placeholder="add new word UA"
          value={formik.values.newWordUA}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <select
          id="typeWord" name="typeWord" required
          value={formik.values.typeWord}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="choose">choose type of word</option>
          <option value="noun">noun</option>
          <option value="verb">verb</option>
        </select>
        {formik.values.typeWord === 'noun' &&
          <input
            id="multyForm" name="multyForm" type="text" placeholder="multyple-form"
            value={formik.values.multyForm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        }
        {formik.values.typeWord === 'verb' &&
          <>
            <input
              id="heSheItForm" name="heSheItForm" type="text" placeholder="He / She / It form"
              value={formik.values.heSheItForm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              id="pastForm" name="pastForm" type="text" placeholder="past form"
              value={formik.values.pastForm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              id="thirdForm" name="thirdForm" type="text" placeholder="third form"
              value={formik.values.thirdForm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </>
        }
        
        <textarea
          id="description" name="description" placeholder="description ..."
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <textarea
          id="usualEn" name="usualEn" placeholder="usual cases"
          value={formik.values.usualEn}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <input type="submit" value="add new word" />
      </form>
    </div>
  )
}

export default AddWordForm
