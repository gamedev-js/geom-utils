import { vec3 } from 'vmath';
import { mat3 } from 'vmath';

class _box {
  constructor(px, py, pz, l, w, h, o_0_x, o_0_y, o_0_z, o_1_x, o_1_y, o_1_z, o_2_x, o_2_y, o_2_z) {
    this.point = vec3.new(px, py, pz);
    this.size = [l, w, h];
    this.orientation = mat3.new(o_0_x, o_0_y, o_0_z, o_1_x, o_1_y, o_1_z, o_2_x, o_2_y, o_2_z);
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
 * @param {Number} l the half of box length
 * @param {Number} w the half of box width
 * @param {Number} h the half of box height
 * @param {Number} o_0_x the orientation vector coordinates
 * @return {box}
 */
box.new = function (px, py, pz, l, w, h, o_0_x, o_0_y, o_0_z, o_1_x, o_1_y, o_1_z, o_2_x, o_2_y, o_2_z) {
  return new _box(px, py, pz, l, w, h, o_0_x, o_0_y, o_0_z, o_1_x, o_1_y, o_1_z, o_2_x, o_2_y, o_2_z);
};

/**
 * clone a new box
 *
 * @param {box} a the source box
 * @return {box}
 */
box.clone = function (a) {
  return new _box(a.point, a.size, a.orientation);
};

/**
 * copy the values from one box to another
 *
 * @param {box} out the receiving box
 * @param {box} a the source box
 * @return {box}
 */
box.copy = function (out, a) {
  out.point = a.point;
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
box.set = function (out, px, py, pz, l, w, h, o_0_x, o_0_y, o_0_z, o_1_x, o_1_y, o_1_z, o_2_x, o_2_y, o_2_z) {
  out.point = vec3.new(px, py, pz);
  out.size = [l, w, h];
  out.orientation = mat3.new(o_0_x, o_0_y, o_0_z, o_1_x, o_1_y, o_1_z, o_2_x, o_2_y, o_2_z);

  return out;
};

export default box;
