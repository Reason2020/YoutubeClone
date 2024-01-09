import { Search } from '@mui/icons-material'
import React from 'react'
import './ButtonedInput.scss'

const ButtonedInput = () => {
  return (
    <div className='input_container'>
        <input 
            type="text"
            placeholder='Search'
        />
        <button>
            <Search
                sx={{
                    fontWeight: '200',
                    fontSize: '20px'
                }}
            />
        </button>
    </div>
  )
}

export default ButtonedInput