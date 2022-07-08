const infoProductos = [
    { id: 1, name: "CUADRIL", price: 1180, stock: 10, img:"cuadril.jpg"},
    { id: 2, name: "PECETO", price: 1350, stock: 12, img:"peceto.jpg"},
    { id: 3, name: "COSTILLA", price: 1080, stock: 20, img:"costilla.jpg" },
    
  ];



  const info = document.getElementById("info");
  info.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");

  infoProductos.forEach((corte) => {
    const row = document.createElement("div");
    row.classList.add("col");
    row.innerHTML = `
      <div class="card h-100" id="item">
        <img src="img/${corte.img}" class="card-img-top" id="cardimg" alt="...">
        <div class="card-body">
          <h5 class="card-title">${corte.name}</h5>
          <p class="card-text">Precio = $${corte.price} el Kilo</p>
          <p class="card-text">Stock = ${corte.stock}</p>
          <a href="#" class="btn btn-primary" id="${corte.id}">Comprar</a>
        </div>
      </div>`;
  
    info.appendChild(row);


  })

      
  info.addEventListener("click", e =>{
    clickUsuario(e);
  })

  const clickUsuario = e => {
    
    const boton = e.target.classList.contains("btn")
    console.log(boton);
    if(boton === true){
      console.log("usted realizo una compra");
    }
    
  }



  

  

  

   
  