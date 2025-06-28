const button=document.querySelector('button')
let resultdiv=document.createElement('result')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)
button.addEventListener('click',displaystats)
function displaystats(){
    const input=document.getElementById("input")
    const city=input.options[input.selectedIndex].value
    let population = 0, language=" ", literacyRate=0
    switch(city){
        case 'bangalore':
            population=8443675
            literacyRate=88.71
            language="kannada"
            break
        case 'chennai':
            population=4646732
            literacyRate=90.20
            language="tamil"
            break
        case 'coimbatore':
            population=12442373
            literacyRate=89.73
            language="marathi"
            break
        case 'kannyakumari':
            population=16787941
            literacyRate=86.20
            language="hindi"
            break
    }
    let text=`The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}`
    
    document.getElementById('result').innerHTML=text
}