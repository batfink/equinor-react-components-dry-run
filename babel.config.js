module.exports = {
    "presets": ["@babel/env", "@babel/react"],
    "plugins": [
        "@babel/plugin-syntax-jsx",
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-transform-react-display-name",
        [ "babel-plugin-styled-components", { "pure": true } ],
        "@babel/plugin-proposal-object-rest-spread"
    ]
}
