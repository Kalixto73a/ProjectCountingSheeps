list1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
list2 = [false, false, false];
function countSheeps(list) {
  let verifyNumber = 0;
  let text = "UPS!!! Wolfs eaten Sheeps";
  for (let i = 0; i < list.length; i++) {
    let verify = list[i];
    if (verify) {
      verifyNumber++;
    }
  }
  if (verifyNumber >= 1) {
    text = `There are ${verifyNumber} sheep in total`;
  }
  console.log(text);
}
countSheeps(list1);
countSheeps(list2);
