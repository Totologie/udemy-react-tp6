import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const languageOptions = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(languageOptions[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown 
                optionsType="language"
                options={languageOptions} 
                selected={language}
                onSelectedChange={setLanguage}
            />

            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />

        </div>
    )
}

export default Translate