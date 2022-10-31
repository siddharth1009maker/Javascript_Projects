const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = generateProfile(data);

nextProfile();

document.getElementById("next").addEventListener("click" , nextProfile);

function nextProfile()
{
    const res = profiles.next().value;
    console.log(res);

    if(res !== undefined)
    {
        document.getElementById("profileDisplay").innerHTML = `
        <ul class = "list-group">
          <li class= "list-group-item">${res.name}</li>
          <li class= "list-group-item">${res.age}</li>
          <li class= "list-group-item">${res.gender}</li>
          <li class= "list-group-item">${res.lookingfor}</li>
          <li class= "list-group-item">${res.location}</li>
        </ul>
        `;

        document.getElementById("imageDisplay").innerHTML = `
        <img src = "${res.image}" alt = "profileImage"></img>
        `;
    }
    else
    {
        window.location.reload();
    }
}


function generateProfile(data)
{
    let indexCount = 0 ;

    return {
        next:function()
        {
            return (indexCount<data.length) ? {value : data[indexCount++] , done : false } : {done : true};
        }
    };
}