module.exports = {
  // prettierのlint設定を記述
  printWidth: 120, // 1行の最大文字数
  tabWidth: 2,
  singleQuote: true, // シングルクオートのみ
  jsxSingleQuote: true,
  trailingComma: "all", // コンマ必須
  semi: false, // セミコロンなし
  parser: "typescript",
  jsxBracketSameLine: true, // JSX要素が複数行の時最後の>は最終行に書く(改行しない)
  arrowParens: "always", // アロー関数のカッコは省略しない
};
