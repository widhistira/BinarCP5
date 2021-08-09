// //pilihan computer
// function getPilihanComputer() {
//     const computer = Math.random();
//     if (computer < 0.34) return `batu`;
//     if (computer >= 0.34 && computer < 0.67) return `kertas`;
//     return `gunting`;
//   }
  
//   //rule game
//   function getHasil(computer, player) {
//     if (player == computer) return `DRAW !`;
//     if (player == `batu`) return computer == `gunting` ? `YOU WIN !!!` : `COMPUTER WIN !!`;
//     if (player == `kertas`) return computer == `gunting` ? `COMPUTER WIN !!` : `YOU WIN !!!`;
//     if (player == `gunting`) return computer == `batu` ? `COMPUTER WIN !!` : `YOU WIN !!!`;
//   }
  
//   //fungction random gambar computer
//   function random() {
//     const gambarcomputer = document.querySelector('.pilihanComputer');
//     const gambar = ['batu', 'kertas', 'gunting'];
//     let i = 0;
//     const waktuAwal = new Date().getTime();
//     setInterval(function () {
//       if (new Date().getTime() - waktuAwal > 1000) {
//         clearInterval;
//         return;
//       }
//       gambarcomputer.setAttribute('src', 'assets/' + gambar[i++] + '.png');
//       if (i == gambar.length) i = 0;
//     }, 100);
//   }
  
//   //pilihan player dan computer
//   const pilihanPlayer = document.querySelectorAll('#player img');
//   pilihanPlayer.forEach(function (i) {
//     i.addEventListener('click', function () {
//       const pComputer = getPilihanComputer();
//       const pPlayer = i.className;
//       const hasil = getHasil(pComputer, pPlayer);
  
//       //pemanggilan fungsi putar gambar
//       random();
  
//       //set time out
//       setTimeout(function () {
//         const gambarComputer = document.querySelector('.pilihanComputer');
//         gambarComputer.setAttribute('src', 'assets/' + pComputer + '.png');
//         const vs = document.querySelector('#vs');
//         vs.innerHTML = `<p class="winner">${hasil}</p>`;
//       }, 1000);
//     });
//   });
  
//   //refresh
//   const tombol = document.querySelector('#refresh');
//   tombol.onclick = function () {
//     const vs = document.querySelector('#vs');
//     vs.innerHTML = `VS`;
//   };
  
//   let objectPlayer = document.querySelector('#player')
//   objectPlayer.addEventListener('click', (e) => {
//   objectPlayer.classList.add('active')
//   })