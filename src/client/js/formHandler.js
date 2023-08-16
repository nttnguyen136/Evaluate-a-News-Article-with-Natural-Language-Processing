import { checkForUrl } from "./urlChecker";

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

function updateView(resValue, error = null) {
  const agreement = document.getElementById("agreement");
  const confidence = document.getElementById("confidence");
  const irony = document.getElementById("irony");
  const model = document.getElementById("model");
  const score_tag = document.getElementById("score_tag");
  const subjectivity = document.getElementById("subjectivity");

  const errorEl = document.getElementById("error");

  if (error) {
    errorEl.innerHTML = error;

    agreement.innerHTML = "";
    confidence.innerHTML = "";
    irony.innerHTML = "";
    model.innerHTML = "";
    score_tag.innerHTML = "";
    subjectivity.innerHTML = "";
  } else {
    agreement.innerHTML = `Agreement: ${resValue.agreement}`;
    confidence.innerHTML = `Confidence: ${resValue.confidence}`;
    irony.innerHTML = `Irony: ${resValue.irony}`;
    model.innerHTML = `Model: ${resValue.model}`;
    score_tag.innerHTML = `Score Tag: ${resValue.score_tag}`;
    subjectivity.innerHTML = `Subjectivity: ${resValue.subjectivity}`;

    errorEl.innerHTML = "";
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let urlValue = document.getElementById("url").value;

  if (!urlValue) {
    alert("Url can not empty!");
    return;
  }

  if (!checkForUrl(urlValue)) {
    alert("Invalid URL, please try again!");
    return;
  }

  postData("http://localhost:8080/url", {
    url: urlValue,
  }).then((res) => {
    // Get only basic info
    console.log(res);
    if (res.status.code == 100) {
      updateView(null, JSON.stringify(res.status.msg));
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

    updateView(resValue, null);
  });
}

export { handleSubmit };
