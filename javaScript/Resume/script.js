document.getElementById("downloadBtn").addEventListener("click", function () {
  const blob = new Blob([document.documentElement.outerHTML], {
    type: "text/html",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Arpit-Gupta-Resume.html";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});
