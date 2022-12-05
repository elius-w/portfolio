import React from 'react'
import { Container } from './styles'
import { BsFillLightbulbFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { useTheme } from '../Hooks/useTheme'


const DarkMode = () => {

    const [theme, setTheme] = useTheme()

  return (
    <Container>       
        <button>
        {theme === "light" ?(
            <BsFillLightbulbFill
                onClick={() => setTheme("dark")}
                />
        ):(
            <MdDarkMode
                className="light"
                onClick={() => setTheme("light")}
                />
        )}

        </button>           
    </Container>
  )
}

export default DarkMode