function text(entity) {

    const alphabetComponent = entity.get('alphabet');
    const positionComponent = entity.get('position');
    const textComponent = entity.get('text');

    textComponent.text.split('').forEach((character, index) => {

        this.context.drawImage(

            alphabetComponent.image,
            alphabetComponent.characters[character].x, alphabetComponent.characters[character].y, alphabetComponent.characters[character].width, alphabetComponent.characters[character].height,
            positionComponent.x + index * alphabetComponent.characters[character].width, positionComponent.y, alphabetComponent.characters[character].width, alphabetComponent.characters[character].height
        );
    });
}

export {text};
