document.getElementById("button-1").addEventListener("click",getText);
document.getElementById("button-2").addEventListener("click",getJSON);

function getText()
{
    fetch("tet.txt")
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    });
}

function getJSON()
{
    fetch("posts.json")
    .then(function(res){
        if(!res.ok)
        {
            throw new Error("NETWORK RESPONSE WAS NOT OK");
        }
        return res.json() ;
    })
    .then(function(data){
        console.log(data);
        let output = ``;
        data.forEach(post=>{
            output+=`<ul>
            <li>${post.title}</li>
            <li>${post.body}</li>
            </ul>`
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(err){
        console.log("THE ERROR IS " , err);
    });
}