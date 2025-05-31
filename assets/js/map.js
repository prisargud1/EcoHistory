import { FACTORIES } from "./FACTORIES.JS";

ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map("map-container", {
    center: [59.886862, 30.440258],
    zoom: 12,
    controls: ["zoomControl", "fullscreenControl"],
  });

  // Модальное окно
  const modal = document.getElementById("factoryModal");
  const closeBtn = modal.querySelector(".modal-close");
  const titleEl = document.getElementById("modalName");
  const activityEl = document.getElementById("modalActivity");
  const influenceEl = document.getElementById("modalInfluence");
  const galleryEl = document.getElementById("modalGallery");

  // Открыть модальное окно
  function openFactoryModal(factory) {
    // Заполнение контента в модальное окно
    titleEl.textContent = factory.name;
    activityEl.innerHTML = factory.activity;
    influenceEl.innerHTML = factory.influence;

    // Заполнение галереи
    galleryEl.innerHTML = "";
    if (Array.isArray(factory.images)) {
      factory.images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = factory.name;
        galleryEl.appendChild(img);
      });
    }

    // Убираем скролл основной страницы, фиксируем сдвиг
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add("modal-open");
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    modal.style.display = "flex";
  }

  // Закрыть модальное окно
  function closeFactoryModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = "";
  }

  closeBtn.addEventListener("click", closeFactoryModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeFactoryModal();
  });

  // Добавление меток
  FACTORIES.forEach((factory) => {
    if (!factory.coords) return;

    const placemark = new ymaps.Placemark(
      factory.coords,
      {
        hintContent: `${factory.name} <br> ${factory.address}`,
      },
      { preset: "islands#icon", iconColor: "#0095b6" }
    );

    placemark.events.add("click", () => openFactoryModal(factory));
    myMap.geoObjects.add(placemark);
  });
}
