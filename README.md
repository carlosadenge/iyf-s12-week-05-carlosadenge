# Week 5 – DOM Manipulation: Interactive To-Do List

**Student:** Carlos Adenge  
**Repository:** iyf-s12-week-05-carlosadenge

## Live Demo
[View Live Site](https://carlosadenge.github.io/iyf-s12-week-05-carlosadenge)

## About This Project
This is my Week 5 project for the IYF Wecan Academy Season 12.  
I built a fully interactive To-Do List using pure JavaScript and DOM manipulation.

## Features
- Add tasks with the button or Enter key
- Refuse empty or spaces-only tasks
- Toggle complete by clicking the task text
- Delete tasks with their own button
- Filter: All / Active / Completed
- Shows “X items left”
- Clear Completed button
- Bonus: Double-click to edit (Enter saves, Escape cancels)

## What I Learned

### Event Delegation
I learned to put **one** click listener on the parent list instead of adding a listener to every task.  
This way, new tasks that are added later still work without attaching new listeners.

### textContent vs innerHTML
I used `textContent` for anything the user types.  
This prevents HTML tags from being executed and keeps the page safe.

### Array of Objects
I kept all tasks in an array of objects (`{ id, text, completed }`) and re-rendered the list from that array every time something changed.

### preventDefault
I used `event.preventDefault()` on the form so the page does not reload when adding a task.

## Files
- `index.html` – To-Do List page (main deliverable)
- `styles.css` – Styles
- `app.js` – All JavaScript logic
- `dom-practice.html` – DOM practice page
- `dom.js` – Practice exercises
- `.gitignore`

## How to Run
1. Open the live link above, **or**
2. Open `index.html` with Live Server

## Technologies Used
- HTML5
- CSS3
- JavaScript (DOM, Events, Event Delegation)

## Contact
- **Email:** [carlosadenge@gmail.com](mailto:carlosadenge@gmail.com)
- **LinkedIn:** [Carlos Adenge](https://www.linkedin.com/in/carlosadenge)
- **GitHub:** [@carlosadenge](https://github.com/carlosadenge)
