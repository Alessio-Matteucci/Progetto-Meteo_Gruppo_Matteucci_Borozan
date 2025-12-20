import * as THREE from 'three';

/**
 * Utility functions per conversioni coordinate lat/lon <-> vettori 3D
 * Coerente con SphereGeometry di Three.js
 */
export const coordinateUtils = {
  /**
   * Conversione LAT/LON -> vettore 3D
   * SphereGeometry genera i vertici così:
   *   x = -r cos(phi) sin(theta)
   *   y =  r cos(theta)
   *   z =  r sin(phi) sin(theta)
   * dove:
   *  - phi  = (lon + 180) in radianti (u = 0..1)
   *  - theta = (90 - lat) in radianti (v = 0..1)
   */
  latLonToVector3: (lat, lon, radius) => {
    const phi = THREE.MathUtils.degToRad(lon + 180);
    const theta = THREE.MathUtils.degToRad(90 - lat);

    const x = -radius * Math.cos(phi) * Math.sin(theta);
    const y = radius * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  },

  /**
   * Conversione vettore 3D (locale) -> LAT/LON
   */
  vector3ToLatLon: (vec) => {
    const r = vec.length();
    if (!r) return { lat: 0, lon: 0 };

    // Clamp numerico per sicurezza
    const y = THREE.MathUtils.clamp(vec.y / r, -1, 1);
    const theta = Math.acos(y); // 0..PI
    const lat = 90 - THREE.MathUtils.radToDeg(theta);

    // Inverso di:
    // x = -r cos(phi) sin(theta)
    // z =  r sin(phi) sin(theta)
    const phi = Math.atan2(vec.z, -vec.x); // -PI..PI (equivalente a 0..2PI)
    let lon = THREE.MathUtils.radToDeg(phi) - 180;

    // Normalizza a [-180, 180]
    lon = ((lon + 180) % 360 + 360) % 360 - 180;

    return { lat, lon };
  },

  /**
   * Formatta coordinate per visualizzazione
   */
  formatCoordinate: (value, posLabel, negLabel) => {
    const n = Number(value);
    const label = n >= 0 ? posLabel : negLabel;
    return `${Math.abs(n).toFixed(4)}°${label}`;
  },
};
