import React, {useState} from 'react'

const ButtonMenu = () => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    const onClick2 = () => setShowResults(false)
    return (
        <div>
            {showResults
                ? <button onClick={onClick2}>Hide menu</button>
                : <button onClick={onClick}>Show Menu</button>}
        </div>
    )
}
export default ButtonMenu;