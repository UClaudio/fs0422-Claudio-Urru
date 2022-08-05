




class generateUsers {

    constructor(targetHTML, usersJson) {
        this.target = document.querySelector(targetHTML);
        this.users = usersJson;
        this.generateAll(this.users)
        
    }



    generateAll(json) {
        let userList = []
        fetch(json)
        .then((response) => response.json())
        .then((data) => {
            for (let utente of data) {
                userList.push(Object.entries(utente))
            }
            this.users = userList
            this.generateTable()
        })
        
    }

    generateTable() {
        let divTable = document.createElement("div")
        divTable.classList.add("table")
        this.target.appendChild(divTable)
        this.generateThead(divTable)
        this.generateTd(divTable)
        return divTable
    }

    generateThead(table) {
        let keys = []
        let thead = document.createElement("div")
        thead.classList.add("row", "mt-5")
        table.appendChild(thead)
        for (let key of this.users[0]) {
            let th = document.createElement("div")
            th.classList.add("col-2", "border", "border-dark")
            th.innerHTML = key[0]
            thead.appendChild(th)
        }
        
    }

    generateTd(table) {
        
        for (let i of this.users) {
            let tr = document.createElement("div")
            tr.classList.add("row")
            table.appendChild(tr)
            for (let value of i) {
                let td = document.createElement("div")
                td.classList.add("col-2", "td", "d-flex", "align-items-center", "border", "border-dark", "justify-content-center", value[0])
                if (value[0] === "profileURL" || value[0] === "email") {
                    let a = document.createElement("a")
                    if (value[0] === "profileURL") {
                        a.style.backgroundImage = `url("../${value[1]}")`
                        a.classList.add("image")
                        a.href = "#"
                    } else {
                        a.innerHTML = value[1]
                        a.href = "mailto:" + value[1]
                    }
                    td.appendChild(a)
                } else {
                    td.innerHTML = value[1]

                }
                tr.appendChild(td)
            }
        }
    }

}

function createTd() {

}



let userlist = new generateUsers(".section-lista", "../users.json");


