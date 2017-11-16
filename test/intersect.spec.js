const tap = require('./tap');
const { vec3 } = require('vmath');
const { intersect, ray, line, triangle } = require('../dist/geom-utils');

tap.test('intersect', t => {

  t.test('ray_triangle', t => {
    let r1 = ray.new(
      0, 0.5, 1,
      0, 0.0, -1
    );
    let t1 = triangle.new(
      0,    1, 0,
     -0.5, -1, 0,
      0.5, -1, 0
    );
    let out = vec3.create();
    let intersects = intersect.ray_triangle(r1, t1, out);

    t.assert(intersects);
    t.equal_v3(out , [0, 0.5, 0]);

    t.end();
  });

  t.test('line_triangle', t => {
    let l1 = line.new(
      0, 0.5, 1,
      0, 0.5, -1
    );
    let l2 = line.new(
      0, 0.2, 1,
      0, -0.2, -1
    );
    let t1 = triangle.new(
      0,    1, 0,
     -0.5, -1, 0,
      0.5, -1, 0
    );
    let out = vec3.create();
    let intersects = intersect.line_triangle(l1, t1, out);

    t.assert(intersects);
    t.equal_v3(out , [0, 0.5, 0]);

    intersects = intersect.line_triangle(l2, t1, out);
    t.assert(intersects);
    t.equal_v3(out , [0, 0.0, 0]);

    t.end();
  });

  t.test('line_quad', t => {
    let out = vec3.create();
    let intersects = intersect.line_quad(
      vec3.new(0, 0.5, 1),
      vec3.new(0, 0.5, -1),
      vec3.new(-0.5, 1, 0),
      vec3.new(-0.5, -1, 0),
      vec3.new(0.5, -1, 0),
      vec3.new(0.5, 1, 0),
      out
    );

    t.assert(intersects);
    t.equal_v3(out , [0, 0.5, 0]);

    t.end();
  });

  t.end();
});