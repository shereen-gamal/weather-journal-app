
/* Global Variables */

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '6272528f63a9571982c1683440edf54c';
const zipCode = document.getElementById('zip');
const button = document.getElementById('generate');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// create get function to get tempreture from openweathermap using zip code
const getData = async () => {
    // fetch url
    const req = await fetch (
        `${baseURL}?zip=${zipCode.value}&appid=${apiKey}&units=metric`
        );

    try{
        const res = await req.json();
        if(res['cod']== 400){
            alert(res['message']);
        }
        else{
            console.log (res);
        }
        return res;
    }
    catch(error){
        console.log (error);
    }
}

// create post function to post the information that we get from openweathermap using zip code into server endpoint
const postData = async (url='',data={}) =>{
    const res = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
      });

    try{
        const newData= await res.json();
        console.log(newData);
        return newData;
    }
    catch(error){
       console.log(error);
    }
}

// create function that updates user interface using the data we have in server endpoint
const updateUI = async ()=>{
    const feelling = document.getElementById('feelings').value;
    const response = await fetch('/data');
    try{
        const newData= await response.json();
        document.getElementById('date').innerHTML ='Date: '+newDate ;
        document.getElementById('temp').innerHTML = 'Tempreture: '+newData.temp +" ْ C";
        document.getElementById('content').innerHTML ='Feellings: '+feelling ;
    }
    catch(error){
        console.log(error);
    }
}

// adding event listner to click event to make actions function
button.addEventListener('click', actions);

// actions function declaration which has the sequence of events that is we need in this application
function actions (){
    const zipCode = document.getElementById('zip').value;
    if (zipCode ===''){
        alert('please enter zip code !');
    }
    else{
        getData()
        .then((data)=>{
            postData('/addData',data);
        })
        .then(()=>{
            updateUI();
        })

    }
}
