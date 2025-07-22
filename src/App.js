import { useState } from "react";
import Funct from "./FolderFunction/func.js"; 
import Useparameter from "./FolderFunction/func1.js"
/* import function dari folder yang isinya function (reusable) */

function App() {

  var judul = "First bgt";

                          /* Introduction useState*/
  const [nama, setnama] = useState("fai");    /* set = variable setelah diubah ((syntax untuk menyimpan variable yang bisa diubah)) */
       {/* | */}                 {/* | */}                   
       {/* v */}                 {/* v */} 
    {/* variable awal 
    sebelum diubah */}        {/* isi awal variable */}   

                              /* Login fOrm */
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


          
  return (
    <div className="App">
      <h1>{judul}</h1>
      <Funct />                            {/*   ini untuk manggil function yang udah diimport  */}
      <Useparameter nama="dara"/>          {/*   ini untuk manggil function yang ada parameter/props */}
      <hr />

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

      {loggedin && <h1> Login Succesfully! </h1>}

      <hr />



    </div>
  );
}

export default App;
