function romanToInt(s: string): number {
  let humanNumber = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const next_char = s[i + 1];
    const prev_char = s[i - 1];

    if (char == "M") {
      if (prev_char == "C") {
        humanNumber += 900;
      } else {
        humanNumber += 1000;
      }
    }
    if (char == "D") {
      if (prev_char == "C") {
        humanNumber += 400;
      } else {
        humanNumber += 500;
      }
    }
    if (char == "C") {
      if (next_char != "M" && next_char != "D") {
        if (prev_char == "X") {
          humanNumber += 90;
        } else {
          humanNumber += 100;
        }
      }
    }
    if (char == "L") {
      if (prev_char == "X") {
        humanNumber += 40;
      } else {
        humanNumber += 50;
      }
    }
    if (char == "X") {
      if (next_char != "L" && next_char != "C") {
        if (prev_char == "I") {
          humanNumber += 9;
        } else {
          humanNumber += 10;
        }
      }
    }
    if (char == "V") {
      if (prev_char == "I") {
        humanNumber += 4;
      } else {
        humanNumber += 5;
      }
    }
    if (char == "I") {
      if (next_char != "V" && next_char != "X") {
        humanNumber += 1;
      }
    }
  }
  console.log(humanNumber);
  return humanNumber;
}
romanToInt("MCMXCIV");
