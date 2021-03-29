import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translation as FR } from "./events/singleplayer/romeEventsFR"

function createNewObjToJsonify(obj) {
    const entries = Object.entries(obj);
    const objToJsonify = {};

    // TODO - can we refactor to avoid triple for-loop?
    for (const entry of entries) {
        const key = entry[0];
        const keyObject = obj[key];

        for (const keyOfValue of Object.keys(entry[1])) {
            if (keyOfValue === 'choices') {
                if (keyObject[keyOfValue] && keyObject[keyOfValue].length > 0) {
                    for (let i = 0; i < keyObject[keyOfValue].length; i++) {
                        const newKey = `${key}-buttonLabel${i}`
                        objToJsonify[newKey] = keyObject[keyOfValue][i]['buttonLabel'];
                    }
                }
            } else {
                const newKey = `${key}-${keyOfValue}`
                objToJsonify[newKey] = keyObject[keyOfValue]
            }
        }
    }
    return objToJsonify;
}

const objFR = createNewObjToJsonify(FR)

// the translations
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  fr: {
    translation: objFR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;