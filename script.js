function firstWord(s) {
  s = str.trim();
    
    // Check if the string is empty
    if (str === "") {
        return "";
    }

    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');

    // If there is no space, return the entire string; otherwise, return the substring before the space
    return spaceIndex === -1 ? str : str.substring(0, spaceIndex);
	
}

// Do not change the code below

const s = prompt("see and stop");
firstWord(s);
