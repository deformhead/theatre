function render(delta) {

    // console.log('render demo scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#a8c0b0';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    const framerateEntity = this.world.get('framerate');

    framerateEntity.get('data').data.elapsed += delta;
    framerateEntity.get('data').data.frames += 1;

    if (framerateEntity.get('data').data.elapsed >= 1000) {

        framerateEntity.get('text').text = 'fps:' + Math.round(framerateEntity.get('data').data.frames * 1000 / framerateEntity.get('data').data.elapsed);
        framerateEntity.get('data').data.elapsed = 0;
        framerateEntity.get('data').data.frames = 0;
    }

    this.systems.render.update.call(this, this.world.entities);
    this.systems.text.update.call(this, this.world.entities);
}

export {render};
