import React from 'react';
import Menu from './Menu'
export default function Header(props) {

    return<Menu menuItems={props.menuItems}></Menu>
    
}