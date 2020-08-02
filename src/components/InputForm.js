import React from 'react'
import './Input.css'

const InputForm = props => (
    <form className='search'
        onSubmit={props.submit}
    >
        <input
            onChange={props.change}
            value={props.value}
            placeholder='Wprowadź miasto' />
        <button><i className="fas fa-search"></i></button>
    </form>
)

export default InputForm