function inherit(subType, superType) {
  let prototype = Object.create(superType);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

