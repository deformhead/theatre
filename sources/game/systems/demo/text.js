function text(entity) {

    const alphabetComponent = entity.get('alphabet');
    const positionComponent = entity.get('position');
    const textComponent = entity.get('text');

    textComponent.text.split('').forEach((character, index) => {

        this.context.drawImage(

            alphabetComponent.image,
            alphabetComponent.characters[character][0] * alphabetComponent.size[0], alphabetComponent.characters[character][1] * alphabetComponent.size[1], alphabetComponent.size[0], alphabetComponent.size[1],
            positionComponent.x + index * alphabetComponent.size[0], positionComponent.y, alphabetComponent.size[0], alphabetComponent.size[1]
        );
    });
}

export {text};
