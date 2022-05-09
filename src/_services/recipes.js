export const recipeService = {
  addRecipe,
  listRecipes,
  deleteRecipe,
};

async function addRecipe(title, description, imgLink, file, userId) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      description: description,
      imgLink: imgLink,
      file: file,
      userId: userId,
    }),
  };

  const response = await fetch(
    "https://localhost:5001/api/recipes/create",
    requestOptions
  );

  if (response.ok) return "ok";
}

async function deleteRecipe(id) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(
    "https://localhost:5001/api/recipes/delete?" +
      new URLSearchParams({ id: id }),
    requestOptions
  );

  if (response.ok) return "ok";
}

async function listRecipes() {
  const response = await fetch("https://localhost:5001/api/recipes/list");

  if (response.ok) {
    let result = await response.json();
    for (let i = 0; i < result.length; i++) {
      let postedTime = new Date(result[i].postedTime);
      postedTime.setHours(postedTime.getHours() + 3);
      result[i].postedTime = postedTime.toLocaleString("ru-RU");

      if (isURL(result[i].imgLink))
        result[i].imgLink = encodeURI(result[i].imgLink);

      let description = result[i].description;
      if (description.length > 500) result[i].longText = true;
    }

    return result;
  }
}

function isURL(str) {
  var pattern = new RegExp(
    "^((ft|htt)ps?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?" + // port
      "(\\/[-a-z\\d%@_.~+&:]*)*" + // path
      "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return pattern.test(str);
}
