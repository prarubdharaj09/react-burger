import React from 'react';
import Aux from '../../hoc/Aux';
import './layout.css';

const Layout = (props) =>(
    <Aux>
        <main className= 'Content'>
            {props.children}
        </main>
    </Aux>
)

export default Layout