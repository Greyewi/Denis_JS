function addCookie(name, value, options) {
    options = options || {}
    
    let expires = options.expires
    
    if (typeof expires === "number" && expires) {
      const d = new Date()
      d.setTime(d.getTime() + expires * 1000)
      expires = options.expires = d
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString()
    }
    
    value = encodeURIComponent(value)
    
    let updatedCookie = name + "=" + value
    
    for (var propName in options) {
      updatedCookie += "; " + propName
      var propValue = options[propName]
      if (propValue !== true) {
        updatedCookie += "=" + propValue
      }
    }
    //console.log(updatedCookie)
    document.cookie = updatedCookie
  }


  function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
  
  
  function deleteCookie(name) {
    addCookie(name, "", {
      expires: -1, path: '/'
    })
  }


const filmList =getCookie('list')  ? JSON.parse( getCookie('list')) :  [
    {id: 1,name: "D", dscription: 'боевик', rathing : 8, isCheck : false },
    {id: 2,name: "A", dscription: 'боевик', rathing : 8, isCheck : false },
    {id: 3,name: "C", dscription: 'боевик', rathing : 8, isCheck : false },
];

let GLOBAL_ITERRATOR = filmList.length





function render(list){
    const tbody =document.querySelector('.list tbody');
    tbody.innerHTML= '';
    for(let filmIndex=0; filmIndex < list.length; filmIndex++){
        const tr =document.createElement('tr');

        for(let key in list[filmIndex]){
            const td =document.createElement('td');
            if(key == 'isCheck'){
              let input =document.createElement('input')
              input.type= "checkbox"
              input.className= 'ch'
              input.onclick =()=>editing(filmIndex)
              input.checked = list[filmIndex][key]
             
              td.appendChild(input)
            }
            else{
              if(list[filmIndex].isCheck && key !='id'){
                const input = document.createElement('input')
                input.oninput = ({target})=>changeList(target.value,filmIndex,key)
                input.className ='in'
                input.value = list[filmIndex][key]
                td.appendChild(input)
              }
              else{
                td.innerHTML=list[filmIndex][key];
              }
            
            }
            tr.appendChild(td);
        };
        const td= document.createElement('td')
        td.innerHTML='Close'
        td.onclick = () => removeElement(filmIndex)
        tr.appendChild(td)
        tbody.appendChild(tr)

  
  
      

    };
};



render(filmList);

function newElement(){

let nameValue = document.querySelector('.name').value;
let dscriptionValue = document.querySelector('.dscription').value;
let rathingValue = document.querySelector('.rathing').value;


filmList.push({id: ++GLOBAL_ITERRATOR ,name: nameValue  , dscription: dscriptionValue, rathing :rathingValue ,isCheck : false })
  //const newFilmList = [...filmList,{id: 4 ,name: nameValue  , dscription: dscriptionValue, rathing :rathingValue , }]
  render(filmList);
  addCookie('list',JSON.stringify(filmList))
  nameValue = '';
  dscriptionValue = "";
  rathingValue ='';
}


function removeElement(arrKey){

    filmList.splice(arrKey, 1)
    render(filmList)
    addCookie('list',JSON.stringify(filmList))

}


function sort(field){


    const th = document.querySelector('th')
    let atr = th.getAttribute('data-sort'); 
    console.log(atr);
    if(atr == 'true'){
        render( filmList.sort(function(a,b){
            if (a[field]> b[field]) {
                return 1;
              }
              if (a[field] < b[field]) {
                return -1;
              }
              return 0; 
            }))
        
    }else{
        render( filmList.sort(function(a,b){
            if (a[field]> b[field]) {
                return - 1;
              }
              if (a[field] < b[field]) {
                return 1;
              }
              return 0;     

       }))
    }

    th.setAttribute('data-sort',atr === 'false' ? 'true' : 'false')
}



function search (event){
    const value = event.target.value
   render( filmList.filter(function(f){
       if(f.name.indexOf(value) != -1){
           return true
       }
       else {
           return false
       }

   } 
   )
   )}

   function editing(index){
       const line = filmList[index];
       line.isCheck = !line.isCheck
       
  
       render(filmList)
      
      
    
   }

function changeList(value,index,field) {
  const line = filmList[index];
  line[field] =value

  render(filmList)

}


function chekbox(){
  const chekboxList=document.querySelectorAll(".ch")
 console.log(chekboxList)
  chekboxList.forEach((cheсkbox)=>{
    cheсkbox.click()
  })
}