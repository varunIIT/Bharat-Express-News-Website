const key = '0401ac29891dfb63611da1c41032d2a0'
const country = 'in'
const lang = 'en'
const url = `https://gnews.io/api/v4/top-headlines?token=${key}&lang=${lang}&country=${country}`

let container = document.getElementById('box')

const xhttp = new XMLHttpRequest()
xhttp.open("GET", url, true)
xhttp.send()
xhttp.onload = () => {

    const data = JSON.parse(xhttp.response)
    const articles = data.articles
    console.log(articles)
    articles.forEach((element, index) => {
      
        container.innerHTML+=`
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">Breking news ${index+1}</strong>
                <h3 class="mb-0">
                <a class="text-dark" href="#">${element.title}</a>
                </h3>
                <div class="mb-1 text-muted">${element.publishedAt} -${element.source.name}</div>
                <p class="card-text mb-auto">${element.content}</p>
               
                <a href="${element.url}" target="_blank">Continue reading</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" src=${element.image} alt="Card image cap">
            </div>
            
        `
    })

}

