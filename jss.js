function Converter(){
        var ValorEntrada = document.getElementById('valorDaMoeda').value
        var Resposta = document.getElementById('res')
        var select = document.getElementById('seletor');
        var valor = select.options[select.selectedIndex].value
        var image = document.getElementById('bandeiras')
        
    
        if(valor == 1){
            const api = 'https://economia.awesomeapi.com.br/last/'
            const moedas = 'USD-BRL'
            
            fetch(api + moedas)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                //var imgs = document.getElementById('img')
                //var img = document.createElement('img')
                //img.src = 'imagens/eua.png'
                var moedadolar = data.USDBRL
                var valorconvertido = (moedadolar.high) * ValorEntrada
                Resposta.innerHTML = `R$${valorconvertido.toFixed(2)}`
                //imgs.appendChild(img)
                image.src = 'imagens/eua.png'
               
            })

        } else if (valor == 2){
                const api = 'https://economia.awesomeapi.com.br/last/'
                const moedas = 'EUR-BRL'
                //var imgs = document.getElementById('img')
                //var img = document.createElement('img')
                //img.src = 'imagens/euro.ico'
            
                fetch(api + moedas)
                .then(function(response){
                return response.json()
                })
                .then(function(data){
                    var moedaeuro = data.EURBRL
                    var valorconvertido2 = (moedaeuro.high)* ValorEntrada
                    Resposta.innerHTML = `R$${valorconvertido2.toFixed(2)}`
                    //imgs.appendChild(img)
                    image.src = 'imagens/euro.ico'
                })
        } else if (valor == 3){
                const api = 'https://economia.awesomeapi.com.br/last/'
                const moedas = 'BTC-BRL'
                //var imgs = document.getElementById('img')
                //var img = document.createElement('img')
               // img.src = 'imagens/bit.png'
                
                fetch(api + moedas)
                .then(function(response){
                    return response.json()
                })
                .then(function(data){
                    var moedabiticoin = data.BTCBRL
                    var valorconvertido3 = (moedabiticoin.high) * ValorEntrada
                    Resposta.innerHTML = `R$${valorconvertido3.toFixed(3)}`
                    //imgs.appendChild(img)
                    image.src = 'imagens/bit.png'
                })
        }
}

/*function carregar(){
    var select = document.getElementById('seletor');
    var valor = select.options[select.selectedIndex].value
    var imgs = document.getElementById('img')

    var img1 = document.createElement('img')
    img1.src = 'imagens/eua.png'

    var img2 = document.createElement('img')
    img2.src = 'imagens/euro.ico'

    var img3 = document.createElement('img')
    img3.src = 'imagens/bit.png'

    if(valor == 1){
        imgs.appendChild(img1)
    } else if ( valor ==2){
        imgs.removeChild
        imgs.appendChild(img2)
    }else if(valor ==3){
        imgs.removeChild
        imgs.appendChild(img3)
    }
} */
   