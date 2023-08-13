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
    console.log(res);
    if (res.status.code == 100) {
      document.getElementById("error").innerHTML = JSON.stringify(res.status.msg);
      return;
    }

    const resValue = {
      agreement: res.agreement,
      confidence: res.confidence,
      irony: res.irony,
      model: res.model,
      score_tag: res.score_tag,
      subjectivity: res.subjectivity,
    };

    document.getElementById("agreement").innerHTML = `Agreement: ${resValue.agreement}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${resValue.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${resValue.irony}`;
    document.getElementById("model").innerHTML = `Model: ${resValue.model}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${resValue.score_tag}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${resValue.subjectivity}`;
  });
}

export { handleSubmit };
