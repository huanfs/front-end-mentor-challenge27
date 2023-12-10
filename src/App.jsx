import { useState, useEffect } from "react";
import './App.scss'
import Input from "./components/input";
import Results from "./components/results";
import locale from "./assets/images/icon-location.svg";
function App() {
  const[request, setRequest] = useState();
  const[data, setData] = useState();

  async function trackId(){
    const url = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_jqaYdqwnn0MF47i9rI2OAxiNztSNF&ipAddress=${request}`);
    let response = await url.json();
    setData(await response);
    document.querySelector("form input").value="";
  }

  useEffect(()=>{
    if(data){
      console.log(data);
    }
  },[data])


  return (
    <>
      <header>
        <h1>ip address trancker</h1>
        <Input action={trackId} set={setRequest} receive={request}/>
      </header>
      <article>
        <Results info="ip address" result={data?.ip}/>
        <Results info="location" result={data?.location?.region}/>
        <Results info="time zone" result={data?.location?.timezone}/>
        <Results info="isp" result={data?.isp}/>
        </article>
        <main id="map">
          <img src={locale}/>
        </main>
    </>
  )
}

export default App
