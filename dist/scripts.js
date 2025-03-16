var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { log } from "console";
const url = "https://back-t43i.onrender.com";
const apiVersion = "/api/v1";
const randomRoute = "/blagues/random";
const getRandomBlague = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apiUrl = url + apiVersion + randomRoute;
        log(apiUrl);
        const response = yield fetch(apiUrl, { method: "GET" });
        const blague = yield response.json();
        console.log(blague);
        return blague;
    }
    catch (error) {
        console.error("Erreur : ", error);
    }
});
const displayBlague = (blague) => {
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
    blagueQuestionElement === null || blagueQuestionElement === void 0 ? void 0 : blagueQuestionElement.appendChild(blagueQuestionNode);
    blagueResponseElement === null || blagueResponseElement === void 0 ? void 0 : blagueResponseElement.appendChild(blagueResponseNode);
};
const handleBlague = () => __awaiter(void 0, void 0, void 0, function* () {
    const blague = yield getRandomBlague();
    displayBlague(blague);
});
// Écouter le click sur le bouton
const blagueBtn = document.getElementById("blagueBtn");
blagueBtn === null || blagueBtn === void 0 ? void 0 : blagueBtn.addEventListener("click", handleBlague);
