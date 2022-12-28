function shortcut (string) {
    let result =''
    string.split('').forEach(x => x != 'a'&& x != 'e'&& x != 'i'&& x != 'o'&& x != 'u' ? result += x:'')
    return result
  }