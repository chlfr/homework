/* Фото галлерея

Давайте сделаем фотогалерея
у нас есть эндпоинт (https://jsonplaceholder.typicode.com/photos)  который возвращает массив фото
у каждого элемента есть albumId сгруппировать фото по этим параметрам и создать соответствующий альбом на странице затем альбом с другим  albumId и тд
изображения должны быть из thumbnailUrl
если изображение не может быть загружено то применить дефолтную картинку (на свой вкус)
при нажатии на соответствующую картинку должно открыться модальное окно с полным изображением которое хранится в url (стили так же должны быть)
 */

const url = "https://jsonplaceholder.typicode.com/photos";
const defaultImage =
  "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"; // url для дефолтного изображения

async function fetchPhotos() {
  // fetch для получения массива фотографий из api
  const response = await fetch(url);
  const photos = await response.json();
  return photos;
}
function groupPhotosByAlbum(photos) {
  // метод reduce для группировки фотографий albumId
  return photos.reduce((albums, photo) => {
    (albums[photo.albumId] = albums[photo.albumId] || []).push(photo);
    return albums;
  }, {});
}
function createGallery(photosByAlbum) {
  // функция создает галерею в html документе
  const gallery = document.getElementById("gallery");

  for (const albumId in photosByAlbum) {
    // итерация по альбомам
    const album = document.createElement("div");
    album.classList.add("album"); // добавление класса

    const title = document.createElement("div");
    title.classList.add("album-title");
    title.innerText = `Album ${albumId}`;
    album.appendChild(title);

    photosByAlbum[albumId].forEach((photo) => {
      // итерация по фотографиям в альбоме
      const photoDiv = document.createElement("div");
      photoDiv.classList.add("photo");

      const img = document.createElement("img");
      img.src = photo.thumbnailUrl || defaultImage; // установка источника изображения
      img.alt = photo.title;
      img.onclick = () => openModal(photo.url); // обработка клика

      photoDiv.appendChild(img);
      album.appendChild(photoDiv);
    });
    gallery.appendChild(album); // добавление альбома в галерею
  }
}
function openModal(url) {
  // функция открывает модальное окно и отображает изображение по указанному url
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = url;
  modal.classList.add("active"); // открытие модального окна
}
function closeModal() {
  // функция закрывает модальное окно
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
}
window.onclick = function (event) {
  // обработчик событий
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    // проверка события
    closeModal(); // закрытие модального окна
  }
};

fetchPhotos().then((photos) => {
  // инициализация
  const photosByAlbum = groupPhotosByAlbum(photos);
  createGallery(photosByAlbum);
});
