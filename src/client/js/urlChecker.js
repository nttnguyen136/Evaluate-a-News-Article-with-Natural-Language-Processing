function checkForUrl(inputText) {
  console.log("::: Running checkForUrl :::", inputText);

  const pattern =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  const reg = new RegExp(pattern);

  return reg.test(inputText);
}

export { checkForUrl };
