import type { LanguageTypes } from "../../data/languages";
import { LanguageItem } from "./LanguageItem";
import { languages } from "../../data/languages";

export const Languages = () => {
  return (
    <div className="mb-10">
      <h3 className="title">Languages</h3>
      <ul>
        {languages.map((language: LanguageTypes) => (
          <LanguageItem {...language} key={language.type} />
        ))}
      </ul>
    </div>
  );
};
