// referências
const app = document.querySelector("#app");

// funções

function Caixa() {
	const div = document.createElement("div");
	div.classList.add("caixa");
	return div;
}

// alterações na DOM
app.appendChild(Caixa());
app.appendChild(Caixa());
app.appendChild(Caixa());
app.appendChild(Caixa());
app.appendChild(Caixa());
app.appendChild(Caixa());
