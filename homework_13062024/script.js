function getNewClassFromArray(arr1, arr2) {

  const checkArr = [];

  if (typeof (arr2) !== "object") return false;

  for (let j = 0; j < arr2.length; j++) {
    checkArr.push(arr2[j])
  }

  for (let i = 0; i < arr1.length; i++) {
    if ((checkArr.indexOf(arr1[i]) < 0)) {
      return arr1[i];
    }
  }

 return false;
}

classesArr = ['class1', 'class2', 'class3']

const pEl = document.querySelector("p");
const btn = document.querySelector(".btn");


btn.onclick = () => {
const newClass = getNewClassFromArray(classesArr, pEl.classList);

if (!newClass) {
  pEl.classList.remove(...classesArr)
} else {
  pEl.classList.add(newClass);
}

}