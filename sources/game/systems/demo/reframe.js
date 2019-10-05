function reframe(entities) {

    Object.entries(entities).forEach(([name, entity]) => {

        entity.get('image').frame = entity.get('animation').current;
    });
}

export {reframe};
