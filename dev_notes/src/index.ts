// seleting items
const notesContainer = document.querySelector(
  "#note_create_container"
) as HTMLDivElement;
const titleInput = document.querySelector("#title") as HTMLInputElement;
const textInput = document.querySelector("#text") as HTMLTextAreaElement;
const createBtn = document.querySelector(".bi-plus") as HTMLButtonElement;

const searchText = document.querySelector("#search_text") as HTMLInputElement;
const searchBtn = document.querySelector(".bi-search") as HTMLButtonElement;
// logic

interface INote {
  title: string;
  text: string;
  fixed?: true;
}

type callBack = (ObjectNote: INote) => void;

const generateId = () => Math.floor(Math.random() * 5000);

const createElementWithClass = (tagName: string, ...classNames: string[]) => {
  const element = document.createElement(tagName);
  element.classList.add(...classNames);
  return element;
};

const addNoteButtonFunctions = (note: HTMLDivElement) => {
  const deleteBtn = note.querySelector(".bi-x") as HTMLButtonElement;
  const copyBtn = note.querySelector(".bi-copy") as HTMLButtonElement;
  const pinBtn = note.querySelector(".bi-pin-angle") as HTMLButtonElement;

  deleteBtn.addEventListener("click", () => {
    note.remove();
  });

  copyBtn.addEventListener("click", () => {
    const text = note.querySelector(".text") as HTMLTextAreaElement;
    navigator.clipboard.writeText(text.value).then(() => {
      console.log("Copied text!");
    });
  });

  pinBtn.addEventListener("click", () => {
    note.classList.add("fixed");
  });
};

const createNote = () => {
  const titleValue: string = titleInput.value.trim();
  const textValue: string = textInput.value.trim();

  const note = createElementWithClass("div", "note") as HTMLDivElement;
  const title = createElementWithClass("h3", "title");
  const text = createElementWithClass(
    "textarea",
    "text"
  ) as HTMLTextAreaElement;
  const options = createElementWithClass("div", ".options_controls");
  const deleteBtn = createElementWithClass("button", "bi", "bi-x");
  const copyBtn = createElementWithClass("button", "bi", "bi-copy");
  const pinBtn = createElementWithClass("button", "bi", "bi-pin-angle");

  title.innerText = titleValue;
  text.value = textValue;

  options.appendChild(deleteBtn);
  options.appendChild(copyBtn);
  options.appendChild(pinBtn);

  note.appendChild(title);
  note.appendChild(text);
  note.appendChild(options);

  notesContainer.append(note);

  addNoteButtonFunctions(note);

  titleInput.value = "";
  textInput.value = "";
};

const processNote: callBack = (callBack) => {};

// events
createBtn.addEventListener("click", () => {
  console.log("hi");
});
