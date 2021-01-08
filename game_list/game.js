async function getResponse(){
    let response = await fetch('https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json');
    let content = await response.json()
    console.log(content)


}
getResponse();