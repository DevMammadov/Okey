import React, { FC } from "react";

interface IStyleWord {
  text: string;
  word?: string;
  az?: string;
  en?: string;
  ru?: string;
  style?: {};
}

export const StyleWord: FC<IStyleWord> = ({ text, az, ru, en, style, word }) => {
  const _findWord = () => {
    let newText: any;
    let langs = word ? [word] : [az, en, ru];

    langs.map((wrd) => {
      if (wrd && text.includes(wrd)) {
        let startIndex = text.search(wrd);
        let prevPart = text.slice(0, startIndex);
        let nextPart = text.slice(startIndex + wrd.length, text.length);
        newText = (
          <span>
            {prevPart}
            <span style={style}>{wrd}</span> {nextPart}
          </span>
        );
      }
      return newText;
    });

    return newText ? newText : text;
  };

  return <> {_findWord()} </>;
};
