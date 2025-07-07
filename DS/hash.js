class MyHashSet {
  constructor() {
    this.size = 1000;
    this.buckets = Array.from({ length: this.size }, () => []);
  }
  // Hash function
  _hash(key) {
    return key % this.size;
  }
  // Add key
  add(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let val of bucket) {
      if (val === key) return; // already present
    }

    bucket.push(key); // add to the bucket
  }
  // Remove key
  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    this.buckets[index] = bucket.filter((val) => val !== key);
  }
  // Check if key exists
  contains(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let val of bucket) {
      if (val === key) return true;
    }

    return false;
  }
}

const newHash = new MyHashSet();
newHash.add(2);
newHash.add(3);
console.log(newHash.contains(1));
console.log(newHash.contains(3));
console.log(newHash._hash(1));
