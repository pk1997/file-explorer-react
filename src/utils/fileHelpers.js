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
    let children = {}
    childrenId.forEach(value => {
        children[value] = fileSystem[value]
    })
    return children
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

export const createNewFolder = (parent, data, fileSystem) => {
    let key = Math.floor((Math.random() * 10000) + 1)
    while (fileSystem[key]) {
        key = toString(Math.floor((Math.random() * 10000) + 1))
    }
    let folderData = {
        name: data.name,
        type: data.type,
        createdBy: data.creator,
        createdOn: data.date,
        parent: parent,
        children: [],
        size: data.size,
        path: fileSystem[parent].path === '/' ? `${fileSystem[parent].path}${data.name}` : `${fileSystem[parent].path}/${data.name}`,
    }
    let newFileSystem = fileSystem;
    newFileSystem[parent].children.push(key)
    newFileSystem[key] = folderData
    return newFileSystem
}