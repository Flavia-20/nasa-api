
function searchAPODdata() {
    // Obtém o valor digitado pelo usuário no input
    const dataInput = document.getElementById('dataInput').value;


    // Faz a chamada à API com a URL montada
    fetch(`https://api.nasa.gov/planetary/apod?api_key=ePkNzfj5jdhKGff0gtUVMIUjr45pasIh3ErGefEN&date=${dataInput}`)
        .then(res => res.json())
        .then(json => {
            // limpar o conteúdo anterior que estava presente na div com o id "infos
            document.getElementById('infos').innerHTML = '';

            // Cria os elementos HTML com base nos dados da API
            let div = document.createElement('div');
            div.style.backgroundColor = 'black';
            div.style.color = 'white';
            div.style.textAlign = 'center';
            div.style.padding = '10px';

            let image = document.createElement('img');
            image.setAttribute('id', 'img');
            image.src = json.url;
            image.setAttribute('width', '100%');
            div.append(image);

            let title = document.createElement('p');
            title.innerHTML = json.title + '<br>' + json.date;
            title.style.fontWeight = 'bolder';
            div.append(title);

            let info = document.createElement('p');
            info.innerHTML = json.explanation;
            div.append(info);

            // Adiciona os elementos ao documento
            document.getElementById('infos').append(div);
        })
        .catch(error => {
            console.error('Erro na requisição da API:', error);
            alert('Erro ao buscar a imagem. Verifique a data e tente novamente.');
        });
}

searchAPODdata()
