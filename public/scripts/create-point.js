// function loadUFs () {
//     /* Busca o elemento select que faz a seleção dos estados.*/
//     const ufSelect = document.querySelector('select[name=uf]')
//     console.log(ufSelect)
//     /* fetch() do tipo promise, pega os estados da api do ibge. */
//     fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
//     .then((response) => {
//         return response.json()
//     })
//     /* depois de transformar o arquivo em .json, passa cada um para o elemento selector. */
//     .then((states) => {
//         states.forEach((state) => {
//             ufSelect.innerHTML += `<option value = "${state.id}">${state.nome}</option>`
//         })
//     })
// }

function loadUFs() {
        const ufSelect = document.querySelector('select[name=uf]')
        const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
        
        populateSelect(url, ufSelect)
}

loadUFs()

document.querySelector('select[name=uf]')
        .addEventListener('change',(event) => {
            const citySelect = document.querySelector('select[name=city]')
            // Passando o valor em texto para um input, para então salvar no backend como texto
            const stateInput = document.querySelector('[name=state]')

            stateInput.value = event.target.options[indexOfSelect(event)].text
            
            const uf = event.target.value
            const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`

            disableSelect(citySelect,stateInput.value, url, citySelect)

            if(stateInput.value == 0){
                disableSelect(citySelect)
            } else {
                disableSelect(citySelect)
                populateSelect(url, citySelect)
            }
            
            
        })

function populateSelect(url, select) {
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        if(select.name == 'uf'){
            data.forEach((value) => {
                select.innerHTML += `<option value = "${value.id}">${value.nome}</option>`
            })
        } else {
            data.forEach((value) => {
                select.innerHTML += `<option value = "${value.nome}">${value.nome}</option>`
            })
        }
    })
    select.disabled = false
}

function disableSelect(select) {
        select.innerHTML = '<option value>Selecione a cidade</option>'
        select.disabled = true
}

function indexOfSelect(event){
    const indexOfSelect = event.target.selectedIndex
    return indexOfSelect
}

// Itens de coleta - selected
const itemsToCollect = document.querySelectorAll(".itens-grid li")

itemsToCollect.forEach((item) => {
    item.addEventListener("click", handleSelectedItemClick)
})

let selectedItem = []

function handleSelectedItemClick(event) {
    // Dessa forma, ao clicar no span ou na img, esses serão os elementos selecionados.
    // Para lidar com isso, no css(linha 127) desligaremos os eventos de pointer dos elementos span e img.
    event.target.classList.toggle('selected')
    const itemsInput = document.querySelector('input[name=items]')
    const itemId = event.target.dataset.id

    const alreadySelected = selectedItem.findIndex( (item) => {
        // findIndex percorre a lista até encontrar o valor, ou seja retorna true
        // Enquanto não retornar true, ela continua a percorrer.
        return item == itemId ? true : false
    })

    // alreadySelected será o valor do index do ID dentro do array. Se não tiver no array, ele será a -1.
    if(alreadySelected != -1) {
        const filteredItems = selectedItem.filter((item) => {
            return item != itemId ? true : false
            // Funciona de maneira parecida com o findIndex, porém ao contrário.
            // Quando o valor for falso, ou seja, os valores são iguais. Esse ID será removido do Array.
            // Caso contrário será mantido na nova lista.
        })
        selectedItem = filteredItems
    } else {
        selectedItem.push(itemId)
    }

    itemsInput.value = selectedItem
    const validateForm = document.querySelector('form button')
    if(itemsInput.value){
        validateForm.disabled = false
        validateForm.classList.value = ''
    } else {
        validateForm.disabled = true
        validateForm.classList.value = 'disabled'
    }
}