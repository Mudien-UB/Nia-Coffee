import React from 'react'

export default function Loading() {
  return (
    <div className="flex space-x-4">
      <div 
        className="h-12 w-12 bg-amber-400 rounded-lg animate-bounce transition-all ease-in-out opacity-0" 
        style={{ animation: 'bounce 1s ease-in-out infinite, fadeIn 1s forwards' }}></div>
      <div 
        className="h-12 w-12 bg-amber-500 rounded-lg animate-bounce transition-all ease-in-out opacity-0" 
        style={{ animation: 'bounce 1s ease-in-out infinite 0.2s, fadeIn 1s forwards 0.2s' }}></div>
      <div 
        className="h-12 w-12 bg-amber-900 rounded-lg animate-bounce transition-all ease-in-out opacity-0" 
        style={{ animation: 'bounce 1s ease-in-out infinite 0.4s, fadeIn 1s forwards 0.4s' }}></div>
    </div>
  )
}

const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`)
