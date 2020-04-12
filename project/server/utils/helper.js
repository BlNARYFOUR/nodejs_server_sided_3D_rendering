function getParentFolder(dir) {
    return dir.split("\\").slice(0, -1).join("\\");
}

module.exports = {
    getParentFolder: getParentFolder
};