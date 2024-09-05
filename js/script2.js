// const dropArea = document.querySelector('.drop-section')
// const listSection = document.querySelector('.list-section')
// const listContainer = document.querySelector('.list')
// const fileSelector = document.querySelector('.file-selector')
// const fileSelectorInput = document.querySelector('.file-selector-input')

// // upload files with browse button
// fileSelector.onclick = () => fileSelectorInput.click()
// fileSelectorInput.onchange = () => {
//     [...fileSelectorInput.files].forEach((file) => {
//         if(typeValidation(file.type)){
//             uploadFile(file)
//         }
//     })
// }

// // when file is over the drag area
// dropArea.ondragover = (e) => {
//     e.preventDefault();
//     [...e.dataTransfer.items].forEach((item) => {
//         if(typeValidation(item.type)){
//             dropArea.classList.add('drag-over-effect')
//         }
//     })
// }
// // when file leave the drag area
// dropArea.ondragleave = () => {
//     dropArea.classList.remove('drag-over-effect')
// }
// // when file drop on the drag area
// dropArea.ondrop = (e) => {
//     e.preventDefault();
//     dropArea.classList.remove('drag-over-effect')
//     if(e.dataTransfer.items){
//         [...e.dataTransfer.items].forEach((item) => {
//             if(item.kind === 'file'){
//                 const file = item.getAsFile();
//                 if(typeValidation(file.type)){
//                     uploadFile(file)
//                 }
//             }
//         })
//     }else{
//         [...e.dataTransfer.files].forEach((file) => {
//             if(typeValidation(file.type)){
//                 uploadFile(file)
//             }
//         })
//     }
// }


// // check the file type
// function typeValidation(type){
//     var splitType = type.split('/')[0]
//     if(type == 'application/pdf' || splitType == 'image' || splitType == 'video'){
//         return true
//     }
// }

// // upload file function
// function uploadFile(file){
//     listSection.style.display = 'block'
//     var li = document.createElement('li')
//     li.classList.add('in-prog')
//     li.classList.add('in-prog')
//     li.innerHTML = `
//         <div class="col">
//             <img src="assets/${iconSelector(file.type)}" alt="">
//             <div class="n">
//             <div class="name">${fileName}</div>
//             <div class="file-size">ميجا ${(file.size/(1024*1024)).toFixed(2)}</div>
//             </div>
//         </div>
//         <div class="col">
//         <div class=up-selects>
//         <select name="" id="up-select1">
//         <option value="" disabled selected>القسم</option>
//         <option value="">1</option>
//         <option value="">2</option>
//         <option value="">3</option>
//         <option value="">4</option>
//         </div>
//         </select>

//         <select name="" id="up-select2">
//         <option value="" disabled selected>الصف</option>
//         <option value="">1</option>
//         <option value="">2</option>
//         <option value="">3</option>
//         <option value="">4</option>
//         </div>
//         </select>

        
//         <select name="" id="up-select3">
//         <option value="" disabled selected>رقم المقعد</option>
//         <option value="">1</option>
//         <option value="">2</option>
//         <option value="">3</option>
//         <option value="">4</option>
//         </div>
//         </select>
        
//         </div>
//         </div>
//         <div class="col">
//         <i class="fa-solid fa-x fa-xl X-icon"></i>
//         </div>
//     `
//     listContainer.prepend(li)
//     var http = new XMLHttpRequest()
//     var data = new FormData()
//     data.append('file', file)
//     http.onload = () => {
//         li.classList.add('complete')
//         li.classList.remove('in-prog')
//     }
//     http.upload.onprogress = (e) => {
//         var percent_complete = (e.loaded / e.total)*100
//         li.querySelectorAll('span')[0].innerHTML = Math.round(percent_complete) + '%'
//         li.querySelectorAll('span')[1].style.width = percent_complete + '%'
//     }
//     http.open('POST', 'sender.php', true)
//     http.send(data)
//     li.querySelector('.cross').onclick = () => http.abort()
//     http.onabort = () => li.remove()
// }
// // find icon for file
// function iconSelector(type){
//     var splitType = (type.split('/')[0] == 'application') ? type.split('/')[1] : type.split('/')[0];
//     return splitType + '.png'
// }













const dropArea = document.querySelector('.drop-section')
const listSection = document.querySelector('.list-section')
const listContainer = document.querySelector('.list')
const fileSelector = document.querySelector('.file-selector')
const fileSelectorInput = document.querySelector('.file-selector-input')

// upload files with browse button
fileSelector.onclick = () => fileSelectorInput.click()
fileSelectorInput.onchange = () => {
    [...fileSelectorInput.files].forEach((file) => {
        if(typeValidation(file.type)){
            uploadFile(file)
        }
    })
}

// when file is over the drag area
dropArea.ondragover = (e) => {
    e.preventDefault();
    [...e.dataTransfer.items].forEach((item) => {
        if(typeValidation(item.type)){
            dropArea.classList.add('drag-over-effect')
        }
    })
}
// when file leave the drag area
dropArea.ondragleave = () => {
    dropArea.classList.remove('drag-over-effect')
}
// when file drop on the drag area
dropArea.ondrop = (e) => {
    e.preventDefault();
    dropArea.classList.remove('drag-over-effect')
    if(e.dataTransfer.items){
        [...e.dataTransfer.items].forEach((item) => {
            if(item.kind === 'file'){
                const file = item.getAsFile();
                if(typeValidation(file.type)){
                    uploadFile(file)
                }
            }
        })
    }else{
        [...e.dataTransfer.files].forEach((file) => {
            if(typeValidation(file.type)){
                uploadFile(file)
            }
        })
    }
}


// check the file type
function typeValidation(type){
    if(type == 'application/pdf' ){
        return true
    }
}

// upload file function
function uploadFile(file){
    listSection.style.display = 'block'
    var li = document.createElement('li')
console.log(file.name.length)
    if (file.name.length >15 ){
    var fileName = file.name.substring(0,10)+"."+file.type.substring(12,15);
    }
    else{
        var fileName=file.name;
    }

    li.classList.add('in-prog')
    li.innerHTML = `
        <div class="col">
            <img src="assets/${iconSelector(file.type)}" alt="">
            <div class="n">
            <div class="name">${fileName}</div>
            <div class="file-size">ميجا ${(file.size/(1024*1024)).toFixed(2)}</div>
            </div>
            <div class="iconX">
            <i class="fa-solid fa-x fa-xl"></i>
            </div>
        </div>
        <div class="col">
        <div class=up-selects>
        <select name="" id="up-select1">
        <option value="" disabled selected>القسم</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        </div>
        </select>

        <select name="" id="up-select2">
        <option value="" disabled selected>الصف</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        </div>
        </select>

        
        <select name="" id="up-select3">
        <option value="" disabled selected>رقم المقعد</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        </div>
        </select>
        
        </div>
        </div>
        <div class="col">
        <i class="fa-solid fa-x fa-xl X-icon"></i>
        </div>
    `
    listContainer.prepend(li)
    var http = new XMLHttpRequest()
    var data = new FormData()
    data.append('file', file)
    http.onload = () => {
        li.classList.add('complete')
        li.classList.remove('in-prog')
    }
    li.querySelector('.X-icon').onclick = () => li.remove()
    li.querySelector('.iconX').onclick = () => li.remove()
}
// find icon for file
function iconSelector(type){
    var splitType = (type.split('/')[0] == 'application') ? type.split('/')[1] : type.split('/')[0];
    return splitType + '.png'
}