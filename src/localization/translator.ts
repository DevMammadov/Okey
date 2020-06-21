export const translator = (lang: "az" | "en" | "ru", page: "main" | "item", other?: string[]) => {
  const langObj = require(`./lang/${lang}.json`);

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

  const _getDublicateKeys = (obj1: object, obj2: object) => {
    let dublicateKeys: string[] = [];
    Object.keys(obj1).map((key1) => {
      return Object.keys(obj2).map((key2) => {
        if (key1 === key2) {
          dublicateKeys.push(key2);
        }
        return dublicateKeys;
      });
    });
    return dublicateKeys;
  };

  const _getOtherPages = (page?: string, other?: string[] | undefined) => {
    let pageLang = _getPageLang(page);
    let notExists: string[] = [];
    let detectedOverloads: string[] = [];

    //detectedOverloads = [...detectedOverloads, ..._getDublicateKeys(langObj[page as string], langObj["main"])];

    if (other && other.length > 0 && page) {
      other.map((pg) => {
        if (
          Object.keys(langObj)
            .map((obj) => {
              return obj.toUpperCase();
            })
            .includes(pg.toUpperCase())
        ) {
          detectedOverloads = [
            ...detectedOverloads,
            ..._getDublicateKeys(pageLang, langObj[pg as keyof typeof langObj]),
          ];
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

    if (detectedOverloads.length > 0) {
      console.warn(`${window.location.pathname} \n "${detectedOverloads}" this keys was overloaded during translation`);
    }

    return pageLang;
  };

  return _getOtherPages(page, other);
};
