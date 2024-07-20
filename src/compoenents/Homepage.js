import React from 'react'

export default function Homepage() {
    const [number,setNumber] = React.useState("")
    console.log(number)
   
   

  return (
    <div className='home'>
        <div className='main'>
            <div className='sub1'>
                {/* <h1>welcome</h1> */}
                <input type='text'value={number}  className='screen'/>

            </div>

            <div className='sub2'>
                <div className='num'><input type='button' value="AC" className='btn' onClick={()=>setNumber("")} /></div>
                <div className='num'><input type='button' value="Del" className='btn' onClick={()=>setNumber(number.slice(0, -1))} /></div>
                <div className='num'><input type='button' value="Ent" className='btn'onClick={()=>setNumber()} /></div>
                <div className='num'><input type='button' value="=" className='btn'onClick={(e)=>setNumber(eval(number))} /></div>             
               

                <div className='num'><input type='button' value="1" className='btn' onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="2" className='btn' onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="3" className='btn' onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="+" className='btn' onClick={(e)=>setNumber(number + e.target.value)} /></div>             
                
                <div className='num'><input type='button' value="4" className='btn'onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="5" className='btn'onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="6" className='btn'onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="-" className='btn'onClick={(e)=>setNumber(number + e.target.value)} /></div>

                <div className='num'><input type='button' value="7" className='btn'onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="8" className='btn'onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="9" className='btn'onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="*" className='btn'onClick={(e)=>setNumber(number + e.target.value)} /></div>

                <div className='num'><input type='button' value="." className='btn' onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="0" className='btn' onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="%" className='btn' onClick={(e)=>setNumber(number + e.target.value)} /></div>
                <div className='num'><input type='button' value="/" className='btn' onClick={(e)=>setNumber(number + e.target.value)} /></div>
                
                




            </div>

        </div>
    </div>
  )
}
