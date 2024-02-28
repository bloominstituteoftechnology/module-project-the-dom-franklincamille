function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const section = document.querySelector("section");
  const div1 = section.querySelector(".quoteoftheday");
  const div2 = section.querySelector(".corporatespeak");
  const div3 = section.querySelector(".countdown");
  const div4 = section.querySelector(".friends");

  div1.classList.add("widget");
  div2.classList.add("widget");
  div3.classList.add("widget");
  div4.classList.add("widget");


  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  //console.log(quotes);
  const quoteDiv = document.createElement("div");
  const authorDiv = document.createElement("div");

  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQ = quotes[randomIndex];

  const quote = randomQ.quote
  const author = randomQ.author
  const date = randomQ.date

  quoteDiv.textContent = quote
  authorDiv.textContent = `${author} in ${date || 'an unknown date'}`
  //console.log(randomQ)

  div1.appendChild(quoteDiv);
  div1.appendChild(authorDiv);
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const speak = document.createElement("p");
  // console.log(verbs)
  // console.log(nouns)
  // console.log(adverbs)
  const randomV = Math.floor(Math.random() * verbs.length);
  const randomN = Math.floor(Math.random() * nouns.length);
  const randomA = Math.floor(Math.random() * quotes.length);

  const verb = verbs[randomV]
  const noun = nouns[randomN]
  const adverb = adverbs[randomA]

  speak.textContent = `We need to ${verb} our ${noun} ${adverb} in order to ${verb} our ${noun} ${adverb}.`

  div2.appendChild(speak)
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const count = document.createElement("p");
    
  let countdown = 5;
  count.textContent = `T-minus ${countdown}...`;
  
  
    const countdownInterval = setInterval(  () => {
      if (countdown > 1)  {
        countdown--
        count.textContent = `T-minus ${countdown}...`;
        
      }
      else {
        clearInterval(countdownInterval);
        count.textContent = "Liftoff! 🚀"
      }
    }, 1000)


  div3.appendChild(count)
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  //console.log(people);
  const friendss = document.createElement("p");
  const randomInd = Math.floor(Math.random() * people.length);

  const randomF = people[randomInd];

  const name1 = randomF.fname;
  const name2 = randomF.lname;
  const year = randomF.dateOfBirth.split('-')[0];

  //const person1 = randomF.
  let sentence = `${name1} ${name2} was born in ${year} and `
  
  if (!randomF.friends.length)  {
    sentence += "has no friends."
  }
  else {
    sentence += "is friends with "
    for (let i = 0; i < randomF.friends.length; i++)  {
      const friend1 = randomF.friends[i];
      const friend = people.find(p => p.id === friend1)
      const friendName = `${friend.fname} ${friend.lname}`

      let last = i === randomF.friends.length - 1
      let nxtLast = i === randomF.friends.length - 2
      if (last) {
        sentence += `${friendName}.`
      }
      else if (nxtLast) {
        sentence += `${friendName} and `
      }
      else {
        sentence += `${friendName}, `
      }


    }
  }
  friendss.textContent = sentence;

  div4.appendChild(friendss);
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  div1.tabIndex = 1;
  div2.tabIndex = 2;
  div3.tabIndex = 3;
  div4.tabIndex = 4;

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
