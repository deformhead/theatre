function update() {

    // console.log('update demo scene');

    this.systems.input.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);
    this.systems.reframe.update.call(this, this.world.entities);

    this.inputs.length = 0;
}

export {update};
