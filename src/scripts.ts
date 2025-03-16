import { BlagueType } from "./types/blagueType";

const url = "http://localhost:3000";
const apiVersion = "/api/v1";
const randomRoute = "/blagues/random";

const getRandomBlague = async () => {
  try {
    const apiUrl = url + apiVersion + randomRoute;

    const response = await fetch(apiUrl, { method: "GET" });

    const blague = await response.json();
    console.log(blague);

    return blague;
  } catch (error) {
    console.error("Erreur : ", error);
  }
};

const displayBlague = (blague: BlagueType) => {
  const blagueQuestionElement = document.getElementById("questionBlague");
  if (blagueQuestionElement) {
    blagueQuestionElement.innerHTML = "";
  }
  const blagueQuestionNode = document.createTextNode(blague.question);

  const blagueResponseElement = document.getElementById("responseBlague");
  if (blagueResponseElement) {
    blagueResponseElement.innerHTML = "";
  }
  const blagueResponseNode = document.createTextNode(blague.response);

  blagueQuestionElement?.appendChild(blagueQuestionNode);
  blagueResponseElement?.appendChild(blagueResponseNode);
};

const handleBlague = async () => {
  const blague = await getRandomBlague();
  displayBlague(blague);
};

// Écouter le click sur le bouton
const blagueBtn = document.getElementById("blagueBtn");
blagueBtn?.addEventListener("click", handleBlague);
