interface File {
  name: string;
  size: number;
}

interface FolderParams {
  name: string,
  parent?: Folder
}

class Folder {
  public readonly name: string
  public readonly files: File[]
  public readonly folders: Folder[]
  public readonly parent?: Folder
  constructor(params: FolderParams){
    this.name = params.name;
    this.files = [];
    this.folders = [];
    this.parent = params.parent;
  }

  public size(): number {
    return this.files.reduce((prev, file) => {
      prev = prev + file.size;
      return prev
    }, 0) + this.folders.reduce((prev, folder) => {
      prev = prev + folder.size();
      return prev;
    }, 0)
  }
}

function findChildrenLess100k (folder: Folder, list: Folder[]) {
  for (const child of folder.folders) {
    if (child.size() <= 100000) {
      list.push(child);
    }
    findChildrenLess100k(child, list)
  }
}

export const findDirectorySizes = (commands: string[]) : number => {
  let root: Folder | undefined = undefined;
  let current: Folder | undefined = undefined;
  for (const command of commands) {
    const cdMatch = command.match(/^\$ cd ([/]|[a-z]+|\.{2})/)
    if (cdMatch) {
      const folderName = cdMatch[1]
      if ( folderName === '..') {
        if (!current) throw new Error('Oops');
        current = current.parent || current
      } else if ( folderName === '/') {
        if (!root) {
          const dir = new Folder({
            name: '/',
          })
          root = dir;
          current = dir;
        } else {
          current = root
        }
      } else {
        if (!current) throw new Error('Oops');
        current = current.folders.find((f) => f.name === folderName)
      }
    } else if (command.match(/^\$ ls/)) {
      //do nothing
    } else {
      const dirMatch = command.match(/^dir ([a-z]+)/)
      if (dirMatch) {
        const newDir = new Folder({
          name: dirMatch[1],
          parent: current
        })
        current?.folders.push(newDir);
      } else {
        const [size, name] = command.split(' ');
        current?.files.push({
          name,
          size: parseInt(size, 10)
        })
      }
    }
  }

  if (!root) throw new Error('No root');

  const less100k: Folder[] = []
  findChildrenLess100k(root, less100k)
  return less100k.reduce((prev, folder) => {
    prev = prev + folder.size();
    return prev;
  }, 0)
}