// let b = 1,
//   c = 1,
//   g = 0,
//   s = 0;
//   i = 0;

// const img = document.getElementById("image").src;

// if (img === "http://127.0.0.1:5500/ImageEditor/index.html") {
//   document.getElementById("image").style.display = "none";
// }

// function uploadImage() {
//   const file = document.getElementById("upload").files[0];
//   const fileURL = URL.createObjectURL(file);

//   document.getElementById("image").src = fileURL;
//   document.getElementById("image").style.display = "block";
//   document.getElementById("uploadLabel").style.display = "none";
//   applyFilter();
// }

// function applyFilter() {
//   document.getElementById("image").style.filter = `brightness(${b})
//                                                   constrast(${c})
//                                                   grayscale(${g}%)
//                                                   sepia(${g}%)
//                                                   invert(${i}%)`;
// }

// function changeBrightness() {
//   const value = document.getElementById("brightness").value;
//   b = (value * 2) / 100;
//   applyFilter();
// }
// function changeContrast() {
//   const value = document.getElementById("contrast").value;
//   c = (value * 2) / 100;
//   applyFilter();
// }
// function changeGrayscale() {
//   const value = document.getElementById("grayscale").value;
//   g = value;
//   applyFilter();
// }
// function changeSepia() {
//   const value = document.getElementById("sepia").value;
//   s = value;
//   applyFilter();
// }

// function changeInvert() {
//   const value = document.getElementById("invert").value;
//   i = value;
//   applyFilter();
// }

// function reset() {
//   b = 1;
//   c = 1;
//   g = 0;
//   s = 0;
//   i = 0;

//   applyFilter();
//   document.getElementById("brightness").value;
//   document.getElementById("contrast").value;
//   document.getElementById("grayscale").value;
//   document.getElementById("sepia").value;
//   document.getElementById("invert").value;
// }

// function download() {
//   if (img === "http://127.0.0.1:5500/ImageEditor/index.html") {
//     alert("Please Upload the Image First");
//     return;
//   }
//   if (!img.complete) {
//     alert("Image Upload is in Progress. Please wait...");
//     return;
//   }

//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");

//   // fetch the original width and height ofb the image

//   canvas.width = img.naturalWidth;
//   canvas.height = img.naturalHeight;

//   const filter = getComputedStyle(img).filter;

//   ctx.filter = filter === "none" ? "none" : filter;
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   const dataURL = canvas.toDataURL("image/png");
//   const anchorTag = document.createElement("a");
//   anchorTag.href = dataURL;
//   anchorTag.download = "editedImage.png";

//   document.body.appendChild(anchorTag);
//   anchorTag.click();
//   document.body.removeChild(anchorTag);
// }

let b = 1,
  c = 1,
  g = 0,
  s = 0,
  i = 0;

const img = document.getElementById("image");

// Hide image if empty
// changes_________________________________
if (!img.src) {
  img.style.display = "none";
}
// _____________________________

function uploadImage() {
  const file = document.getElementById("upload").files[0];
  const fileURL = URL.createObjectURL(file);

  // changes_______________________________________
  img.src = fileURL;
  img.style.display = "block";
  document.getElementById("uploadLabel").style.display = "none";
  applyFilter();
}

function applyFilter() {
  img.style.filter = `
    brightness(${b})
    contrast(${c})
    grayscale(${g}%)
    sepia(${s}%)
    invert(${i}%)
  `;
}
// ________________________________________________________________

function changeBrightness() {
  const value = document.getElementById("brightness").value;
  b = (value * 2) / 100;
  applyFilter();
}

function changeContrast() {
  const value = document.getElementById("contrast").value;
  c = (value * 2) / 100;
  applyFilter();
}

function changeGrayscale() {
  g = document.getElementById("grayscale").value;
  applyFilter();
}

function changeSepia() {
  s = document.getElementById("sepia").value;
  applyFilter();
}

function changeInvert() {
  i = document.getElementById("invert").value;
  applyFilter();
}

function reset() {
  b = 1;
  c = 1;
  g = 0;
  s = 0;
  i = 0;

  document.getElementById("brightness").value = 50;
  document.getElementById("contrast").value = 50;
  document.getElementById("grayscale").value = 0;
  document.getElementById("sepia").value = 0;
  document.getElementById("invert").value = 0;

  applyFilter();
}

function download() {
  if (!img.src || img.src === "") {
    alert("Please upload an image first!");
    return;
  }

  if (!img.complete) {
    alert("Image Uploading is in Progress. Please wait...");
    return;
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  ctx.filter = getComputedStyle(img).filter;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const dataURL = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = "editedImage.png";
  a.click();
}
