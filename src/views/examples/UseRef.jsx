import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [valor1, setvalor1] = useState("");
    const [valor2, setvalor2] =useState("");
    const count = useRef(0)
    const myImput = useRef(null)
    const myImput2 = useRef (null)


    const merge = function (s1, s2){
        return [...s1].map(function(e, i){
            return `${e}${s2[i] || ""}`
        }).join("")
    }


    useEffect(function(){
        count.current = count.current + 1 
        count.current.focus()
    }, [valor1])

    useEffect(function(){
        count.current = count.current + 1 
        count.current.focus()
    }, [valor2])
    
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

          <SectionTitle title="Execicios 01#" />
          <div className="center">
              <div>
                  <span className="text"> Valor:</span>
                  <span className="text">{merge (valor1, valor2)} [</span>
                  <span className="text red">{count.current}</span>
                  <span className="text">]</span>
              </div>
              re
              <input type="text" className="input" ref={myImput} value={valor1} onChange={e => setvalor1(e.target.value)} />
          </div>

          <SectionTitle title="Exercicos 02#" />
          <div className="center">
              <input type="text" className="input" value={valor2} ref={myImput2} onChange={e => setvalor2 (e.target.value)}/>
          </div>
        </div>
    )
}

export default UseRef
