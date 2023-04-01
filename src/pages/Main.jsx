import React from 'react'
import Header from '../components/Header'

const Main = ({Section}) => {
  return (
    <main>
        <Header></Header>
        <Section generation = "1"/>
        <Section generation = "2"/>
        <Section generation = "3"/>
        <Section generation = "4"/>
        <Section generation = "5"/>
        <Section generation = "6"/>
        <Section generation = "7"/>
        <Section generation = "8"/>
        <Section generation = "9"/>
    </main>
  )
}

export default Main