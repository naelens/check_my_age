function verificar() { 
    var data = new Date() 
    var ano = data.getFullYear() 
    var f_ano = document.getElementById('txtano') 
    var res = document.getElementById('res') 
    
    if(f_ano.value.length == 0 || Number(f_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(f_ano.value) 
       var genero = ''
       var img = document.createElement('img') 
       img.setAttribute('id', 'foto') 
      
       if(fsex[0].checked) { 
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '/image/crianca-h.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/image/jovem-menino.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '/image/homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', '/image/idoso-h.jpg')
            }
       } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '/image/crianca-m.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', '/image/jovem-mulher.jpg')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', '/image/mulher.jpg')
            } else {
                //idosa
                img.setAttribute('src', '/image/idosa-m.jpg')
            }
       }
       res.style.textAlign = 'center'; 
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img) 
    }  
}