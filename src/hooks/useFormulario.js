import { useState } from 'react'

// custom hook, tras la lógica se exporta el valor más la funciónm que lo cambia.
// a la hora de llamarlo se le puede pasar un valor inicial
//  const [formulario, handleChange] = useFormulario({ name: '' })


const useFormulario = (inicial) => {

    const [formulario, setFormulario] = useState(inicial)

    const handleChange = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    })
    }

    const reset = () => {
        setFormulario(inicial)
    }

    return [formulario, handleChange, reset]
}

export default useFormulario