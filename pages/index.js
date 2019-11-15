import React, { useEffect } from 'react'
import RenderComponentFromEndpoint from '../components/RenderComponentFromEndpoint'

const Home = () => {
  useEffect(() => {
    window.onload = () => { 
      document.body.addEventListener('click', (e) => {
        const dataSet = e.toElement.dataset || {}

        if (dataSet.addToCart) {
          alert('Produto adicionado ao carrinho!')
        }

        if (dataSet.oneClickBuy) {
          alert('Compra com um clique')
        }
      })
    }
  }, [])

  return (
    <>
      <RenderComponentFromEndpoint name="AddToCart" />
      <RenderComponentFromEndpoint name="OneClickBuy" />
    </>
  )
}

export default Home
