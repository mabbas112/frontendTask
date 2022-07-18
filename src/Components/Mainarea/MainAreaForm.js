import React, { useContext, useEffect, useState } from 'react'
import ElementContext from '../Store/ElementContext';
import classes from './MainAreaForm.module.css'

const MainAreaForm = () => {

    const elementCtx = useContext(ElementContext);
    const { modifyElement, addElementHandler } = elementCtx;

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [text, setText] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    useEffect(
        () => {
            if (modifyElement) {
                const { id, title, color, text } = modifyElement;
                setId(+id);
                setTitle(title);
                setText(text);
                setColor(color);
                setIsEdit(true);
            }
            if (modifyElement.id === '')
                setIsEdit(false);

        }, [modifyElement]
    )

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const colorChangeHandler = (event) => {
        setColor(event.target.value);
    }
    const textChangeHandler = (event) => {
        setText(event.target.value);
    }


    const formSubmitHandler = (event) => {

        event.preventDefault();

        if (title.trim().length < 1 || color.trim().length < 1 || text.trim().length < 1) {
            return;
        } else {
            addElementHandler({ id, title, color, text })
        }



        setIsEdit(false);
        setId('');
        setText('');
        setColor('');
        setTitle('');
    }

    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <div>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={title}></input>
            </div>
            <div>
                <label>Color</label>
                <input type="text" onChange={colorChangeHandler} value={color}></input>
            </div>
            <div>
                <label>Text</label>
                <textarea value={text} onChange={textChangeHandler} />
            </div>

            <button type='submit'>
                {isEdit ? 'Update' : 'Add'}
            </button>

        </form>
    )
}
export default MainAreaForm;
