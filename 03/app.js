const file = document.querySelector("input");

file.addEventListener("change", readFile);

function readFile(e) {
  const fileList = Array.from(e.target.files);
  if (hasOnlyImg(fileList)) {
    fileList.forEach((file) => {
      const reader = new FileReader();
      showImages(file, reader);
      reader.readAsDataURL(file);
    });
  }
}

function hasOnlyImg(fileList) {
  let check;

  for (let ele of fileList) {
    if (ele && ele.type.includes("image")) {
      check = true;
    } else {
      check = false;
    }
  }

  return check;
}

function showImages(file, reader) {
  const imagesListLocation = document.querySelector(".images-list");
  const imagesListPrototype = document.querySelector(
    ".images-list__item--prototype"
  );
  const imagesList = imagesListPrototype.cloneNode(true);
  imagesList.classList.remove("images-list__item--prototype");

  const name = imagesList.querySelector(".images-list__item-name");
  const fileSize = imagesList.querySelector(".images-list__item-size");

  name.innerText = file.name;
  fileSize.innerText = (file.size / 1024^2).toFixed(2) + "MB";
  
  
  reader.onload = (readerEvent) => {
  const img = imagesList.querySelector(".images-list__item-img");
  img.src = readerEvent.target.result;
  };

  imagesListLocation.appendChild(imagesList);
}