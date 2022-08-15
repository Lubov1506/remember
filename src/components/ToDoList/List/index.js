import React from 'react';
import styles from './List.module.css'

const List = (props) => {
   const liArray = props.toDos.map((elem, id)=>{
return <li key={id}>{elem}</li>
    })
    return (
        <ul className={styles.container}>
            {liArray}
        </ul>
    );
}

export default List;
