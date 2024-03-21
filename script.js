let images = ["1.png", "2.png", "3.png", "4.png"];
let githubLink = [
  "https://github.com/Git21221/PlayBeatz",
  "https://github.com/Git21221/JS-beginner-projects",
  "https://github.com/Git21221/IBMSkillsBuild",
  "https://github.com/Git21221/Blog-Full-Stack",
];

const imageContainer = document.querySelector(".imageContainer");

const img = document.createElement("img");

let temp = 0;
img.src = images[temp];
left.after(img);

left.addEventListener("click", () => {
  temp == 0 ? (temp = images.length - 1) : temp--;
  img.src = images[temp];
  left.after(img);
});

right.addEventListener("click", () => {
  temp == images.length - 1 ? (temp = 0) : temp++;
  img.src = images[temp];
  left.after(img);
});
view.addEventListener("click", () => {
  window.open(githubLink[temp]);
});

const sendMail = () => {
  const sub = `${subject.value} from (${username.value})`;
  window.open(
    `mailto:saikatdas40g@gmail.com?body=${bodyofmail.value}&subject=${sub}`
  );
};
