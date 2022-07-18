import React, { useContext } from 'react'
import ElementContext from '../Store/ElementContext';
import classes from './SidebarItem.module.css'
const SidebarItem = (props) => {

    const { id, title, color, text } = props.object;
    const elementCtx = useContext(ElementContext);

    return (
        
        <ul className={classes.item}>
            <li style={{backgroundColor:color}}>{color}</li>
            <li>{id}</li>
            <li>{title}</li>
            <li>{text}</li>
            <button onClick={() => elementCtx.removeElementHandler(id)}>Remove</button>
            <button onClick={() => elementCtx.modifyElementHandler(props.object)}>Modify</button>
        </ul>
    )
}
export default SidebarItem
