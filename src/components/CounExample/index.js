import React, { Component, useState, useEffect, useContext } from 'react'

const ConsumerComponent = () => {
  const name = useContext(NameContext)
  const age = useContext(AgeContext)
  return (
    <div>
      Name: {name}, Age: {age}
    </div>
  )
}
export default ConsumerComponent
