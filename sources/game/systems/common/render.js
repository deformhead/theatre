function render(entity) {

    const imageComponent = entity.get('image');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        imageComponent.image,
        imageComponent.frame.x, imageComponent.frame.y, imageComponent.frame.width, imageComponent.frame.height,
        positionComponent.x, positionComponent.y, imageComponent.frame.width, imageComponent.frame.height
    );
}

export {render};
