import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector(state => state.notes)

    const [ formValues, handleInputChange, reset ] = useForm( note );


    const { body, title, id } = formValues;

    // verify changes
    const activeId = useRef( note.id );
    //solo se dispera si cambia el id de la nota
    useEffect(() => {
       if( note.id !== activeId.current ){
           reset( note ); 
           activeId.current = note.id
       }
    }, [note, reset])

    useEffect(() => {
        dispatch( activeNote(formValues.id, { ...formValues } ))
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting(id) );
    }

    return (
        <div className='notes__main-content'>
            <NoteAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                    name="title"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChange }
                    name="body"
                ></textarea>

                {
                    (note.url) &&

                    <div className="notes__image">
                        <img 
                            src={ note.url }
                            alt="imagen"
                        />
                    </div>
                }
               

            </div>
            <button
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </button>
        </div>
    )
}
