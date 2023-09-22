// Code your solutions in this file
function writeCards(names, occasion) {
  const thankYouMessages = [];

  for (const name of names) {
    thankYouMessages.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }

  return thankYouMessages;
}

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}


