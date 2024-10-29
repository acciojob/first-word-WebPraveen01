function firstWord(s) {
  s = s.trim();
    
    // Check if the string is empty
    if (s === "") {
        return "";
    }

    // Find the index of the first space
    const spaceIndex = s.indexOf(' ');

    // If there is no space, return the entire string; otherwise, return the substring before the space
    return spaceIndex === -1 ? s : s.substring(0, spaceIndex);
	
}

// Do not change the code below

const s = "see and stop"; // Replace prompt with a hard-coded string
console.log(firstWord(s)); // Use console.log to print the result

