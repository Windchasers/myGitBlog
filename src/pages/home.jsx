import React,{useState} from 'react';
import Header from './Header'

export default function Home(props) {
    const[menuItems,setMenus] = useState(['博文', '强记', '大道', '迢迢']);
    
    function menuItemClick(){
      
    }

    return <div>
        <Header menuItems={menuItems}></Header>
    </div>
}