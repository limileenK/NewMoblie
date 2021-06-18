import React from 'react'
import { Text } from 'react-native'
import CardList from './CardList'
import { Data } from '../carou/data'
const CardMain = () => {
    return (
        <>
            <CardList data={Data}/>
        </>
    )
}

export default CardMain
