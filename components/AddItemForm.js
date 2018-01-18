import React from 'react'

const AddItemForm = ({onClick}) =>
(
    <div style={styles.divBg}>
        <input ref={name=>this.name=name} style={styles.textbox}/>{" "}
        <input type='button' value="Add Item"  style={styles.button} onClick={e => 
            {
                onClick(this.name.value)
                this.name.value = ''
            }
        }
        />
    </div>
)

const styles = {
    divBg:{
       alignItems:'center',
    },
    textbox: {
        backgroundColor: 'Yellow',
        alignItems: 'center',
        width: 175,
        margin: "4px"
    },
    button:{
        alignItems: 'center',
        position: "relative",
        width: 100,
    }
}
export default AddItemForm
