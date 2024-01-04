
var EmpData=[];
function getdata(){
axios.get('https://hub.dummyapis.com/employee')
.then((res)=>{
  var Data=(res.data)
  EmpData.push(...Data)
  console.log(EmpData)
  genUl(EmpData)
})
.catch((error)=>{
    console.log(error)
})

}
var search =document.getElementById('search');
function searching(){
var filteredpeople = EmpData.filter((person)=>{
    return (person.email.toLowerCase().startsWith(search.value.toLowerCase()) ||
            person.firstName.toLowerCase().startsWith(search.value.toLowerCase())
           ) 
})
genUl(filteredpeople)
}

function ace(){
   EmpData.sort((a,b)=>{
    return a.firstName.localeCompare(b.firstname)
   })
   genUl(EmpData)
}
function dce(){
    EmpData.sort((a,b)=>{
      return b.firstName.localeCompare(a.firstName)
    })
    genUl(EmpData)
}


function genUl(EmpData){
var tbody =document.getElementById('tbody');
tbody.innerHTML = '';
EmpData.forEach((emp,i)=>{
var newtr=document.createElement('tr');

var newid=document.createElement('td');
newid.innerHTML=emp.id;
newtr.appendChild(newid)

var newprofile = document.createElement('td');
var profileImage = document.createElement('img');
profileImage.src = emp.imageUrl;
profileImage.alt = 'Profile Image';
newprofile.appendChild(profileImage);
newtr.appendChild(newprofile);

var FirstNametd=document.createElement('td');
FirstNametd.innerHTML=emp.firstName;
newtr.appendChild(FirstNametd)

var lastnametd=document.createElement('td');
lastnametd.innerHTML=emp.lastName;
newtr.appendChild(lastnametd)

var agetd=document.createElement('td');
agetd.innerHTML=emp.age;
newtr.appendChild(agetd)

var dobtd=document.createElement('td');
dobtd.innerHTML=emp.dob;
newtr.appendChild(dobtd);

var emailtd=document.createElement('td');
emailtd.innerHTML=emp.email;
newtr.appendChild(emailtd)

var celltd=document.createElement('td');
celltd.innerHTML=emp.contactNumber;
newtr.appendChild(celltd);

var salarytd=document.createElement('td');
salarytd.innerHTML=emp.salary;
newtr.appendChild(salarytd);

var addresstd=document.createElement('td');
addresstd.innerHTML=emp.address;
newtr.appendChild(addresstd)

var deletetd=document.createElement('td');
var button=document.createElement('button');
button.innerHTML="Delete"
button.onclick = function() {
   var newdata=[...EmpData];
   newdata.splice(i,1);
   genUl(newdata)
}
deletetd.appendChild(button);
newtr.appendChild(deletetd)

tbody.appendChild(newtr)
console.log(newtr)
}) 
}

