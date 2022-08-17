import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addNewWordEnTC } from '../../redux/addWordEnReducer'
import { TAddWordEnState } from '../../typesDeclaration/stateTypes'
import s from './AddNewWordPage.module.scss'
import AddWordForm from './AddWordForm/AddWordForm'

type TPropsAddWordTC = {
  addNewWordEnTC: any
}
type TPropsAddWord = TAddWordEnState &  TPropsAddWordTC

const AddNewWordPage: React.FC<TPropsAddWord> = (props) => {
  return (
    <div className={s.addWordWrapper}>
      <AddWordForm
        valuesForm={props.valuesForm}
        isFetching={props.isFetching}
        fetchInProcess={props.fetchInProcess}
        addNewWordEnTC={props.addNewWordEnTC}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  valuesForm: state.addWordEn.valuesForm,
  isFetching: state.addWordEn.isFetching,
  fetchInProcess: state.addWordEn.fetchInProcess,
});

export default compose(connect(mapStateToProps, {addNewWordEnTC}))(AddNewWordPage)
