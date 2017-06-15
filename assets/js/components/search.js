

const searchItem = (pokemon, update)  => {
    const item      = $('<div class="item"></div>');
    const boxImg    = $('<div class=box-img></div>')
    const img       = $('<img src="http://serebii.net/art/th/'+pokemon.entry_number+'.png" class="responsive-img">');
    const div       = $('<div class="trapecio"></div>');
    const boxIcon   = $('<div class="box-icon"></div>');
    const pokebola  = $('<img src="assets/icon/pokeball_gray.png" alt="pokeball">');
    const heart     = $('<img src="assets/icon/valentines-heart.png" alt="valentines heart">');
    const data      = $('<img src="assets/icon/data.png" alt="data">');
    const nam       = $('<p class="center-align">'+pokemon.pokemon_species.name+'</p>');

    boxImg.append(img);
    item.append(boxImg);
    boxIcon.append(pokebola);
    boxIcon.append(heart);
    boxIcon.append(data);
    div.append(boxIcon);
    item.append(div);
    item.append(nam);
    img.on('click', (e) => {
        e.preventDefault();
        state.selectedPokemon = pokemon.pokemon_species.url;
        alert("Hola Mundo");
        update();

    })
    return item;
}

const reRender = (getValue, result, update) => {
    result.empty();
    if(getValue.length > 0) {
        getValue.forEach( findPokemon => {
            result.append(searchItem(findPokemon,update));
        })
    } else {
        const output = $('<p> No se encontró el pokemon a buscar...<p>');
        result.append(output);
    }
};


const Search = (update) => {

    const search = $('<section id="search"></section>');
    const box = $('<div class="nav-wrapper"</div>');
    const form = $('<form></form>');
    const div = $('<div class="input-field"</div>');
    const input = $('<input type="search" id="search" placeholder="Ingresa tu distrito a buscar">');
    const icon = $('<label class="label-icon" for="search"><i class="material-icons">search</i></label>');
    const result = $('<section id="result" class="row"></section>');
    div.append(icon);
    div.append(input);
    form.append(div);
    box.append(form);
    search.append(box);
    search.append(result);
    input.on('keyup', (e) => {
        if (input.val()) {
            const filterObt = filterByPokemon(state.pokemones.pokemon_entries, input.val());
            reRender( filterObt, result, update);
        }
    })
    return search;
}
