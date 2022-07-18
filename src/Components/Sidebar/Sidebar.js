import React, { useContext } from 'react'
import ElementContext from '../Store/ElementContext';
import SidebarItem from './SidebarItem';

const Sidebar = (props) => {
    const elementCtx = useContext(ElementContext);
    const { elements } = elementCtx;
    const sideBarItems = elements.map(item => <SidebarItem object={item} key={item.id} />)

    return (
        <div>
            {sideBarItems}
        </div>
    )
}
export default Sidebar;
