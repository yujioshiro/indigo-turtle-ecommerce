import React from 'react'
import { Contact } from './global'


export default function HomeProducts(props: Contact){
    return(
        <div>

            <div>

                <img src={props.img}/>
                <h3>{props.title}</h3>
                <h3>{props.price}</h3>

            </div>
        </div>
    )
}

