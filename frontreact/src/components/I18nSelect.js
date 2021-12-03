import React from "react";
import { LOCALES } from "../i18n/locales";

export const I18nSelect = ({ setLanguage }) => {
  return (
    <select
      className="select_language"
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value={LOCALES.SPANISH}>Español</option>
      <option value={LOCALES.ENGLISH}>English</option>
    </select>
  );
};
