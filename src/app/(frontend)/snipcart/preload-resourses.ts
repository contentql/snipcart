'use client'
import ReactDOM from 'react-dom'

export function PreloadResources() {
  ReactDOM.preconnect('https://app.snipcart.com')
  ReactDOM.preconnect('https://cdn.snipcart.com')
  return null
}
