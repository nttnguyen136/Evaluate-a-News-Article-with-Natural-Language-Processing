async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}

function handleSubmit(event) {
  event.preventDefault();

  let urlValue = document.getElementById("url").value;

  console.log("::: Form Submitted :::");

  postData("http://localhost:8088/url", {
    url: urlValue,
  }).then((res) => {
    document.getElementById("results").innerHTML = res.message;
  });
}

export { handleSubmit, onBlur };
