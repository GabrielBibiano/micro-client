import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Parser } from 'html-to-react';

const htmlToReactParser = new Parser();

const Component = (props) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const fetchComponent = async () => {
      const { data } = await axios.post(`https://micro-server-blz.herokuapp.com//${props.name}`, { props })

      setComponent(htmlToReactParser.parse(data))
    }

    fetchComponent()
  }, [])

  return !!Component && Component
}

export default Component
