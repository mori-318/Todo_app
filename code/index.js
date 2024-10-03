const todoInput = document.getElementById('task');


// todolistのtextを保管するリスト
const todoList = []

// タスクを表示する<ul>要素を取得または作成（再利用する）
const ul = document.createElement('ul');
document.body.appendChild(ul); // 必要な場所に<ul>を追加

const addTodo = (e) => {
    e.preventDefault();
    const todoText = todoInput.value;
    if (todoText === "") return;

    console.log(todoText)

    // todoListにinputされた内容を追加
    todoList.push(todoText)

    // 新しい<li>要素を作成し、todoListの最新のタスクを追加
    const li = document.createElement('li');
    li.textContent = todoText;

    ul.appendChild(li);

    todoInput.value = "";
}

// フォームのsubmitイベントにaddTodo関数を関連付ける
const form = document.getElementById('todo-form');
form.addEventListener('submit', addTodo);
