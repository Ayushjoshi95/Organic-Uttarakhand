import React, { useEffect } from 'react'

export default function UseEffectHook() {

    useEffect(()=>{
        console.log('run on every render');    });
  return (
    <div>useEffect</div>
  )
}
