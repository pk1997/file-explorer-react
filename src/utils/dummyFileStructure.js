import { FILETYPES, NOTAPPLICABLE } from './constants'
export let fileSystem = {
    '5848': {
        name: 'root',
        type: FILETYPES.folder,
        createdBy: 'root',
        createdOn: NOTAPPLICABLE,
        parent: '5848',
        size: '500kb',
        children: ['1139', '1138', '1137', '1136', '1135', '1134'],
        path: '/',
    },
    '1139': {
        name: 'Apps',
        type: FILETYPES.folder,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '5848',
        children: [],
        size: '500kb',
        path: '/apps'
    },
    '1138': {
        name: 'Pictures',
        type: FILETYPES.folder,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '5848',
        children: [],
        size: '500kb',
        path: '/pictures'
    },
    '1137': {
        name: 'Videos',
        type: FILETYPES.folder,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '5848',
        children: [],
        size: '500kb',
        path: '/videos'
    },
    '1136': {
        name: 'Docs',
        type: FILETYPES.folder,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '5848',
        size: '500kb',
        children: ['1133', '1132', '1131'],
        path: '/docs'
    },
    '1135': {
        name: 'a.pdf',
        type: FILETYPES.file,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '5848',
        children: [],
        size: '500kb',
        path: '/a.pdf'
    },
    '1134': {
        name: 'b.jpeg',
        type: FILETYPES.file,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '5848',
        children: [],
        size: '500kb',
        path: '/b.jpeg'
    },
    '1133': {
        name: 'Work',
        type: FILETYPES.folder,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '1136',
        size: '500kb',
        children: ['1130', '1129'],
        path: '/docs/work'
    },
    '1132': {
        name: 'c.pdf',
        type: FILETYPES.file,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '1136',
        children: [],
        size: '500kb',
        path: '/docs/c.pdf'
    },
    '1131': {
        name: 'd.docx',
        type: FILETYPES.file,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '1136',
        children: [],
        size: '500kb',
        path: '/docs/d.docx'
    },
    '1130': {
        name: 'e.pdf',
        type: FILETYPES.file,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '1133',
        children: [],
        size: '500kb',
        path: '/docs/work/e.pdf'
    },
    '1129': {
        name: 'f.ts',
        type: FILETYPES.file,
        createdBy: 'superman',
        createdOn: '28-12-2019',
        parent: '1133',
        children: [],
        size: '500kb',
        path: '/docs/d.docx'
    },

}