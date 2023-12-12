import React from 'react'
import "./Inicio.css"
import Button from 'react-bootstrap/Button';

export const Inicio = () => {
  return (
    
    <div className='container'>
      
      <section className='seccion'>
          <h1>
            
          EMPRESAS DE SOFWARE MAS IMPORTANTES
          </h1>
      </section>
      <div className='container-1'>
        <div className='container-2'>
          <section>
            <h3>
              
                DESARROLLO A LA MEDIDA
            </h3>
            <br/>
          </section>
          <p>
          Creamos softwares y soluciones digitales a la medida de tus requerimientos, con los estándares más altos de calidad y equipo altamente capacitado.
          </p>
          <Button variant="primary">Ir</Button>{' '}
          
      </div>
        <div className='container-2'>

        <section>
            <h3>
              
            SOFTWARE FACTORY
            </h3>
            <br/>
          </section>
          <p>
          Diseño y desarrollo de software y aplicaciones con tecnologías cloud a la medida para grandes empresas. Alta calidad, buenas prácticas y metodologías ágiles.
          </p>
          <div className="d-grid gap-2">
      <Button variant="primary" size="sm">
        Verificar Si te Gusta
      </Button>
      
    </div>
          
        </div>
      </div>
      
    </div>
    
  )
}

export default Inicio