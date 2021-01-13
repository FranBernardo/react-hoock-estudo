import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcfratorial(n)  {
    if(n <0 ) return -1
    if (n === 0) return 1
    return calcfratorial(n - 1) * n

}

function Impar(n){
    if(n % 2 == 0) return "par"
    else return "impar"
    
}
const UseEffect = (props) => {
    const [number, setnumber] = useState (1);
    const [fatorial, setfatorial] = useState (1);
    const [status, setstatus] = useState("Impar")


    useEffect(function(){
        setfatorial(calcfratorial(number))
        
    },[number])

  


    useEffect(function(){
        setstatus(number % 2 === 0 ? 'par': 'Impar')
    }, [number])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio 01#"/>

            <div className="center">
                <div>
                    <span className="text">Fatorial</span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setnumber(e.target.value)}/>
            </div>
            <SectionTitle title="exercicio 02#" />
            <div className="center">
                <div className="text">Impar ou Par</div>
                <div className="text red">{status}</div>
            </div>
            
        </div>

        
    )
}

export default UseEffect
