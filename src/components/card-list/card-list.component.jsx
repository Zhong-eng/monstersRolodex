import React from 'react'
import {Card} from '../card/card.component'
import './card-list.style.css' 

export const CardList = (props) => {
    
    return <div className="card-list">
        {
            props.monsters.map((monster) => (
                <Card monster={monster}></Card>
            )
            )
        }
    </div>
}