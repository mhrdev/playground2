var a=1;

// TODO collision
if (this.pos.y === spaceship.pos.y) {
    if (this.pos.x >= spaceship.pos.x && this.pos.x <= spaceship.pos.x + 100)
        console.log('OK trafiony', spaceship.pos.x, spaceship.pos.y);
    }
