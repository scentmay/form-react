import { useState } from 'react'
import Card from './Components/Card'
import Container from './Components/Container'
import UserForm from './Components/UserForm'


function App() {

  const [usuarios, setUsuarios] = useState([])
  
  const submit = usuario => {
    setUsuarios([...usuarios, usuario])
  }


  // llevando el formulario a un componente logramos que no se renderice toda la aplicación cada vez que pulsamod una tecla. App sólo se va a renderizar cuando seteemos un nuevo usuario

  // esto es importante porque en aplicaciones grandes, no necesitamos renderizar TOOOODA la app por un simple formulario

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>

        <Card>
          <ul>
            {usuarios.map(x =>
              <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>
            )}
          </ul>
        </Card>

      </Container>
    </div>
  )
}

export default App;
