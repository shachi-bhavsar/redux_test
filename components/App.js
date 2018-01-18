
import React from 'react'
import Footer from './Footer'
import AddItem from '../containers/AddItem'
import {DisplayItemList} from '../containers/DisplayItemList'

const App = () => (
    
       <div style={styles.wrapper}>
            <div style={styles.container}>
                <div style={styles.additem}>
                    <AddItem/>
                </div>
                <div style={styles.displayitem}>
                    <DisplayItemList/>
                </div>
                <div style={styles.footer}>
                    <Footer/>
                </div>
            </div>
        </div>
   
)

const styles = {
    container: {
        width: 300,
        height: 400
    },
    wrapper: {
        display: 'flex', 
        justifyContent: 'center'
    },
    additem:{
        backgroundColor: '#23cf45',
        height: 30
    },
    displayitem:{
        backgroundColor: '#5080FF',
    },
    footer:{
        backgroundColor: '#23cf45'
    }
};

export {App}