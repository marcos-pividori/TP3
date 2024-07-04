const arrayDeObjetos = [
    {
        nombre: "",
        prducto: "",
    },
    {
        nombre: "",
        prducto: "",
    },
    {
        nombre: "",
        prducto: "",
    },
    {
        nombre: "",
        prducto: "",
    },
    {
        nombre: "",
        prducto: "",
    }
];

for(let i = 0; i < arrayDeObjetos.length; i++){
    console.log("nombre: " + arrayDeObjetos[i].nombre);
    console.log("Producto: " + arrayDeObjetos[i].prducto);
};

let card = document.getElementById("card-template");
arrayDeObjetos.map((x)=>{
    card.innerHTML += `<div class="col">
          <div class="card">
            <img src="${x.img}" class="card-img-top" alt="${x.nombre}">
            <div class="card-body">
              <h5 class="card-title">${x.nombre}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>´
});