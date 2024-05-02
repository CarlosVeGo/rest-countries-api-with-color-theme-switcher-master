const main = document.querySelector("main");
const continentes = document.querySelector("#continentes");
const apiUrl = `https://restcountries.com/v3.1/all`;
const searcher = document.querySelector(".searcher");




function filter(){ 
    
    fetch(apiUrl).then((data) => data.json().then((res)=>{
        
        res.forEach(re => {
            const name = re.name.common
            const poblacion = re.population
            const capital = re.capital
            const image = re.flags.png
            const region = re.region
            
            main.innerHTML +=`
            <div class="country" id="${name}">
                <img src="${image}">

                <div class="info">
                    <p class="title-name">${name}</p>
                    <p> <span class="title"> Population: </span>${poblacion}</p>
                    <p><span  class="title">Region: </span>${region} </p>
                    <p><span class="title">Capital: </span>${capital}</p>
                </div>
            </div>
            `
        });

    })).catch((err)=> main.innerHTML = `Try Again Later`)
}

continentes.addEventListener("change", () => {
    
    const continente = continentes.value;
    
    main.innerHTML = `Buscando Banderas`;

    if(continente === "filter"){
        main.innerHTML=``
        filter()
    }else{
            main.innerHTML=``
            fetch(apiUrl).then((data) => data.json().then((res)=>{
            res?.forEach( re => {

                const name = re.name.common
                const region = re.region
                const poblacion = re.population
                const capital = re.capital
                const image = re.flags.png

                if(continente === region){
                    main.innerHTML +=`
                    <div class="country" id="${name}">
                        <img src="${image}">
                        <div class="info">
                            <p class="title-name">${name}</p>
                            <p> <span class="title"> Population: </span>${poblacion}</p>
                            <p><span  class="title">Region: </span>${region} </p>
                            <p><span class="title">Capital: </span>${capital}</p>
                        </div>
                    </div>
                    `
                }
            })
        })).catch((err)=> main.innerHTML = `Try Again Later`)
    }
})

searcher?.addEventListener("input", () => {
    
    const input = searcher.value?.toLowerCase();
    main.innerHTML =``
    console.log(input)
    const long = input.length
    
    if( input?.length === 0 ){
        filter()
    }else{
        main.innerHTML =``
        fetch(apiUrl).then((data) => data.json().then((res)=>{
            res?.forEach( re => {
                
                const name = re.name.common
                const region = re.region
                const poblacion = re.population
                const capital = re.capital
                const image = re.flags.png

                if(name?.toLowerCase().includes(input)){
                    main.innerHTML +=`
                    <div class="country" id="${name}">
                        <img src="${image}">
                        <div class="info">
                            <p class="title-name">${name}</p>
                            <p> <span class="title"> Population: </span>${poblacion}</p>
                            <p><span  class="title">Region: </span>${region} </p>
                            <p><span class="title">Capital: </span>${capital}</p>
                        </div>
                    </div>
                    `
                }
            })
        })).catch((err)=> main.innerHTML = `Try Again Later!`)
    }
})

filter()

