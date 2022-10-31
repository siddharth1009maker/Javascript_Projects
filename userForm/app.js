document.getElementById("name").addEventListener("blur" , validateName);
document.getElementById("zip").addEventListener("blur" , validateZip);
document.getElementById("email").addEventListener("blur" , validateEmail);
document.getElementById("phone").addEventListener("blur" , validatePhone);
// document.getElementById("submitBtn").addEventListener("click",(e)=>{
//     e.preventDefault();
// });

document.getElementById("submitForm").addEventListener("click" , function(e){
//     let input = e.target;

//     input.setAttribute("data-bs-toggle" , "modal");
//     input.setAttribute("data-bs-target" , "exampleModal");

//     const output = `
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
    
//     console.log(input);

    // e.preventDefault();
});

function validateName()
{
    const name = document.getElementById("name");
    const re = /^[a-zA-z]{2,10}$/;

    if(!re.test(name.value))
    {
        name.classList.add("is-invalid");
    }
    else
    {
        name.classList.remove("is-invalid");
    }
}

function validateZip()
{
    const zip = document.getElementById("zip");

    const re = /^[0-9]{6}$/;

     if(!re.test(zip.value))
    {
        zip.classList.add("is-invalid");
    }
    else
    {
        zip.classList.remove("is-invalid");
    }

}

function validatePhone()
{
    const phone = document.getElementById("phone");

    const re = /^[0-9]{10}$/;

     if(!re.test(phone.value))
    {
        phone.classList.add("is-invalid");
    }
    else
    {
        phone.classList.remove("is-invalid");
    }
}

function validateEmail()
{
    const email = document.getElementById("email");
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value))
    {
        email.classList.add("is-invalid");
    }
    else
    {
        email.classList.remove("is-invalid");
    }
}