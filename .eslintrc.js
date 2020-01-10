module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base",
        "plugin:vue/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': ["error", {
            "html": {
                "void": "always",
                "normal": "always",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }],
        "vue/max-attributes-per-line": ["error", {
            "singleline": 3,
            "multiline": {
                "max": 3,
                "allowFirstLine": false
            }
        }],
        "indent": ["error", 4],
        "vue/singleline-html-element-content-newline": ["error", {
            "ignoreWhenNoAttributes": true,
            "ignoreWhenEmpty": true,
            "ignores": ["pre", "textarea", "div", "a"]
        }],
        "quotes": ["error", "double", { "avoidEscape": true }],
        "comma-dangle": ["error", "never"],
        "max-len": ["error", { "code": 150 }],
        "consistent-return": "off",
        "no-console": "off",
        "operator-linebreak": "off"
    }
};