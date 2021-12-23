let area1 = document.getElementById('content1'),
    area2 = document.getElementById('content2'),
    area3 = document.getElementById('content3'),
    span1 = document.getElementById('span1'),
    span2 = document.getElementById('length'),
    span3 = document.getElementById('maxLength'),
    span6 = document.getElementById('maxLength2'),
    span4 = document.getElementById('atualLength'),
    span5 = document.getElementById('atualLength2');


let text1 = document.getElementById('texto1'),
    text2 = document.getElementById('texto2'),
    text3 = document.getElementById('texto3'),
    maxTamanho = document.getElementById('maxSize');

function menu(id){
    if(id == "compare"){
        document.getElementById("lenght").checked = false;
        document.getElementById("compare").checked = true;
        opcao1()
    }
    else if(id == "lenght"){
        document.getElementById("lenght").checked = true;
        document.getElementById("compare").checked = false;
        opcao2()
    }
}

function output(id){
    if(id == "yes"){
        document.getElementById("yes").checked = true;
        document.getElementById("no").checked = false;
        area3.style.display = 'flex'
    }
    else if(id == "no"){
        document.getElementById("yes").checked = false;
        document.getElementById("no").checked = true;
        area3.style.display = 'none'
    }
}

function opcao1(id){
    area1.style.display = 'flex'
    area2.style.display = 'none'

    if(id == "yes1"){
        document.getElementById("yes1").checked = true;
        document.getElementById("no1").checked = false;
        compareLowercase()
    }
    else if(id == "no1"){
        document.getElementById("yes1").checked = false;
        document.getElementById("no1").checked = true;
        compare()
    }
    else if(id != "yes" && id != "no"){
        compare()
    }
}

function opcao2(){
    area1.style.display = 'none'
    area2.style.display = 'flex'
    checkLength()
}

function compare(){
    text1.addEventListener('input', ()=>{
        if(text1.value == text2.value){
            span1.textContent = "Iguais"
            span1.style.color = "rgb(41, 163, 41)"
        }
        else if(text1.value != text2.value){
            span1.textContent = "Diferentes"
            span1.style.color = "rgb(255, 51, 51)"
        }
        else if(text1.value.lenght == 0 && text2.value.lenght == 0){
            span1.value = ''
        }
    })
    text2.addEventListener('input', ()=>{
        if(text1.value == text2.value){
            span1.textContent = "Iguais"
            span1.style.color = "rgb(41, 163, 41)"
        }
        else{
            span1.textContent = "Diferentes"
            span1.style.color = "rgb(255, 51, 51)"
        }
    })
}

function compareLowercase(){
    text1.addEventListener('input', ()=>{
        if(text1.value.toLowerCase() == text2.value.toLowerCase()){
            span1.textContent = "Iguais"
            span1.style.color = "rgb(41, 163, 41)"
        }
        else{
            span1.textContent = "Diferentes"
            span1.style.color = "rgb(255, 51, 51)"
        }
    })
    text2.addEventListener('input', ()=>{
        if(text1.value.toLowerCase() == text2.value.toLowerCase()){
            span1.textContent = "Iguais"
            span1.style.color = "rgb(41, 163, 41)"
        }
        else{
            span1.textContent = "Diferentes"
            span1.style.color = "rgb(255, 51, 51)"
        }
    })
}

function limpar(){
    span1.value = ''
    text1.value = ''
    text2.value = ''
    text3.value = ''
}

function checkLength(){
    let res
    maxTamanho.addEventListener('input', ()=>{
        res = maxTamanho.value
        span3.textContent = res
        span6.textContent = res
    })
    text3.addEventListener('input', ()=>{
        if(text3.value.length <= res){
            span4.textContent = text3.value.length
            span4.style.color = "rgb(41, 163, 41)"
            span2.textContent = "Dentro do padrão"
            span2.style.color = "rgb(41, 163, 41)"

            if(text3.value.replace(/\s/g, "").length <= res){
                span5.textContent = text3.value.replace(/\s/g, "").length
                span5.style.color = "rgb(41, 163, 41)"
            }
        }
        else{
            span4.textContent = text3.value.length
            span4.style.color = "rgb(255, 51, 51)"
            span2.textContent = "Estourou o limite de caracteres"
            span2.style.color = "rgb(255, 51, 51)"

            if(text3.value.replace(/\s/g, "").length > res){
                span5.textContent = text3.value.replace(/\s/g, "").length
                span5.style.color = "rgb(255, 51, 51)"
            }
        }
    })
}