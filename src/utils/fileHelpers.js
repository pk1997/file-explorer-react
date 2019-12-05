import history from '../history'
export const filterFileSystemAccordingToPath = (path = '/', fileSystem) => {
    let file = null
    Object.values(fileSystem).forEach(value => {
        if (value.path === path) {
            file = value
        }
    });
    return file
}

export const getChildren = (childrenId, fileSystem) => {
    const filtered = Object.keys(fileSystem)
        .filter(key => childrenId.includes(key))
        .reduce((obj, key) => {
            obj[key] = fileSystem[key];
            return obj;
        }, {});
    return filtered
}

export const changePath = (path, updateFileSystem, fileSystem) => {
    history.push(path)
    updateFileSystem(filterFileSystemAccordingToPath(path, fileSystem), fileSystem)
}
