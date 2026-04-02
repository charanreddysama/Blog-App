### state management with zunstand

-redux or zunstand

1.install zustand
np i zustand

2.create a global store


10-3-2026

### fetch
//get
we should always check the status code is equal to 200 or not 
let resObj=await fetch("",{method:"GET})
if(res.status!==200){
    throw new Error("")
}
let res=await resObj.json() //message payload //this process is reduced

### axios
//GET
### let resObj=awai axios.get("")
let res=resObj.data; //the axisos data and  if the status code is not 200 it automatically throw the error

### POST 
let res=await axios.post("",obj)
let res=res.data

### hot Toaster

