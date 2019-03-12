function getCurrentTime() {
    return new Date().toLocaleString();
}

module.exports.tellTime = getCurrentTime;