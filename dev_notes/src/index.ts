// seleting items
const notesContainer = document.querySelector(
  "#notes_container"
) as HTMLDivElement;
const exportBtn = document.querySelector("#export_btn") as HTMLButtonElement;
const titleInput = document.querySelector("#title") as HTMLInputElement;
const textInput = document.querySelector("#note_text") as HTMLTextAreaElement;
const createBtn = document.querySelector(".bi-plus") as HTMLButtonElement;
const searchText = document.querySelector("#search_text") as HTMLInputElement;
const searchBtn = document.querySelector(".bi-search") as HTMLButtonElement;

// logic

interface INote {
  id: number;
  title: string;
  text: string;
  fixed?: boolean;
}

type numberReturn = () => number;

// CSV function
const exportNotesToCSV = () => {
  const notes = getAllNotes();
  const csvHeader = ["ID", "Title", "Text", "Fixed"];
  const csvRows = notes.map((note) => [
    note.id,
    note.title,
    note.text,
    note.fixed ? "Yes" : "No",
  ]);
  const csvContent = [csvHeader, ...csvRows]
    .map((row) => row.join(","))
    .join("\n");

  const downloadLink = document.createElement("a");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.setAttribute("download", "notes.csv");

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

// ID function
const generateId: numberReturn = () => Math.floor(Math.random() * 5000);

// To create elements with class name
const createElementWithClass = (
  tagName: string,
  ...classNames: string[]
): HTMLElement => {
  const element = document.createElement(tagName);
  element.classList.add(...classNames);
  return element;
};

// To load datas from LocalStorage
const saveNotes = (notes: INote[]): void => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// To get all notes from LocalStorage
const getAllNotes = (): INote[] => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]") as INote[];
  return notes.sort((a, b) => (b.fixed ? 1 : 0) - (a.fixed ? 1 : 0));
};

// Update note in DOM
const updateNoteInDOM = (note: HTMLDivElement, fixed: boolean) => {
  if (fixed) {
    note.classList.add("fixed");
  } else {
    note.classList.remove("fixed");
  }
};

// Add button functions
const addNoteButtonFunctions = (note: HTMLDivElement, id: number) => {
  const deleteBtn = note.querySelector(".bi-x") as HTMLButtonElement;
  const copyBtn = note.querySelector(".bi-copy") as HTMLButtonElement;
  const pinBtn = note.querySelector(".bi-pin-angle") as HTMLButtonElement;

  deleteBtn.addEventListener("click", () => {
    const notes = getAllNotes().filter((note) => note.id !== id);
    saveNotes(notes);
    note.remove();
  });

  copyBtn.addEventListener("click", () => {
    const text = note.querySelector(".text") as HTMLTextAreaElement;
    navigator.clipboard.writeText(text.value).then(() => {});
  });

  pinBtn.addEventListener("click", () => {
    const notes = getAllNotes();
    const targetNote = notes.find((note) => note.id === id);
    if (targetNote) {
      targetNote.fixed = !targetNote.fixed;
      saveNotes(notes);
      renderNotes();
      updateNoteInDOM(note, targetNote.fixed); // Update the note directly
    }
  });
};

// Create note element
const createNoteElement = (noteObject: INote): HTMLDivElement => {
  const note = createElementWithClass("div", "note") as HTMLDivElement;
  const title = createElementWithClass("h3", "title");
  const text = createElementWithClass(
    "textarea",
    "text"
  ) as HTMLTextAreaElement;
  const options = createElementWithClass("div", "options_controls");
  const deleteBtn = createElementWithClass("button", "bi", "bi-x");
  const copyBtn = createElementWithClass("button", "bi", "bi-copy");
  const pinBtn = createElementWithClass("button", "bi", "bi-pin-angle");

  title.innerText = noteObject.title;
  text.value = noteObject.text;

  options.appendChild(deleteBtn);
  options.appendChild(copyBtn);
  options.appendChild(pinBtn);

  note.appendChild(title);
  note.appendChild(text);
  note.appendChild(options);

  if (noteObject.fixed) {
    note.classList.add("fixed");
  }

  addNoteButtonFunctions(note, noteObject.id);

  return note;
};

// Process new note
const processNote = () => {
  const titleValue: string = titleInput.value.trim();
  const textValue: string = textInput.value.trim();

  if (titleValue && textValue) {
    const noteObject: INote = {
      id: generateId(),
      title: titleValue,
      text: textValue,
      fixed: false,
    };

    const notes = getAllNotes();
    notes.push(noteObject);
    saveNotes(notes);
    const noteElement = createNoteElement(noteObject);
    notesContainer.appendChild(noteElement);
    titleInput.value = "";
    textInput.value = "";
  }
};

// Render notes
const renderNotes = () => {
  notesContainer.innerHTML = "";
  const notes = getAllNotes();
  notes.forEach((note) => {
    const noteElement = createNoteElement(note);
    notesContainer.appendChild(noteElement);
  });
};

// Search notes
const searchNotes = (search: string) => {
  const notes = getAllNotes();
  const filteredNotes = notes.filter(
    (note) => note.text.includes(search) || note.title.includes(search)
  );
  notesContainer.innerHTML = "";
  filteredNotes.forEach((note) => {
    const noteElement = createNoteElement(note);
    notesContainer.appendChild(noteElement);
  });
};

// Event listeners
createBtn.addEventListener("click", processNote);

searchText.addEventListener("keyup", (event) => {
  searchNotes((event.target as HTMLInputElement).value);
});

searchBtn.addEventListener("click", () => {
  searchNotes(searchText.value);
});

exportBtn.addEventListener("click", exportNotesToCSV);

// Start updating notes
renderNotes();
