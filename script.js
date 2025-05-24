const products = [
    {
      name: "Association",
      price: "",
      type: "vetements",
      media: "picture.jpg",
      isVideo: false
    },
    {
      name: "Association",
      price: "",
      type: "accessoires",
      media: "video.mp4",
      isVideo: true
    },
    {
      name: "Association",
      price: "",
      type: "accessoires",
      media: "picture.jpg",
      isVideo: false
    },
    {
        name: "Association",
        price: "",
        type: "accessoires",
        media: "picture.jpg",
        isVideo: false
    },
    {
        name: "Association",
        price: "",
        type: "accessoires",
        media: "picture.jpg",
        isVideo: false
    },
    {
        name: "Association",
        price: "",
        type: "accessoires",
        media: "picture.jpg",
        isVideo: false
    }
  ];
 
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("search");
  const categoryFilter = document.getElementById("categoryFilter");
  
  function renderProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
  
    gallery.innerHTML = "";
  
    products
      .filter(p =>
        (selectedCategory === "all" || p.type === selectedCategory) &&
        p.name.toLowerCase().includes(searchTerm)
      )
      .forEach(p => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4";
  
        const card = document.createElement("div");
        card.className = "card h-100 shadow-sm";
  
        const media = p.isVideo
          ? `<video controls muted src="${p.media}" class="card-img-top"></video>`
          : `<img src="${p.media}" alt="${p.name}" class="card-img-top" />`;
  
        card.innerHTML = `
          ${media}
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text text-success fw-bold">${p.price}</p>
            <a href="https://wa.me/?text=Je suis intéressé par: ${encodeURIComponent(p.name)}"
               class="btn whatsapp-button mt-auto" target="_blank">WhatsApp</a>
          </div>
        `;
  
        col.appendChild(card);
        gallery.appendChild(col);
      });
  }
  
  searchInput.addEventListener("input", renderProducts);
  categoryFilter.addEventListener("change", renderProducts);
  window.addEventListener("DOMContentLoaded", renderProducts);
  