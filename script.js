let tarefas = [];
let indiceSelecionado = -1;

function adicionar() {
  let tarefa = document.getElementById("addTarefa").value;
  let objTarefa = {
    desc: tarefa,
    feito: false
  }

  document.getElementById("addTarefa").value = "";

  if (objTarefa.desc == "") {
    return alert("Preencha o campo tarefa");
  }
  if(indiceSelecionado == -1){
      tarefas.push(objTarefa);
      imprimeTarefas();
    }
    else {
        tarefas.splice(indiceSelecionado, 1, objTarefa)
        console.log(tarefas[indiceSelecionado].addTarefa)
        imprimeTarefas()
        indiceSelecionado = -1
    }
}

function imprimeTarefas() {
  let imprimeTarefa = document.getElementById("imprimeTarefa");
  imprimeTarefa.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    imprimeTarefa.innerHTML += `
        <div class="divTarefa">
            <input id="feito" onchange="toggleLine(event)" type="checkbox"><span>${tarefas[i].desc}</span>
            <div id="divBotoes">
              <img id="editImg" onclick="preparaAlterar(${i})">
              <img id="deleteImg" onclick="removeTarefa(${i})">
            </div>
        </div>
        `;
  }
  console.log(tarefas)
}

function toggleLine(e){
  let divPai = e.target.parentNode;
  let tarefaChecked = divPai.querySelector('span');    
  tarefaChecked.classList.toggle('lined')
}

function removeTarefa(posicao) {
  if (confirm("Tem certeza que deseja remover esta tarefa?")) {
    tarefas.splice(posicao, 1);
    imprimeTarefas();
  }
}

function preparaAlterar(i) {
  document.getElementById("addTarefa").value = tarefas[i].desc;
  indiceSelecionado = i;
}

