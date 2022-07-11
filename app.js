const infoProductos = [
    { id: 1, name: "CUADRIL", price: 1180, stock: 10, img:"cuadril.jpg"},
    { id: 2, name: "PECETO", price: 1350, stock: 12, img:"peceto.jpg"},
    { id: 3, name: "COSTILLA", price: 1080, stock: 20, img:"costilla.jpg"},
    { id: 4, name: "BIFE DE CHORIZO", price: 1400, stock: 20, img:"bife_de_chorizo.jpg"},
    { id: 5, name: "COLITA DE CUADRIL", price: 1200, stock: 20, img:"colita-cuadril.jpg"},
    { id: 6, name: "COSTELETA ESPECIAL", price: 950, stock: 25, img:"costeleta-especial.jpg"},
    { id: 7, name: "TAPA DE CUADRIL", price: 1250, stock: 28, img:"tapa-de-cuadril.jpg"},
    { id: 8, name: "TOMAHAWK", price: 1450, stock: 23, img:"tomahawk.jpg"},
    { id: 9, name: "VACIO", price: 1180, stock: 16, img:"vacio.jpg"}
    
  ];

  let carrito = [];


  const info = document.getElementById("info");
  info.classList.add("row", "row-cols-sm-2", "row-cols-md-3", "g-4");

  infoProductos.forEach((corte) => {
    const row = document.createElement("div");
    row.classList.add("col");
    row.innerHTML = `
      <div class="card h-100 my-3" id="item">
        <img src="img/${corte.img}" class="card-img-top" id="cardimg" alt="...">
        <div class="card-body bg-black text-bg-primary rounded">
          <h5 class="card-title">${corte.name}</h5>
          <p class="card-text">Precio = $${corte.price} el Kilo</p>
          <p class="card-text">Stock = ${corte.stock}</p>
          <a href="#" class="btn btn-dark bg-danger" id="${corte.id}">Comprar</a>
        </div>
      </div>`;
  
    info.appendChild(row);
    
  })


  info.addEventListener("click", e =>{
        clickUsuario(e);
      })

  const clickUsuario = e => {
    const boton = e.target
    const item = boton.classList.contains("btn");
      console.log(boton);
      
  }



  

  

  

   
  