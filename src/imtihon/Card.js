import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'


export default function Card() {
    const [data, setdata] = useState("")
    const [data1, setdata1] = useState("");
    const [data2, setdata2] = useState("");
    const [data3, setdata3] = useState("");
    const [data4, setdata4] = useState("");
    useEffect(() => 
    {axios.get("https://myjson.dit.upm.es/api/bins/bbm7")
        .then(res =>{
         setdata(res.data);
         console.log(res.data);
        })
     }, []);

     useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/dohr")
        .then(ress =>{
            // console.log(ress.data);
            setdata1(ress.data)
        })
     }, []);

     useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/i6j3")
        .then(ress =>{
            // console.log(ress.data);
            setdata2(ress.data)
        })
     }, []);

     useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/7htd")
        .then(ress =>{
            // console.log(ress.data);
            setdata3(ress.data)
        })
     }, []);

     useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/5kdd")
        .then(ress =>{
            // console.log(ress.data);
            setdata4(ress.data)
        })
     }, []);
  return (
        <div className='container my-5'>
            <div className="swiffy-slider slider-item-show5 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x9 bg-white  py-1 py-lg-2" data-slider-nav-autoplay-interval="2000">
            <div className="slider-container">
                {
                    (data.length>0) && data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={item.img_src}  loading="lazy" alt="" />
                            </div>
                        )
                    })
                }
            </div>

            <button type="button" className="slider-nav" aria-label="Go left"></button>
            <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

            </div>
            <div className="swiffy-slider slider-item-reveal slider-nav-round slider-item-ratio slider-item-ratio-21x9" id="slider1">
                <ul className="slider-container">
                    {
                        (data1.length>0) && data1.map((box ,index)=>{
                            return(
                                <li key={index}>
                                    <img src={box.img_src} loading="lazy" alt="" />
                                </li>
                            )
                        })
                    }
                </ul>

                <button type="button" className="slider-nav" aria-label="Go left"></button>
                <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

                <div className="slider-indicators slider-indicators-square d-none d-md-flex">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                </div>

                <div className="slider-indicators slider-indicators-sm slider-indicators-dark slider-indicators-round d-md-none slider-indicators-highlight">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                </div>
            </div>

            <div className='row'>
                <h2 className='text-align:center my-5'>Kategoriya</h2>
               
                {
                        (data2.length>0) && data2.map((box ,index)=>{
                            return(
                                <div class="col-4">
                                <div className='border'>
                                    <div key={index}>
                                    <img src={box.img_src} loading="lazy" alt="" />
                                    <span>{box.name}</span>
                                </div>
                                </div>
                                </div>
                                
                            )
                        })
                    }
              
            </div>
            <div className='row'>
                {
                        (data3.length>0) && data3.map((product ,index)=>{
                            return(
                                <div class="col card my-5 mx-2">
                                    <div key={index}>
                                    <img width={20} src={product.img_src} loading="lazy" alt="" />
                                    <h6>{product.name}</h6>
                                    <h6>{product.cost}</h6>
                                    <button className='btn btn-primary'>Sotib olish</button>
                                </div>
                                </div>  
                            )
                        })
                    }
              
            </div>

            <div className='row'>
                {
                        (data4.length>0) && data4.map((product ,index)=>{
                            return(
                                <div class="col card mx-2">
                                    <div key={index}>
                                    <img src={product.img_src} loading="lazy" alt="" />
                                    <h6>{product.name}</h6>
                                    <h6>{product.cost}</h6>
                                    <button className='btn btn-primary'>Sotib olish</button>
                                </div>
                                </div>  
                            )
                        })
                    }
              
            </div>
    </div>
    
  )
}
