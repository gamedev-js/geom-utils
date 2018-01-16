const tap = require('./tap');
const { vec3 } = require('vmath');
const { intersect, ray, line, triangle, sphere, box } = require('../dist/geom-utils');

tap.test('intersect', t => {

  t.test('ray_triangle', t => {
    let r1 = ray.new(
      0, 0.5, 1,
      0, 0.0, -1
    );
    let t1 = triangle.new(
      0, 1, 0,
      -0.5, -1, 0,
      0.5, -1, 0
    );
    let out = vec3.create();
    let intersects = intersect.ray_triangle(r1, t1, out);

    t.assert(intersects);
    t.equal_v3(out, [0, 0.5, 0]);

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
      0, 1, 0,
      -0.5, -1, 0,
      0.5, -1, 0
    );
    let out = vec3.create();
    let intersects = intersect.line_triangle(l1, t1, out);

    t.assert(intersects);
    t.equal_v3(out, [0, 0.5, 0]);

    intersects = intersect.line_triangle(l2, t1, out);
    t.assert(intersects);
    t.equal_v3(out, [0, 0.0, 0]);

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
    t.equal_v3(out, [0, 0.5, 0]);

    t.end();
  });

  t.test('ray_sphere', t => {
    let r1 = ray.new(
      0, 0, 0,
      1, 1, 1
    );
    let s1 = sphere.new(2, 2, 2, 1);
    let out = vec3.create();
    let intersects = intersect.ray_sphere(r1, s1, out);

    t.assert(intersects);
    t.equal_v3(out, [2 - Math.sqrt(3) / 3, 2 - Math.sqrt(3) / 3, 2 - Math.sqrt(3) / 3]);

    t.end();
  });

  t.test('ray_box', t => {
    let r1 = ray.new(
      0, 0, 0,
      1, 0, 0
    );
    let axis_x = vec3.create();
    let axis_y = vec3.create();
    let axis_z = vec3.create();
    vec3.set(axis_x, 1, 0, 0);
    vec3.set(axis_y, 0, 1, 0);
    vec3.set(axis_z, 0, 0, 1);
    let box_point = vec3.create();
    vec3.set(box_point, 2, 1, 0);
    let ori_x = vec3.create();
    let ori_y = vec3.create();
    let ori_z = vec3.create();
    let ori_point = vec3.create();
    let angle = (-45) * Math.PI / 180;
    let ori_rot = vec3.create();
    vec3.rotateZ(ori_x, axis_x, ori_rot, angle);
    vec3.rotateZ(ori_y, axis_y, ori_rot, angle);
    vec3.rotateZ(ori_z, axis_z, ori_rot, angle);
    vec3.rotateZ(ori_point, box_point, ori_rot, angle);
    let b1 = box.new(
      ori_point.x, ori_point.y, ori_point.z,
      1, 1, 1,
      ori_x.x, ori_x.y, ori_x.z,
      ori_y.x, ori_y.y, ori_y.z,
      ori_z.x, ori_z.y, ori_z.z,
    );
    let out = vec3.create();
    let intersects = intersect.ray_box(r1, b1, out);
    t.assert(intersects);
    t.equal_v3(out, [Math.sqrt(2), 0, 0]);

    t.end();
  });

  t.end();
});