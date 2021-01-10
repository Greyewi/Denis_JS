function imgError (img){
    img.src= "https://icon-library.com/images/file-icon-size/file-icon-size-19.jpg" 
    img.onerror=""
    return true
}

const arr =[]
const game_add= document.querySelector('.game')

function add (props) {
    const div =document.createElement('div')
    arr.push(props)
    div.innerHTML=arr
    game_add.appendChild(div)
}

(async function getResponse(){
    let response = await fetch('https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json');
    let content = await response.json()
    console.log(content)

    const game_list =document.querySelector('.game_list')
for(let key in content){
 

    game_list.innerHTML += `<div class="block">
                                <img src="${ content[key].cover }" alt="" onerror="imgError(this)" width="150px" height="210px">
                                <div><button onclick='add(${JSON.stringify((content[key].name))})'>Добавить</button></div>
                                <p> ${ content[key].name}</p>
                                ${content[key].price ? `<p>${content[key].price}рублей</p>`:""}
                            </div>`   
                           
                           
}
})()



