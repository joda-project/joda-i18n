import {
  ONE,
  TWO,
  FEW,
  OTHER
} from "ember-i18n/config/constants";

export default {
  rtl: false,

  pluralForm(n) {
    if (n % 100 == 1) {
      return ONE;
    } else if (n % 100 == 2) {
      return TWO;
    } else if (n % 100 == 3 || n % 100 == 4) {
      return FEW;
    }
    return OTHER;
  }
};
