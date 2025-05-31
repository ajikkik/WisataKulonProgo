
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (!targetSection) return;

    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth'
    });

    document.querySelectorAll('nav a.nav-link').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});


function fadeInOnScroll() {
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach(elem => {
    const elemTop = elem.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elemTop < windowHeight - 100) {
      elem.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Guestbook form
const guestForm = document.getElementById('guestForm');
const commentsDiv = document.getElementById('comments');

function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}


let selectedRating = 0;
const stars = document.querySelectorAll(".rating-stars span");

stars.forEach(star => {
  star.addEventListener("mouseover", () => {
    const val = parseInt(star.dataset.star);
    stars.forEach(s => s.classList.remove("hovered"));
    for (let i = 0; i < val; i++) stars[i].classList.add("hovered");
  });

  star.addEventListener("mouseout", () => {
    stars.forEach(s => s.classList.remove("hovered"));
  });

  star.addEventListener("click", () => {
    selectedRating = parseInt(star.dataset.star);
    stars.forEach(s => s.classList.remove("selected"));
    for (let i = 0; i < selectedRating; i++) stars[i].classList.add("selected");
  });
});

guestForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const messageInput = document.getElementById('message');
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    alert('Mohon isi nama dan pesan sebelum mengirim.');
    return;
  }

  const comment = document.createElement('div');
  comment.classList.add('comment');
  comment.innerHTML = `<strong>${escapeHTML(name)}</strong> <span>${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}</span><p>${escapeHTML(message)}</p>`;

  commentsDiv.prepend(comment);

  alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);
  guestForm.reset();
  stars.forEach(s => s.classList.remove("selected"));
  selectedRating = 0;
});


const destinationDetails = {
  kalibiru: {
    title: "Kalibiru",
    img: "https://i.pinimg.com/736x/c9/fd/28/c9fd2812118b5d76beed46c2595a98b6.jpg",
    description: `
      <p>Kalibiru adalah tempat wisata dengan pemandangan hutan hijau yang asri dan spot foto ikonik di atas pohon yang menawarkan panorama alam spektakuler.</p>
      <p><strong>Lokasi:</strong> Kalibiru, Hargowilis, Kokap, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta</p>
      <p>Kalibiru sangat cocok untuk para pecinta alam dan fotografi yang mencari pengalaman unik di ketinggian dengan udara segar.</p>
    `,
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.833710053722!2d110.12476208885495!3d-7.8074218999999845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aeff7861e0b91%3A0x5604e4ced3f4227e!2sWisata%20Kalibiru!5e0!3m2!1sen!2sid!4v1748004504486!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  baru: {
    title: "Pantai Glagah",
    img: "https://berjogja.com/wp-content/uploads/2025/02/Pantai-Glagah.jpg",
    description: `
      <p>Keindahan pantai Glagah Indah sudah terkenal sejak lama. Di Pantai Glagah Indah memiliki pemecah ombak. Pemecah ombak pantai Glagah Indah merupakan tempat yang sangat bagus untuk menikmati deburan ombak dan sunset di sore hari serta sunrise di pagi hari. Selain itu, di pemecah ombak pantai Glagah Indah juga terkenal sebagai salah satu spot mancing dan casting yang sangat populer di kalangan para pemancing dari jogja dan sekitarnya.</p>
      <p><strong>Lokasi:</strong> Desa Glagah, Kecamatan Temon, Kabupaten Kulon Progo, Provinsi Daerah Istimewa Yogyakarta, bersinggungan dengan Bandar Udara Internasional Yogyakarta.</p>
      <p>Hamparan pasir yang berwarna hitam dan banyak mengandung pasir besi. Pantai Glagah Indah memiliki akses yang baik. Selain tidak jauh dari jalan provinsi, jalan menuju pantai dan jalan di sepanjang pantai Glagah sudah beraspal.</p>
    `,
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126457.33715514545!2d109.99442106914049!3d-7.916805616341059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57876d285feb%3A0xc822d1a6a95e69be!2sGlagah%20Indah%20Beach!5e0!3m2!1sen!2sid!4v1748004732681!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  suroloyo: {
    title: "Puncak Suroloyo",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaxn61vNoQfXkAzV2E3__JnjuCNqvuZ-XkRMfuxl9j9FbpXlQDf-ldC1FXPiMguYT8QnWxhkywIXLIo_8T6y8gGEzwlxzzcC8JxBfMnTDCn3yFj5WiTd5uFd1cHVrceS0fyNHAupERqeI/s1600/51572_T00715_www_jogjainvest_jogjaprov_go_id_assets_file_puncak_suroloyo.jpg",
    description: `
      <p>Puncak Suroloyo merupakan titik tertinggi dengan panorama sunrise dan pemandangan pegunungan yang menakjubkan.</p>
      <p><strong>Lokasi:</strong> Objek wisata ini berada di puncak tertinggi di Kabupaten Dati Il Kulon Progo (kurang lebih 900m di atas permukaan air laut) dan merupakan wilayah perbatasan antara Provinsi D.I. Y dengan provinsi Jawa Tengah dan antara Kabupaten Dati Il Kulon Progo dengan Kabupaten Dati II Magelang.</p>
      <p>Untuk pendaki dan pecinta alam, tempat ini menawarkan ketenangan dan keindahan alam yang luar biasa.</p>
    `,
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.368603723748!2d110.1811376!3d-7.646307450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af2d144fd0c11%3A0xb15fc2d3a87b7512!2sSuroloyo%20Peak!5e0!3m2!1sen!2sid!4v1748004775797!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  }
};

function showDestinationDetail(placeKey) {
  if (!destinationDetails[placeKey]) return;
  const data = destinationDetails[placeKey];
  detailContentDiv.innerHTML = `
    <h3>${data.title}</h3>
    <img src="${data.img}" alt="${data.title}" />
    ${data.description}
    <h4>Peta Lokasi</h4>
    <div class="map-container">${data.mapEmbed}</div>
  `;
}

const destinationList = document.getElementById('destination-list');
const destinationDetailDiv = document.getElementById('destination-detail');
const detailContentDiv = document.getElementById('detail-content');
const btnBack = document.getElementById('btn-back');

destinationList.addEventListener('click', function(e) {
  if(e.target.classList.contains('btn-detail')) {
    const placeDiv = e.target.closest('.place');
    const placeKey = placeDiv.getAttribute('data-place');
    showDestinationDetail(placeKey);
    destinationList.style.display = 'none';
    destinationDetailDiv.style.display = 'block';
    destinationDetailDiv.classList.add('fade-in', 'visible');
    destinationDetailDiv.scrollIntoView({behavior: 'smooth'});
  }
});

btnBack.addEventListener('click', function() {
  destinationDetailDiv.style.display = 'none';
  destinationDetailDiv.classList.remove('visible', 'fade-in');
  destinationList.style.display = 'flex';
  destinationList.scrollIntoView({behavior: 'smooth'});
});




window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.style.display = 'none';
});


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});
document.querySelector(".modal .close").onclick = function () {
  modal.style.display = "none";
};


const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
