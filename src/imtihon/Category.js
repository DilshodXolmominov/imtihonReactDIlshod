import React from 'react'
import { useEffect,useState } from 'react'

export default function Category() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6 categoty my-4'>
            <select className='form-control'>
                <option>Одежды</option>
                <option>Krasovka</option>
                <option>Aксессуары</option>
            </select>
            </div>
            <div className='col-6 StartEnd my-4'>
                <button className='btn btn-primary mx-3 w-25'>Start</button>
                <button className='btn btn-danger mx-3 w-25'>End</button>
            </div>
            <div className='input'>
                <input type="text" className='form-control' placeholder='Izlash' />
            </div>
        </div>
    </div>
    
  )
}

