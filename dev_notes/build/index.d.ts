declare const notesContainer: HTMLDivElement;
declare const exportBtn: HTMLButtonElement;
declare const titleInput: HTMLInputElement;
declare const textInput: HTMLTextAreaElement;
declare const createBtn: HTMLButtonElement;
declare const searchText: HTMLInputElement;
declare const searchBtn: HTMLButtonElement;
interface INote {
    id: number;
    title: string;
    text: string;
    fixed?: boolean;
}
type numberReturn = () => number;
declare const exportNotesToCSV: () => void;
declare const generateId: numberReturn;
declare const createElementWithClass: (tagName: string, ...classNames: string[]) => HTMLElement;
declare const saveNotes: (notes: INote[]) => void;
declare const getAllNotes: () => INote[];
declare const updateNoteInDOM: (note: HTMLDivElement, fixed: boolean) => void;
declare const addNoteButtonFunctions: (note: HTMLDivElement, id: number) => void;
declare const createNoteElement: (noteObject: INote) => HTMLDivElement;
declare const processNote: () => void;
declare const renderNotes: () => void;
declare const searchNotes: (search: string) => void;
//# sourceMappingURL=index.d.ts.map