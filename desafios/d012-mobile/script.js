function verificar() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    let prod;
    if (!isMobile) {
        prod = window.prompt('Qual o produto deseja analisar hoje?');
        if (!prod) {
            alert(`Produto inválido. Por favor, digite um nome válido.`);
            document.querySelector('section#res').innerHTML = '';
            return;
        }
    } else {
        prod = 'o produto'; // texto fixo para mobile
    }

    let pre = Number(prompt('Qual era o preço do produto?'));
    let preatu = Number(window.prompt('Qual é o preço atual do produto?'));
    let res = document.querySelector('section#res');

    if (!pre || !preatu) {
        alert(`Dados inválidos. Por favor, digite preços válidos.`);
        res.innerHTML = '';
        return;
    }

    let dif = pre - preatu;
    let vari = dif * 100 / pre;

    res.innerHTML = `<p><strong>Analisando os valores informados</strong></p>`;

    if (pre > preatu) {
        res.innerHTML += `<p>Hoje ${prod} está mais barato.</p>`;
        res.innerHTML += `<p>O preço caiu R$ ${dif.toFixed(2)} em relação ao preço anterior.</p>`;
        res.innerHTML += `Uma variação de ${vari.toFixed(1)}% para baixo.`;
    } else {
        let aum = preatu - pre;
        let variaum = (aum * 100) / pre;
        res.innerHTML += `<p>Hoje ${prod} está mais caro.</p>`;
        res.innerHTML += `<p>O preço subiu R$ ${aum.toFixed(2)} em relação ao preço anterior.</p>`;
        res.innerHTML += `Uma variação de ${variaum.toFixed(1)}% para cima.`;
    }
}
