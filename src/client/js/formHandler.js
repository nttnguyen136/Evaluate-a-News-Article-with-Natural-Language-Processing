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

  if (!urlValue) {
    alert("Url can not empty!");
    return;
  }

  postData("http://localhost:8080/url", {
    url: urlValue,
  }).then((res) => {
    // Get only basic info
    const resValue = {
      agreement: res.agreement,
      confidence: res.confidence,
      irony: res.irony,
      model: res.model,
      score_tag: res.score_tag,
      subjectivity: res.subjectivity,
    };

    document.getElementById("results").innerHTML = JSON.stringify(resValue);
  });
}

export { handleSubmit };
