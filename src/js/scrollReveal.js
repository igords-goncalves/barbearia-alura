ScrollReveal({ reset: true });

const header = {
    title: '.title-header',
    description: '.description',
    button: '.button-header'
}

const sectionAbout = {
    hitstory: '.textHistory'
}

const sectionServices = {
    title: '.title-services',
    cards: '.cards'
}

const sectionContact = {
    title: '.title-contact',
    form: '.form'
}

function applyReveal(target, time) {
    ScrollReveal().reveal(target, {delay: time});
}

applyReveal(header.title, 100)
applyReveal(header.description, 100)
applyReveal(header.button, 100)

applyReveal(sectionAbout.hitstory, 200)

applyReveal(sectionServices.title, 250)
applyReveal(sectionServices.cards, 280)