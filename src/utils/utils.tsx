export function getRandomLabel() {
  const labels = ['toothbrush', 'camera', 'banana', 'star', 'ice cream', 'lightning', 'fish', 'guitar', 'birthday cake']
  const index = Math.floor(Math.random() * 6);
  return labels[index]
}

export async function fetchPredictResult(image: any) {
  let formData = new FormData();
  formData.append('image', image);
  
  return fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: formData
  })
}
