export const antdNorm = (e: [] | { fileList: FileList }) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
}