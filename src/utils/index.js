export function generateAvatar(
  text,
  foregroundColor = "white",
  backgroundColor = "black"
) {
  const canvas = document.createElement("canvas");

  //   download = document.getElementById("download");

  const context = canvas.getContext("2d");

  canvas.width = 40;

  canvas.height = 40;

  // Draw background

  context.fillStyle = backgroundColor;

  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text

  context.font = "20px Assistant";

  context.fillStyle = foregroundColor;

  context.textAlign = "center";

  context.textBaseline = "middle";

  context.fillText(text, canvas.width / 2, canvas.height / 2);

  //   download.href = canvas.toDataURL("image/png");

  return canvas.toDataURL("image/png");
}
