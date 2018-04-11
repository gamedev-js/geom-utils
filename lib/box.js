import { vec3 } from 'vmath';
import { mat3 } from 'vmath';

class _box {
  constructor(px, py, pz, w, h, l, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3) {
    this.center = vec3.new(px, py, pz);
    this.size =  vec3.new(w, h, l);
    this.orientation = mat3.new(ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3);
  }
}

/**
 * @class box
 * @name box
 */
let box = {};

/**
 * create a new box
 *
 * @return {plane}
 */
box.create = function () {
  return new _box(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1);
};

/**
 * create a new box
 *
 * @param {Number} px X coordinates for box's original point
 * @param {Number} py Y coordinates for box's original point
 * @param {Number} pz Z coordinates for box's original point
 * @param {Number} w the half of box width
 * @param {Number} h the half of box height
 * @param {Number} l the half of box length
 * @param {Number} ox_1 the orientation vector coordinates
 * @return {box}
 */
box.new = function (px, py, pz, w, h, l, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3) {
  return new _box(px, py, pz, w, h, l, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3);
};

/**
 * clone a new box
 *
 * @param {box} a the source box
 * @return {box}
 */
box.clone = function (a) {
  return new _box(a.center, a.size, a.orientation);
};

/**
 * copy the values from one box to another
 *
 * @param {box} out the receiving box
 * @param {box} a the source box
 * @return {box}
 */
box.copy = function (out, a) {
  out.center = a.center;
  out.size = a.size;
  out.orientation = a.orientation;

  return out;
};

/**
 * Set the components of a box to the given values
 *
 * @param {box} out the receiving box
 * @param {Number} nx X component of n
 * @param {Number} ny Y component of n
 * @param {Number} nz Z component of n
 * @param {Number} d
 * @returns {box} out
 * @function
 */
box.set = function (out, px, py, pz, w, h, l, ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3) {
  out.center = vec3.new(px, py, pz);
  out.size = [w, h, l];
  out.orientation = mat3.new(ox_1, ox_2, ox_3, oy_1, oy_2, oy_3, oz_1, oz_2, oz_3);

  return out;
};

export default box;
