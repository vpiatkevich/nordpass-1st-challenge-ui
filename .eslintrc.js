module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "mocha": true
    },
    "plugins": ["wdio"],
    "extends": [
        "eslint:recommended",
        "plugin:wdio/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    },
    "globals": {
        "document": true,
        "foo": true,
        "window": true
      }
}
