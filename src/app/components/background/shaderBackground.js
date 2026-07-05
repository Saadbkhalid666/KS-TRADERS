"use client";

import { useEffect, useRef } from "react";

export  function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    syncSize();

    const gl =
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    if (!gl) return;

    const vertexShaderSource = `
attribute vec2 a_position;

varying vec2 v_texCoord;

void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

    const fragmentShaderSource = `
precision highp float;

varying vec2 v_texCoord;

uniform float u_time;
uniform vec2 u_resolution;

void main() {

    vec2 uv = v_texCoord;

    float dist = distance(uv, vec2(0.8, 0.2));
    float gradient = smoothstep(0.6, 0.0, dist);

    vec3 color1 = vec3(1.0);
    vec3 color2 = vec3(0.898, 0.224, 0.208);

    vec3 finalColor = mix(
        color1,
        color2,
        gradient * 0.1 * (0.5 + 0.5 * sin(u_time * 0.5))
    );

    float wave = sin(uv.x * 10.0 + u_time) * 0.01;
    finalColor += wave;

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

    function compileShader(type, source) {
      const shader = gl.createShader(type);

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    const vertexShader = compileShader(
      gl.VERTEX_SHADER,
      vertexShaderSource
    );

    const fragmentShader = compileShader(
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "a_position");

    gl.enableVertexAttribArray(position);

    gl.vertexAttribPointer(
      position,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );

    const uTime = gl.getUniformLocation(program, "u_time");
    const uResolution = gl.getUniformLocation(program, "u_resolution");

    let animationFrame;

    const render = (time) => {
      syncSize();

      gl.viewport(0, 0, canvas.width, canvas.height);

      if (uTime) {
        gl.uniform1f(uTime, time * 0.001);
      }

      if (uResolution) {
        gl.uniform2f(uResolution, canvas.width, canvas.height);
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();

      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}