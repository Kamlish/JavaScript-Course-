const addButton = document.getElementById('add');

const localSData = () =>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value)
    })
    // Setting data to storage
    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (text = " ") => {
    const note = document.createElement('div');
    note.classList.add('note');
    
    const htmlData = `
    <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>

        <div class="main ${text ? " " : "hidden"}"> </div>
        <textarea class ="${text ? "hidden" : " "}" ></textarea>
    `;

    note.insertAdjacentHTML('afterbegin',htmlData)


    // getting the references
    const editButton = note.querySelector('.edit')
    const deleteButton = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    // deleting the node
    deleteButton.addEventListener('click', () => {
        note.remove();
        localSData();
});


    // Toggle using edit button
    textArea.value = text;
    mainDiv.innerHTML = text;

    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;

        localSData();
    })


    document.body.appendChild(note)
    // it append a node as the last child of a node
}

//Getting data from storage

const notes = JSON.parse(localStorage.getItem('notes'));
if(notes)
{
    notes.forEach((note) => addNewNote(note));
}


addButton.addEventListener('click', () => addNewNote() )