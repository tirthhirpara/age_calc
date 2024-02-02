import './App.css';
import { useState } from 'react';

function App() {

  let[date1,setdate1] = useState('');
  let[date2,setdate2] = useState('');
  let[sec,setsec] = useState('')
  let[min,setmin] = useState('')
  let[hour,sethour] = useState('')
  let[day,setday] = useState('')
  let[week,setweek] = useState('')
  let[mon,setmon] = useState('')
  let[year,setyear] = useState('')



  let cal_age = () => {
    let milli, sec, min, hour, day, week, year, month;
    milli = Date.parse(date2) - Date.parse(date1);
    sec = milli/1000;
    min = sec/60;
    hour = min/60;
    day = hour/24;
    week = parseInt(day/7);
    month = parseInt(day/30);
    year = parseInt(day/365);    

    setsec(sec)
    setmin(min)
    sethour(hour)
    setday(day)
    setweek(week)
    setmon(month)
    setyear(year)

  }


  return (
    <>
      <div class="simple">
      <div class="main" style={{display:'flex'}}>
        <div class="first" style={{marginRight:'40px'}}>
          <h2>DOB : <input type="date" name="" id="dob" onChange={(e) => { setdate1(e.target.value) }} /></h2>
          
        </div>
        <div class="first">
          <h2>Today Date : <input type="date" name="" id="td" onChange={(e) => {setdate2(e.target.value)}} /></h2>
          
        </div>
      </div>
      <div class="middle" style={{marginLeft:'10%'}}>
        <button class="ans" onClick={cal_age} style={{backgroundColor:'navy',color:'white',padding:'10px 30px',border:'none'}}>
          Calculate Your Age
        </button>
      </div>
     
      <div class="last">
      <div class="bottom" style={{marginLeft:'10%'}}>
        <p class="d-flex">In Years:<input type="text" id="y" value={year} /></p>
        <p class="d-flex">In Months:<input type="text" id="display_m" value={mon} /></p>
        <p class="d-flex">In Weeks:<input type="text" id="display_w" value={week} /></p>
        <p class="d-flex">In Days:<input type="text" id="display_d" value={day} /></p>
        <p class="d-flex">In Hours:<input type="text" id="display_h" value={hour} /></p>
        <p class="d-flex">In Minutes:<input type="text" id="display_min" value={min} /></p>
        <p class="d-flex">In Seconds:<input type="text" id="display_s" value={sec} /></p>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
