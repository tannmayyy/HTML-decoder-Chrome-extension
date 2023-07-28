// Interactive Lesson - Run Code
document.getElementById("runBtn").addEventListener("click", function () {
  const code = document.getElementById("codeEditor").value;
  const iframe = document.createElement("iframe");
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(code);
  document.getElementById("output").innerHTML = "";
  document.getElementById("output").appendChild(iframe);
});

// Code Challenge - Check Challenge
document.getElementById("challengeBtn").addEventListener("click", function () {
  const code = document.getElementById("challengeEditor").value;
  const challengeOutput = document.getElementById("challengeOutput");
  challengeOutput.innerHTML = "";

  try {
    eval(code);
    challengeOutput.innerHTML = "<span style='color: green;'>Challenge Passed!</span>";
  } catch (error) {
    challengeOutput.innerHTML = "<span style='color: red;'>Challenge Failed!</span>";
  }
});
