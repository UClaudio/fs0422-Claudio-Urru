let button = document.querySelector("#saveButton")

class Post {
    constructor(nome, data, messaggio) {
        this.nome = nome;
        this.data = data;
        this.messaggio = messaggio;

        this.clonePost()
        this.changeAttribs()
    }

    clonePost() {
        let postsContainer = document.querySelector(".posts-container")
        let post = document.querySelector("#postClone")
        this.clone = post.cloneNode(true)
        this.clone.id = ""
        this.clone.className = "post row m-2"
        postsContainer.append(this.clone)
    }

    changeAttribs() {
        let postUser = this.clone.querySelector(".nome")
        let postMessage = this.clone.querySelector(".messaggio")
        let postDate = this.clone.querySelector(".data")

        postUser.textContent = this.nome
        postMessage.textContent = this.messaggio
        postDate.textContent = this.data

    }
}

window.onload = showPost()

function showPost() {
    fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(posts => {
            for (let post of posts) {
                post = new Post(post.nome, post.data, post.messaggio)
            }
        })
}



button.addEventListener("click", (e) => {
    e.preventDefault()
    let name = document.querySelector("#usernameInput").value
    let message = document.querySelector("#message")
    messageValue = message.value
    
    let [day, month, year] = new Date().toLocaleDateString("it").split("/");
    let [hour, minute] = new Date().toLocaleTimeString("en-US").split(/:| /);
    date = day + "-" + month + "-" + year + "  " + hour + ":" + minute
    if (name != "" && messageValue != "") {
        let post = new Post(name, date, messageValue)

        let option = {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "content-type": "application/json"
            }
        }
        fetch("http://localhost:3000/posts", option)
            .then(res => res.json())
        
            message.value = ""
    }

})

