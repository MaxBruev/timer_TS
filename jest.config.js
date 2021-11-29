module.exports = {
    "roots": [
        "<rootDir>"
    ],
    "testMatch": [
        "**/test/**/*.test.(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.js?$": "babel-jest"
    }
}
