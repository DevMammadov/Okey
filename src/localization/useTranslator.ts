// import { useSelector } from "react-redux";
// import { IAppState } from "store/reducers";
import _ from "lodash";

export const useTranslator = (
  page?: "main" | "item" | "header",
  other?: string[] // other pages you want include to lang object
) => {
  const langState = "az"; //useSelector((state: IAppState) => state.header.lang)
  const langObj = require(`./lang/${langState}.json`);

  const _getPageLang = (page?: string) => {
    if (page && page.toLowerCase() === "main") {
      return langObj["main"];
    } else if (page && page.toLowerCase() !== "main" && Object.keys(langObj).includes(page)) {
      return { ...langObj["main"], ...langObj[page as keyof typeof langObj] };
    } else {
      let allLangs = {};
      Object.keys(langObj).map((key: string) => (allLangs = { ...allLangs, ...langObj[key] }));
      return allLangs;
    }
  };

  const _getCombinedPages = (page?: string, other?: string[] | undefined) => {
    let pageLang = _getPageLang(page);
    let notExists: string[] = [];

    if (other && other.length > 0 && page) {
      other.map((pg) => {
        if (
          Object.keys(langObj)
            .map((obj) => {
              return obj.toUpperCase();
            })
            .includes(pg.toUpperCase())
        ) {
          pageLang = { ...pageLang, ...langObj[pg as keyof typeof langObj] };
        } else {
          notExists.push(pg);
        }
        return pageLang;
      });
    }

    if (notExists.length > 0) {
      console.warn(`${window.location.pathname} \n "${notExists}" is not key of useTranslator Lang object`);
    }
    return pageLang;
  };

  return _getCombinedPages(page, other);
};
