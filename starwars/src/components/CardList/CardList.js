import React from 'react'
import MyCard from '../Card/Card'
import './CardList.css'

const CardList = props => {
    console.log(props)
    return (
        <div className='card-list'>
            {props.characters !== undefined ? props.characters.map( c => {
                return <MyCard info={c} key={c.url}/>;
            }): ''}
        </div>
    );
}

export default CardList;