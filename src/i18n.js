import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translation as romeEventsFR } from "./events/singleplayer/romeEvents/romeEventsFR";
import { translation as romeEventsEN } from "./events/singleplayer/romeEvents/romeEventsEN";
import fr from './locales/fr/fr.json';
import en from './locales/en/en.json';
import { KEYS } from "./constants";

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

// TODO - can we use separate objects? Explore react-i18next docs
// prepare french translations into one object for now
const finalRomeEventsFR = createNewObjToJsonify(romeEventsFR)
const objFR = Object.assign({}, finalRomeEventsFR, fr)

// prepare english translations into one object for now
const finalRomeEventsEN = createNewObjToJsonify(romeEventsEN)
const objEN = Object.assign({}, finalRomeEventsEN, en)

// the translations
const resources = {
  en: {
    translation: objEN
  },
  fr: {
    translation: objFR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: sessionStorage.getItem(KEYS.playerLanguage), // read what is stored whenever we refresh
    fallbackLng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;