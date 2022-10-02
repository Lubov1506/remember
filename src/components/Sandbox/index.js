import React, {useState, useMemo, useTransition} from 'react';
import {data} from './data'

const Sandbox = () => {
    const [textData, setData] =useState(data)
    const [inputValue, setInputValue] = useState('')
    const [isPending, startTransition] = useTransition()
    const [filterValue, setFilterValue] = useState('')
    const inputHandler = ({target:{value}}) =>{
        setInputValue(value)
        startTransition(()=>{
            setFilterValue(value)
        })
    }
    const filteredValue = useMemo(()=>{
        return textData.filter(item => item.text.toLowerCase().includes(inputValue))
    }, [inputValue])

    const mappedData  = filteredValue.map(obj=>
        <li key={obj.guid}>{obj.text}</li>
    )

    return (
        <div>
        <input type='text'  value={inputValue} onChange={inputHandler}/>
<ul>
    {mappedData}
</ul>
        </div>
    );
}

export default Sandbox;
