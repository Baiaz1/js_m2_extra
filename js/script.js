const input = document.getElementById("press");
const area = document.querySelector(".area");

const arrayofPhones = [
  {
    country: "Kg",
    code: "+996",
  },
  {
    country: "Uz",
    code: "+998",
  },
];
let space = true;
let phoneMatched = "";

input.addEventListener("input", () => {
  phoneMatched = input.value.match(/[+0-9]+/);

  if (!space) {
    space = true;
    return;
  }

  for (key in arrayofPhones) {
    if (arrayofPhones[key].code === phoneMatched[0] && space) {
      area.innerHTML = arrayofPhones[key].country;
      input.value = input.value + " ";
      space = false;
      return;
    } else {
      area.innerHTML = "";
      space = true;
    }
  }
});

// space = false;
//             area.innerHTML = arrayofPhones[key].country;
