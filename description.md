
---

## ⬆️ **Drag and Drop List**

---

### 🧠 **Goal**

Create a **simple Kanban-style task manager** using **React** and **native HTML5 drag-and-drop API**, where tasks can be dragged across three columns:
**To Do**, **In Progress**, and **Done**.

---

### ✅ **Features to Implement**

* 🗂️ Columns:

  * **To Do**, **In Progress**, and **Done**
* 🖱️ Drag-and-drop behavior using **HTML5 API**
* 🔄 Tasks move between columns and update state
* 🧭 Dropping a task in its own column should keep it unchanged
* ❌ Dropping a task outside any column should not break the UI
* 🔁 Multiple task movements are supported
* ♿ Each column has an accessible heading

---

### ⚙️ **UI Identifiers for Testing**

| Element        | `data-testid`             |
| -------------- | ------------------------- |
| List container | `draggable-list`          |
| Task item      | `draggable-item-${index}` |

---

### 🧪 **Test Case Coverage**

| ✅ Test Case             | 🔍 What it Verifies                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------ |
| Initial render          | All default tasks and columns appear                                                 |
| Drag to another column  | Task moves to a new column and is visible there                                      |
| Drop in same column     | No changes to list if task dropped where it started                                  |
| Drop outside valid list | Task remains visible and UI stays intact                                             |
| Multiple drags          | Multiple tasks can be moved repeatedly across columns                                |
| Accessibility           | All three columns have semantic headings (e.g., `role="heading"`) for screen readers |

---

### ⚠️ **Edge Cases**

* Task dropped in same column: no UI/state change
* Task dropped outside any list: should be handled safely
* Each task must remain draggable regardless of column count

---

### 🧰 **Technologies Used**

* ⚛️ React (Functional Components + Hooks)
* 🧱 HTML5 Drag-and-Drop API
* 🧪 `@testing-library/react` for test coverage

---

