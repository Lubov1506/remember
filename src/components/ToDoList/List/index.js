import React from 'react';

const List = (props) => {
   const liArray = props.toDos.map((elem, id)=>{
return <li key={id}>{elem}</li>
    })
    return (
        <ul>
            {liArray}
        </ul>
    );
}

export default List;
