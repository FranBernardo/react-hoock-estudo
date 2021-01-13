import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import Usebtn from './Usebtn'

const UseCallback = (props) => {

    const [count, setcount] = useState(0)

    const inc = useCallback(function (delta) {
        setcount(curry => curry +delta)
        
    }, [setcount])
        
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>

              <Usebtn inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
