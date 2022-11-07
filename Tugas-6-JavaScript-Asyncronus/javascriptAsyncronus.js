//! Soal 1 ( Membuat Function promise sederhana dengan menerima inputan  )
function myCountPromise(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(name + 2 * 2);
    }, 2000);
  });
}
function callPromise(name) {
  setTimeout(function () {
    return name;
  }, 2000);
}
async function main() {
  let dialogPromise = callPromise("Maaf tidak ada nilai dalam parameter");
  console.log(dialogPromise);

  try {
    let dialogPromise = await myCountPromise("Hasil Perkalian ");
    console.log(dialogPromise);
  } catch (error) {
    console.log(error);
  }
}

main();
