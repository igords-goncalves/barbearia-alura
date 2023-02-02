ScrollReveal({ reset: true });

const header = {
    title: '.title-header',
    description: '.description',
    button: '.button-header'
}

const sectionAbout = {
    hitstory: '.text-history'
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

applyReveal(sectionAbout.hitstory, 200)

applyReveal(sectionServices.title, 250)
applyReveal(sectionServices.cards, 280)

applyReveal(sectionContact.title, 280)