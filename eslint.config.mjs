import globals from "globals";


export default [
  {
    files: ["**/*.js"], 
    languageOptions: 
    {
      sourceType: "commonjs"
    }
  },
  {
    languageOptions: 
    {
      globals: {...globals.browser, ...globals.node}
    }
  },
  {
    "rules": {
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "none"
        }],
        "no-console": [
          "off"
        ]
    }
}
];
