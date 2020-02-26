import az from "./aze.json";
import ru from "./ru.json";

export const translator = (lang?: string | null) => {
  let lg = lang || localStorage.getItem("lang");

  switch (lg) {
    case "az":
      return az;
    case "ru":
      return ru;
    default:
      return az;
  }
};

export const setLang = (lang: string) => {
  localStorage.setItem("lang", lang);
};

export const getLang = (lang: string) => {
  localStorage.getItem("lang");
};
