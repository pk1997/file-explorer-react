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

export const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}
export const deleteFolder = (child, fileSystem) => {
    const key = getKeyByValue(fileSystem, child)
    let childrenArrayOfParentFolder = fileSystem[child.parent].children
    let arrayOfChildrenAfterDeleting = childrenArrayOfParentFolder.filter(e => e !== key)
    fileSystem[child.parent].children = arrayOfChildrenAfterDeleting
    delete fileSystem[key]
    return fileSystem
}