import html2canvas from "html2canvas";

export const takeScreenShot = (
  elementId,
  fileName,
  fileType,
  backgroundColor = "#000000"
) => {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  html2canvas(element, {
    backgroundColor: backgroundColor,
  })
    .then((canvas) => {
      let image = canvas.toDataURL(fileType);
      console.log("the image is ", image);

      const a = document.createElement("a");
      a.href = image;

      a.download = fileName;

      a.click();
    })
    .catch((err) => {
      console.error(
        "We cannot take the screenshot of your element at the moment."
      );
    });
};
