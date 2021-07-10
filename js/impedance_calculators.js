// impedance_calculators.js
// all dims in mm

// Open air microstip. All dims in meters.
// Formula from here https://www.allaboutcircuits.com/tools/microstrip-impedance-calculator/
function microstrip(w, t, h, e_r) {
    eta_0 = 376.730313; // impedance of free space
    eul = Math.E;
    pi = Math.PI;

    f1 = 4*eul / Math.sqrt(((t/h) ** 2) +((t/(w*pi+1.1*t*pi)) ** 2));
    f2 = (14*e_r+8)/(11*e_r);
    f3 = (e_r + 1)/(2*e_r);
    
    w_eff = w + (t/pi) * Math.log(f1) * f3;
    ratio = h/w_eff;

    x1 = 4 * f2 * ratio;
    x2 = Math.sqrt(16 * (ratio ** 2) * (f2 ** 2) + f3 * (pi ** 2));

    z_tmp = eta_0 / (2 * pi * Math.sqrt(2) * Math.sqrt(e_r + 1));
    z_0 = z_tmp * Math.log(1 + 4 * ratio * (x1 + x2));
    
    return z_0;
}