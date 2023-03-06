let c = document.getElementById("can");
let ctx = c.getContext("2d");

const adjust_size = () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}


function fillCircle (x,y,radius, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2 * Math.PI);
    ctx.fill();
    ctx.restore();
};

class drawing {

    constructor() {
        this.x = 0;
        this.y = 0;
        return this;
    }

    set_x(x) {
        this.x = x;
        return this
    }

    set_y(y) {
        this.y = y;
        return this;
    }


    draw() {
        // defined later
    }
}

class Tree extends drawing {
    constructor(size) {
        
        super();    
        this.size = size;
        return this;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.size, this.size);
        fillCircle(0,0,1,'green');
        ctx.restore();
    }

    test() {
        console.log(this.x, this.y);
    }
}

// Tree.prototype = Object.create(drawing.prototype);
// Tree.prototype.constructor = Tree;
class world_engine {
    
    generate_random_coord() {
        let x = Math.floor(Math.random() * this.world_width);
        let y = Math.random(Math.random() * this.world_height);   
        return {
            "x": x,
            "y": y
        } ;
    }

    constructor() {
        console.log("constructing");
        this.trees = [];
        this.world_width = window.innerWidth;
        this.world_height = window.innerHeight;
        

        for (let i =0; i < 200; i++) {
            let c = this.generate_random_coord();
            this.trees.push(new Tree().set_x(c['x']).set_y(c['y']));
        }

        console.log(this.trees);
    }

    render() {
        this.trees.forEach(a => {
            console.log(a.x, a.y);
            a.draw();
        })
    }
}


adjust_size();

// draw(new Tree());
let e = new world_engine();
e.render();

