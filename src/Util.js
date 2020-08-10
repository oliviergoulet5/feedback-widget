/** A function which validates files against allowed file extensions.
 * @param files a collection of files
 * */
export function validateFiles(files, allowedFiles) {
    return files.every(file => file.match(new RegExp('.(?:' + allowedFiles.join('|') + ')$'))); // Regex Ex: /*.(?:png|jpeg|txt)$
}

// does this work with linux files where extensions aren't necessary?
