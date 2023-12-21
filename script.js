let images = [
  'Screenshot 2023-12-21 100757.png',
  'Screenshot 2023-12-21 100853.png',
  'Screenshot 2023-12-21 101036.png',
  'Screenshot 2023-12-21 101128.png',
];
let githubLink = [
  'https://github.com/Git21221/PlayBeatz',
  'https://github.com/Git21221/JS-beginner-projects',
  'https://github.com/Git21221/IBMSkillsBuild',
  'https://github.com/Git21221/Blog-Full-Stack',
]

const imageContainer = document.querySelector('.imageContainer');

const img = document.createElement('img');

let temp = 0;
img.src = images[temp];
left.after(img);

left.addEventListener('click', () => {
  temp == 0 ? temp = images.length - 1 : temp--;
  img.src = images[temp];
  left.after(img);
})

right.addEventListener('click', () => {
  temp == images.length - 1 ? temp = 0 : temp++;
  img.src = images[temp];
  left.after(img);
})
view.addEventListener('click', () => {
  window.open(githubLink[temp]);
})



body.addEventListener('mousemove', () => {
  const rect = body.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / body.offsetWidth) * 100;
  const y = ((event.clientY - rect.top) / body.offsetHeight) * 100;

  gradient.style.left = x + "%";
  gradient.style.boxShadow = '10px 10px 300px 80px rgb(0, 112, 240)';
  gradient.style.top = y + "%";
})

works.addEventListener('mousemove', () => {
  const rect = works.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / works.offsetWidth) * 100;
  const y = ((event.clientY - rect.top) / works.offsetHeight) * 100;

  gradient_green.style.left = x + "%";
  gradient_green.style.boxShadow = '10px 10px 300px 80px rgba(94, 255, 0, 0.411)';
  gradient_green.style.top = y + 100 + "%";
})