import { useState, useEffect, useRef } from "react";
import Funct from "./FolderFunction/func.js"; 
import Useparameter from "./FolderFunction/func1.js";
import {Button} from "./FolderFunction/button.js"
/* import function dari folder yang isinya function (reusable) */

function App() {

  var judul = "First bgt";



                                    { /* Introduction useState*/ }
  const [nama, setnama] = useState("fai");    /* set = variable setelah diubah ((syntax untuk menyimpan variable yang bisa diubah)) */
       {/* | */}                 {/* | */}                   
       {/* v */}                 {/* v */} 
    {/* variable awal 
    sebelum diubah */}        {/* isi awal variable */}   



                                        {/* Login fOrm */}
   const usernameasli = "takuttokek";
   const passwordasli ="dara090906";
   const[username, setusername] = useState("");
   const[password, setpassword] = useState("");
   const[loggedin, setloggedin] = useState(false)  /* artinya sebelum dimasukkin username & password dia belum logged in */
   
   function validasidata(){
    if (username === usernameasli && password === passwordasli){
       setloggedin(true);                           /* kalo username nya bener akan keganti true dan diset loggedin*/
    }
   }


                                          {/* Ternary */}
    const[ternaryheader, setternaryheader] = useState (true);





                                        {/* ARRAY DESTRUCTION */}
    
    const[listnama, setlistnama] = useState([]);      /* artinya ini array yang masih kosong */
    const[nama1, setnama1] = useState("")




                                            {/* USE EFFECT */}
      const[count,setcount] = useState(0);

      useEffect (() => {                        /* dia bakal selalu ngelakuin kode di dalamnya kalo countnya berubah*/
        console.log("page rendered");
      }, [count]);
    

                                            {/* USE REF*/}
      const input = useRef(null);

      const changeplaceholder = () => {
        console.log(input);         /*consolelog detail dari input*/
        input.current.placeholder = "keganti";     /*change placeholder, bisa value juga alias isinya*/
        input.current.focus();   /*pencet button otomatis ngeclick input*/
      }




                              {/* HOW TO MAKE 2 FUNCTION ON A BUTTON*/}

      const combineFunctions = (...functions) => {      /* kode untuk per item di array */
      return () => {
      functions.forEach(funccombi => funccombi());
    };
  };

  // const combinedfunction = combineFunctions(funccombi1, funccombi2);

  {/* ------------------------------------------------------------------------------------ */}  
          
  return (
    <div className="App">
      <h1>{judul}</h1>
      <Funct />                            {/*   ini untuk manggil function yang udah diimport  */}
      <Useparameter nama="dara"/>          {/*   ini untuk manggil function yang ada parameter/props */}
      <hr />

                                     {/* Introduction useState*/}

      <h1> UseState Introduction </h1>
      {nama}
      <button onClick={() =>    /* syntax untuk mengaktifkan dari variable yang usestate*/
      {setnama ("dara");}} > 
      CHANGE NAME </button>

      <hr />
                                          {/*login fOrm*/}
      <h1>Login fOrm</h1>
      <label> Username: </label>
      <br />

      {/*  Terjadinya onchange saat ada event(mengetik di input) berupa diambilnya nilai dari input secara langsung */}
      <input 
      type="text"                                            /* target = objek yang dirujuk (input/button) || value = isi dari input diambil */
      onChange={(event) => {setusername(event.target.value)  /* onchange = melakukan perubahan secara langsung */
      console.log(event.target.value);                       /* event = interaksi yang akan terjadi akan mentrigger onchange */
      }}/>
      <br />
      <label> Password: </label>
      <br />
      <input 
      type="password" 
      onChange={(event) => {setpassword(event.target.value)}
    }
      />
      <br />
      <input type="submit" 
      onClick = {validasidata} 
      />

      {loggedin && <h1> Login Successfully! </h1>}

      <hr />
                                        {/* Ternary */}

      <h1> Ternary </h1>
      <input type="submit" onClick = {() => {
        setternaryheader(false);
      }} 
      />                                 
      {ternaryheader ? <h3>Ternary True!</h3> : <h3>Ternary False!</h3>}              {/* bentuk ternary */}
        <hr />


                                        {/* ARRAY DESTRUCTION */}
      
      <h1>ARRAY DESTRUCTION</h1>
      <input type="text" 
      onChange = {(event) => 
      {setnama1 (event.target.value)   /* mengambil nilai dari input */

      }}/>
      <br />
      <button onClick = {() => {
        setlistnama([...listnama, nama1]);   /* list nama yang terbaru akan memasukkan nama nama baru dalam bentuk array */
        setnama ("");                       /* input bakal diset kosong lagi */
      }}> Add Name </button>

      {listnama.map((value, key) => {
        return <h1 key={key}> {value} </h1>      /*sytanx ini bakal print dalam bentuk array*/
      })}                   {/*key= 0 value="dara" dst*/}




                                        {/* Use Effect */}
      
      
      <h2> {count} </h2>
      <button onClick = {() => {setcount(count-1)}}> Decrease </button>
      <button onClick = {() => {setcount(count+1)}}> Increase </button>

      <hr />
      <br />




                                            {/* USE REF*/}

      <input type="text" placeholder="halo" ref={input}/>

      <br /> 

      <button onClick = {changeplaceholder} > Chenge Placeholder! </button>

      <hr /> <br />



                                            {/* STYLED COMPONENTS */}

      <Button> Styled Components! </Button>








    </div>
  );
}

export default App;
