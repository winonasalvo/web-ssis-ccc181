const addImageInp = document.getElementById("add-image-inp")
let updateImageInp = document.getElementById("update-image-inp")
let studentID = ""

const addImage = () => addImageInp.click()
let updateImage = (studID) => {
    studentID = studID
    updateImageInp = document.getElementById("update-image-inp"+studentID)
    updateImageInp.click()
}

addImageInp.addEventListener("change", function(){
    const img = document.getElementById('add-selected-image')
    const file = this.files[0]
    if(file){
        let reader = new FileReader()
        reader.onload = function(){
            img.src = reader.result
            addImageInp.value = reader.result            
            //console.log("addImageInp.value", addImageInp.value)
        }
        if(file.type === 'image/png' || file.type === 'image/jpeg') {
            if(file.size > 5 * 1024 * 1024) {
                alert('Please select a file smaller than 5MB.')
                img.src = "../static/images/student-profile-template.png"
                addImageInp.value = "../static/images/student-profile-template.png"
                //console.log("addImageInp.value", addImageInp.value)
                return;
            }
            else{
                reader.readAsDataURL(file)
            }
        } else {
            alert('Please select a PNG or JPEG file.')
            img.src = "../static/images/student-profile-template.png"
            addImageInp.value = "../static/images/student-profile-template.png"
        }

    }
});

function updateDisplay(){
    let img = document.getElementById('displayed-image'+studentID)
    let file = updateImageInp.files[0]
    if (file){
        let reader = new FileReader()
        reader.onload = function(){
            img.src = reader.result
        }
    }

    if(file.type === 'image/png' || file.type === 'image/jpeg') {
        if(file.size > 5 * 1024 * 1024) {
            alert('Please select a file smaller than 5MB.')
            img.src = "../static/images/student-profile-template.png"
            return;
        }
        else{
            reader.readAsDataURL(file)
        }
    } else {
        alert('Please select a PNG or JPEG file.')
        img.src = "../static/images/student-profile-template.png"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.needs-validation');
    const imageContainer = form.querySelector('[data-ignore-validation]');

    form.addEventListener('submit', function(e) {
        if (!imageContainer.checkValidity()) {
            e.preventDefault();
            console.log('Image container is invalid');
        }
    });
});
