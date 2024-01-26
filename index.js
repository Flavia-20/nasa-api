function searchAPOD() {
    /* const api = fetch("https://api.nasa.gov/planetary/apod?api_key=ePkNzfj5jdhKGff0gtUVMIUjr45pasIh3ErGefEN")
    console.log(api ) 
    Faço esse console.log para ver se a api esta fulfied do console do navegador*/
    
    fetch("https://api.nasa.gov/planetary/apod?api_key=ePkNzfj5jdhKGff0gtUVMIUjr45pasIh3ErGefEN")
    .then(res => res.json())
        .then( json => {
            let div = document.createElement('div')
            div.style.backgroundColor = 'black'
            div.style.color = 'white'
            div.style.textAlign = 'center'
            div.style.padding = '10px'
          

            let image = document.createElement('img')
            image.setAttribute('id','img')
            image.src = json.url
            image.setAttribute('width', '100%')
            div.append(image)//para colocar a tag img dentro da tag div

            let title = document.createElement('p')
            title.innerHTML = json.title + '<br>' + json.date
            title.style.fontWeight = 'bolder'
            div.append(title)

            let info = document.createElement('p')
            info.innerHTML = json.explanation
            div.append(info)

            document.querySelector('#infos').append(div)
        })
}
searchAPOD()
