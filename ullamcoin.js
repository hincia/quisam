const controller = new AbortController();
const signal = controller.signal;
const url = "video.mp4";

try {
  const response = await fetch(url, { signal });
  console.log("Download complete", response);
} catch (error) {
  console.error("Download failed", error);
}
