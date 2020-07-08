import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

const items= [
    {
        id:"26",
        title: 'What is React?',
        content: 'Imeofjezpjigfpozejfzjfoezofjp^'
    },
    {
        id:"34",
        title: 'What is React?',
        content: 'Imeofjezpjigfpozejfzjfoezofjp^'
    },
    {
        id:"25286",
        title: 'What is React?',
        content: 'Imeofjezpjigfpozejfzjfoezofjp^'
    }
]

const options = [
    {
        label: 'REDDDD',
        value: 'red'
    },
    {
        label: 'OP Green shade',
        value: 'green'
    },
    {
        label: 'Nice shade of blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div className="ui container">
            <h1>Accordion application</h1>

            <Translate />

            <br />
            
            <Dropdown 
                optionsType="color"
                options={options} 
                selected={selected}
                onSelectedChange={setSelected}
            />

            <br />

            <Search />

            <br />

            <Accordion items={items} />
        </div>
    )
}
