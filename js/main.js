function traer() {
    fetch('https://randomuser.me/api')
      .then(res => res.json())
      .then(res => {
         console.log(res)
         
         contenido.innerHTML= `
         <p>Nombre: ${res.results[0].name.first}   </p>
         <p>apellido: ${res.results[0].name.last}   </p>
         <p>cel: ${res.results[0].cell}   </p>
         <p>Phone: ${res.results[0].phone}   </p>
         <p>${res.results[0].picture.large}<p>
         <img src= "${res.results[0].picture.large}"  >
         `
      })
   }
   
   const { createApp } = Vue

   createApp({
     data() {
       return {
         user:{},
         url:'https://randomuser.me/api'
       }
     },
     methods: {
        fetchData(url) {  // necesite un async y await porque seguia de largo y no me cargaba el array recipes ni las listas desplegables
         fetch(url) 
           .then(response => response.json()) 
           .then(data => {
             console.log(data)
             this.user=data.results[0]
           })
           .catch(error=>alert("Ups... se produjo un error: "+ error))
       },
     },
    created() {
        this.fetchData(this.url)                                                       //   
    }

   }).mount('#app')