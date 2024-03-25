function firstWord(s) {
  // your code here
	let s1=s.trim()
   let arr=s1.split(" ")
   return arr[0]
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
