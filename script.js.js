document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('roupa-form');
    const tipoInput = document.getElementById('tipo-de-roupa');
    const tamanhoInput = document.getElementById('tamanho');
    const descricaoInput = document.getElementById('descricao');
    const precoInput = document.getElementById('preco');
    const fotoInput = document.getElementById('add-foto');
    const roupaListar = document.getElementById('roupa-listar');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const tipo = tipoInput.value.trim();
        const tamanho = tamanhoInput.value.trim();
        const descricao = descricaoInput.value.trim();
        const preco = precoInput.value.trim();
        const foto = fotoInput.files[0];

        if (tipo && tamanho && descricao && preco && foto) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imgSrc = event.target.result;

                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${tipo}</h4>
                    <p>Tamanho: ${tamanho}</p>
                    <p>Descrição: ${descricao}</p>
                    <p>Preço: ${preco}</p>
                    <img src="${imgSrc}" alt="Imagem da roupa" style="max-width: 100px; max-height: 100px;">
                `;
                roupaListar.appendChild(li);

                form.reset();
            };
            reader.readAsDataURL(foto);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});