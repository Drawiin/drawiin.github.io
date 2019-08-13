let search = (user)=>{
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then((resp)=>{
        // console.log(resp.data[0].name)
        renderRepo(resp.data)
    })
    .catch((error)=>{
        console.warn(error)
        repoList.innerHTML = 'Usuário não encontrado'
    })
}

let renderRepo = (repos)=>{
    repoList.innerHTML = ''
    for(let repo of repos){
        let newRepo = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.innerHTML = 'acessar repositório'
        newLink.href = repo.html_url
        newLink.className = "badge badge-info"
        newRepo.innerHTML = repo.name + "  "
        newRepo.className = "list-group-item"
        newRepo.appendChild(newLink)
        repoList.appendChild(newRepo)
    }
}


let userName = document.querySelector('input#user-name')
let btnSearch = document.querySelector('button#btn')
let repoList = document.querySelector('ul#repo-list')
let btnGithubRepositoriesSerach = document.querySelector('button#btn-back')

btnGithubRepositoriesSerach.addEventListener('click', () =>console.log(window.location = '../index.html'))

btnSearch.addEventListener('click', ()=>{
    repoList.innerHTML = 'Carregando.........'
    search(userName.value)
})

userName.addEventListener('keyup', (event) =>{
    if(event.key === "Enter"){
        event.preventDefault()
        btnSearch.click()
    }
})