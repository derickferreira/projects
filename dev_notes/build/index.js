"use strict";
// seleting items
const notesContainer = document.querySelector("#notes_container");
const exportBtn = document.querySelector("#export_btn");
const titleInput = document.querySelector("#title");
const textInput = document.querySelector("#note_text");
const createBtn = document.querySelector(".bi-plus");
const searchText = document.querySelector("#search_text");
const searchBtn = document.querySelector(".bi-search");
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
const generateId = () => Math.floor(Math.random() * 5000);
// To create elements with class name
const createElementWithClass = (tagName, ...classNames) => {
    const element = document.createElement(tagName);
    element.classList.add(...classNames);
    return element;
};
// To load datas from LocalStorage
const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
};
// To get all notes from LocalStorage
const getAllNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    return notes.sort((a, b) => (b.fixed ? 1 : 0) - (a.fixed ? 1 : 0));
};
// Update note in DOM
const updateNoteInDOM = (note, fixed) => {
    if (fixed) {
        note.classList.add("fixed");
    }
    else {
        note.classList.remove("fixed");
    }
};
// Add button functions
const addNoteButtonFunctions = (note, id) => {
    const deleteBtn = note.querySelector(".bi-x");
    const copyBtn = note.querySelector(".bi-copy");
    const pinBtn = note.querySelector(".bi-pin-angle");
    deleteBtn.addEventListener("click", () => {
        const notes = getAllNotes().filter((note) => note.id !== id);
        saveNotes(notes);
        note.remove();
    });
    copyBtn.addEventListener("click", () => {
        const text = note.querySelector(".text");
        navigator.clipboard.writeText(text.value).then(() => { });
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
const createNoteElement = (noteObject) => {
    const note = createElementWithClass("div", "note");
    const title = createElementWithClass("h3", "title");
    const text = createElementWithClass("textarea", "text");
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
    const titleValue = titleInput.value.trim();
    const textValue = textInput.value.trim();
    if (titleValue && textValue) {
        const noteObject = {
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
const searchNotes = (search) => {
    const notes = getAllNotes();
    const filteredNotes = notes.filter((note) => note.text.includes(search) || note.title.includes(search));
    notesContainer.innerHTML = "";
    filteredNotes.forEach((note) => {
        const noteElement = createNoteElement(note);
        notesContainer.appendChild(noteElement);
    });
};
// Event listeners
createBtn.addEventListener("click", processNote);
searchText.addEventListener("keyup", (event) => {
    searchNotes(event.target.value);
});
searchBtn.addEventListener("click", () => {
    searchNotes(searchText.value);
});
exportBtn.addEventListener("click", exportNotesToCSV);
// Start updating notes
renderNotes();
//# sourceMappingURL=index.js.map