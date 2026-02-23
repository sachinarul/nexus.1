/**
 * Noble Nexus - Animated Background Shader
 * Premium WebGL2 implementation for hero section
 */

class WebGLRenderer {
    constructor(canvas, scale) {
        this.canvas = canvas;
        this.scale = scale;
        this.gl = canvas.getContext('webgl2');
        if (!this.gl) {
            console.error("WebGL2 not supported");
            return;
        }
        this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);

        this.vertexSrc = `#version 300 es
        precision highp float;
        in vec4 position;
        void main(){gl_Position=position;}`;

        this.shaderSource = `#version 300 es
        precision highp float;
        out vec4 O;
        uniform vec2 resolution;
        uniform float time;
        uniform vec2 move;
        uniform vec2 touch;
        uniform int pointerCount;
        uniform vec2 pointers[10];

        #define FC gl_FragCoord.xy
        #define T time
        #define R resolution
        #define MN min(R.x,R.y)

        float rnd(vec2 p) {
            p=fract(p*vec2(12.9898,78.233));
            p+=dot(p,p+34.56);
            return fract(p.x*p.y);
        }

        float noise(in vec2 p) {
            vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
            float a=rnd(i), b=rnd(i+vec2(1,0)), c=rnd(i+vec2(0,1)), d=rnd(i+1.);
            return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
        }

        float fbm(vec2 p) {
            float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
            for (int i=0; i<5; i++) {
                t+=a*noise(p);
                p*=2.*m;
                a*=.5;
            }
            return t;
        }

        float clouds(vec2 p) {
            float d=1., t=.0;
            for (float i=.0; i<3.; i++) {
                float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
                t=mix(t,d,a);
                d=a;
                p*=2./(i+1.);
            }
            return t;
        }

        void main(void) {
            vec2 uv=(FC-.5*R)/MN, st=uv*vec2(2,1);
            vec3 col=vec3(0);
            float bg=clouds(vec2(st.x+T*.1 + move.x*0.001, -st.y + move.y*0.001));
            
            // Interaction with mouse/touch
            float dist = length(uv - (touch.xy - 0.5 * R.xy) / MN);
            float interaction = 0.05 / (dist + 0.1);
            
            uv*=1.-.2*(sin(T*.1)*.5+.5);
            for (float i=1.; i<10.; i++) {
                uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.2+.1*uv.x);
                vec2 p=uv;
                float d=length(p);
                col+=.0015/d*(cos(sin(i)*vec3(1,2,3))+1.);
                float b=noise(i+p+bg*1.5);
                col+=.001*b/length(max(p,vec2(b*p.x*.02,p.y)));
                
                // Noble Nexus Signature Blue/Teal Palette
                vec3 themeColor = mix(vec3(0.016, 0.047, 0.145), vec3(0.078, 0.722, 0.651), i/10.0);
                col=mix(col, themeColor * bg, d * 0.5);
            }
            
            col += interaction * vec3(0.1, 0.3, 0.4) * bg;
            O=vec4(col, 1);
        }`;

        this.vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
        this.mouseMove = [0, 0];
        this.mouseCoords = [0, 0];
        this.pointerCoords = new Float32Array(20);
        this.nbrOfPointers = 0;
    }

    setup() {
        const gl = this.gl;
        if (!gl) return;
        this.vs = gl.createShader(gl.VERTEX_SHADER);
        this.fs = gl.createShader(gl.FRAGMENT_SHADER);

        gl.shaderSource(this.vs, this.vertexSrc);
        gl.compileShader(this.vs);

        gl.shaderSource(this.fs, this.shaderSource);
        gl.compileShader(this.fs);

        this.program = gl.createProgram();
        gl.attachShader(this.program, this.vs);
        gl.attachShader(this.program, this.fs);
        gl.linkProgram(this.program);
    }

    init() {
        const gl = this.gl;
        if (!gl || !this.program) return;
        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

        const pos = gl.getAttribLocation(this.program, 'position');
        gl.enableVertexAttribArray(pos);
        gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

        this.program.resolution = gl.getUniformLocation(this.program, 'resolution');
        this.program.time = gl.getUniformLocation(this.program, 'time');
        this.program.move = gl.getUniformLocation(this.program, 'move');
        this.program.touch = gl.getUniformLocation(this.program, 'touch');
        this.program.pointerCount = gl.getUniformLocation(this.program, 'pointerCount');
        this.program.pointers = gl.getUniformLocation(this.program, 'pointers');
    }

    updateScale(scale) {
        this.scale = scale;
        if (this.gl) this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
    }

    render(now = 0) {
        const gl = this.gl;
        if (!gl || !this.program) return;
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(this.program);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

        gl.uniform2f(this.program.resolution, this.canvas.width, this.canvas.height);
        gl.uniform1f(this.program.time, now * 1e-3);
        gl.uniform2f(this.program.move, ...this.mouseMove);
        gl.uniform2f(this.program.touch, ...this.mouseCoords);
        gl.uniform1i(this.program.pointerCount, this.nbrOfPointers);
        gl.uniform2fv(this.program.pointers, this.pointerCoords);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}

class PointerHandler {
    constructor(element, scale) {
        this.scale = scale;
        this.pointers = new Map();
        this.lastCoords = [0, 0];
        this.moves = [0, 0];

        const map = (x, y) => [x * this.scale, element.height - y * this.scale];

        element.addEventListener('pointerdown', e => {
            this.pointers.set(e.pointerId, map(e.clientX, e.clientY));
        });

        element.addEventListener('pointerup', e => {
            this.pointers.delete(e.pointerId);
        });

        element.addEventListener('pointermove', e => {
            const coords = map(e.clientX, e.clientY);
            this.lastCoords = coords;
            if (this.pointers.has(e.pointerId)) {
                this.pointers.set(e.pointerId, coords);
            }
            this.moves = [e.movementX, e.movementY];
        });
    }

    get first() {
        return this.pointers.size > 0 ? Array.from(this.pointers.values())[0] : [0, 0];
    }

    get coords() {
        const arr = new Float32Array(20);
        let i = 0;
        for (const c of this.pointers.values()) {
            if (i >= 20) break;
            arr[i++] = c[0];
            arr[i++] = c[1];
        }
        return arr;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-shader');
    if (!canvas) return;

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
    const renderer = new WebGLRenderer(canvas, dpr);
    const pointers = new PointerHandler(canvas, dpr);

    const resize = () => {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        renderer.updateScale(dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    renderer.setup();
    renderer.init();

    const loop = now => {
        renderer.mouseMove = pointers.moves;
        renderer.mouseCoords = pointers.first;
        renderer.pointerCoords = pointers.coords;
        renderer.nbrOfPointers = pointers.pointers.size;
        renderer.render(now);
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
});
