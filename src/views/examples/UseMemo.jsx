import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function sum(a, b) {

    const future = Date.now() + 2000
    while(Date.now() < future) {}
    return a + b

    
}

const UseMemo = (props) => {
    const [n1, setn1] = useState(0)
    const [n2, setn2] = useState(0)
    const [n3, setn3] = useState(0)

    const result = sum(n1 , n2)


    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
                <input type="number" className="input" value={n1} onChange={e => setn1(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n2} onChange={e => setn2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n3} onChange={e => setn3(parseInt(e.target.value))}/>
                <span className="text">{result}</span>
        </div>
    )
}

export default UseMemo
