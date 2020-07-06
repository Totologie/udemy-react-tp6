import React from 'react'
import Accordion from './components/Accordion'

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

export default () => {
    return (
        <div>
            <h1>Accordion application</h1>
            <Accordion items={items} />
        </div>
    )
}
