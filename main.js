    var btn=document.querySelector('.button');
    //var inputValue=document.querySelector('.inputValue');
   var name=document.querySelector('.name');
    var des=document.querySelector('.des');
    var temp=document.querySelector('.temp');
    btn.addEventListener('click',()=>{

    let inputValue=document.querySelector('.inputValue');
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid=82f92baf0b6b9ed8539aafbf79605c34')
    .then(res=>res.json())
    .then(data=>{

       var nameValue=data['sys']['country']
       var tempValue=data['main']['temp'];
       var desValue=data['weather'][0]['description'];
       var name=document.querySelector('.name');
       name.innerHTML='Country Name :' + nameValue;
       temp.innerHTML='Temp Into Farenhite :'+tempValue;
       des.innerHTML= 'Temperature Description:' + desValue;
        console.log(data);

    })
    
    .catch(error=>alert('wrong city name'));

})
