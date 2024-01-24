function selectCreature(){

    let selected_creature = document.getElementById('creatureSelector').value;
    let info = document.getElementById('costumeInfo')

    switch (selected_creature) {
        case "Wizard":
            info.innerHTML = "🧙‍♂️\n Wizards should wear pointy hats and carry wands!"
            break;
        case "Dragon":
            info.innerHTML = "🐉\n Dragons should wear fiery costumes and breathe imaginary fire!";
            break;
        case "Fairy":
            info.innerHTML = "🧚\n Fairies should wear sparkly dresses and spread glitter magic!";
            break;
        case "Unicorn":
            info.innerHTML = "🦄\n Unicorns should wear horned headbands and have rainbow-colored manes!";
            break;
        default:
            info.innerHTML = "Hmm, I'm not sure what costume to give to this guest.";
    }
}