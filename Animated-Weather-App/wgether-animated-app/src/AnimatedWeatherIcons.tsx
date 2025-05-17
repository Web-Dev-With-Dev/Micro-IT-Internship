import { motion } from 'framer-motion';
import React from 'react';

export function AnimatedSunny() {
  return (
    <svg viewBox="0 0 64 64" width={88} height={88} fill="none">
      {/* Sun core */}
      <motion.circle
        cx="32" cy="32" r="14"
        fill="#FBD34A"
        initial={{ scale: 0.95 }}
        animate={{ scale: [0.95, 1.08, 0.95] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      {/* Sun rays */}
      <g>
        {[...Array(8)].map((_, i) => (
          <motion.rect
            key={i}
            x="31" y="5"
            width="2" height="10"
            rx="1"
            fill="#FBD34A"
            style={{ originX: 32, originY: 32 }}
            animate={{ rotate: 45 * i, scaleY: [1, 1.22, 1] }}
            transition={{
              rotate: { duration: 0, delay: 0 },
              scaleY: { repeat: Infinity, duration: 2, ease: 'easeInOut', delay: i * 0.13 },
            }}
          />
        ))}
      </g>
    </svg>
  );
}

export function AnimatedCloudy() {
  return (
    <svg viewBox="0 0 64 48" width={88} height={66} fill="none">
      {/* Back cloud */}
      <motion.ellipse
        cx="36" cy="32" rx="18" ry="12"
        fill="#CED6E0"
        initial={{ x: 0 }}
        animate={{ x: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      {/* Front cloud */}
      <motion.ellipse
        cx="24" cy="36" rx="15" ry="10"
        fill="#edf2fa"
        initial={{ x: 0 }}
        animate={{ x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }}
      />
    </svg>
  );
}

export function AnimatedRainy() {
  return (
    <svg viewBox="0 0 64 68" width={88} height={90} fill="none">
      {/* Cloud body */}
      <motion.ellipse
        cx="32" cy="30"
        rx="18" ry="12"
        fill="#b1c5e8"
        animate={{ x: [0, 7, -6, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
      <motion.ellipse
        cx="42" cy="35"
        rx="14" ry="9"
        fill="#dde8f6"
        animate={{ x: [0, -9, 4, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.7 }}
      />
      {/* Rain drops */}
      {[16, 26, 34, 44, 54].map((x, i) => (
        <motion.line
          key={x}
          x1={x}
          y1={44}
          x2={x - 2}
          y2={54}
          stroke="#3b82f6"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0.2, 1, 0],
            y: [0, 10, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.4 + i * 0.22,
            ease: 'easeIn',
            delay: i * 0.22,
          }}
        />
      ))}
    </svg>
  );
}

export function AnimatedSnowy() {
  // Static snow cloud with animated falling snowflakes
  return (
    <svg viewBox="0 0 64 70" width={88} height={98} fill="none">
      <motion.ellipse cx="36" cy="32" rx="18" ry="12" fill="#EEF2F7"
        animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 8 }} style={{ opacity: .9 }} />
      <motion.ellipse cx="26" cy="36" rx="14" ry="9" fill="#DDE1EA" animate={{ x: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 10, delay: 0.5 }} style={{ opacity: .9 }} />
      {/* Falling snowflakes */}
      {[12, 22, 34, 46, 56].map((x, i) => (
        <motion.circle key={x} cx={x} cy={56} r={2.3} fill="#B3D4FC" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0], cy: [46, 62, 70] }} transition={{ repeat: Infinity, duration: 2.2 + i * 0.31, delay: i * 0.19 }} />
      ))}
    </svg>
  );
}

export function AnimatedThunderstorm() {
  // Cloud, rain, and animated lightning
  return (
    <svg viewBox="0 0 64 76" width={88} height={106} fill="none">
      <motion.ellipse cx="36" cy="32" rx="18" ry="12" fill="#D2DAEA" animate={{ x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 10 }} style={{ opacity: .9 }} />
      <motion.ellipse cx="23" cy="38" rx="14" ry="9" fill="#EDF1F4" animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 12, delay: 0.3 }} style={{ opacity: .9 }} />
      {/* Lightning bolt */}
      <motion.polyline points="32,48 38,58 35,58 42,72" fill="none" stroke="#FFD700" strokeWidth={3.3} strokeLinejoin="round" strokeLinecap="round"
        animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} />
      {/* Rain lines */}
      {[27, 34, 42, 50].map((x, i) => (
        <motion.line key={x} x1={x} y1={56} x2={x - 2} y2={68} stroke="#5ba1f3" strokeWidth={2} strokeLinecap="round"
          initial={{ opacity: 0, y: 0 }} animate={{ opacity: [0.2, 1, 0], y: [0, 7, 10, 0] }} transition={{ repeat: Infinity, duration: 1 + i * 0.2, delay: i * 0.14 }} />
      ))}
    </svg>
  );
}

export function AnimatedFoggy() {
  // Cloud and animated fog lines
  return (
    <svg viewBox="0 0 64 60" width={88} height={76} fill="none">
      <ellipse cx="38" cy="32" rx="17" ry="11" fill="#CDD6E5" opacity={0.8} />
      <ellipse cx="25" cy="37" rx="12" ry="8" fill="#f3f6fa" opacity={0.85} />
      {/* Fog lines */}
      {[46, 52, 58].map((y, i) => (
        <motion.rect key={i} x={20} y={y} width={24} height={2.8} rx={1.4} fill="#b3c1d1"
          animate={{ opacity: [0.1, 0.4, 0.1], x: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 7 + i, delay: i * 0.2 }} />
      ))}
    </svg>
  );
}

export function AnimatedWindy() {
  // Minimalist wind lines and moving dashes
  return (
    <svg viewBox="0 0 70 38" width={90} height={54} fill="none">
      <motion.path d="M10 20 Q28 10 50 20 T 70 20" stroke="#79b7e7" strokeWidth={3} fill="none"
        animate={{ pathLength: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 4 }} />
      <motion.circle cx={24} cy={19} r={3.2} fill="#a7cdfa" animate={{ x: [0, 7, 0] }} transition={{ duration: 2.4, repeat: Infinity }} />
      <motion.circle cx={44} cy={19} r={2.7} fill="#bcdef7" animate={{ x: [0, -10, 0] }} transition={{ duration: 1.9, repeat: Infinity }} />
    </svg>
  );
}

export function AnimatedMoonNight() {
  // Crescent moon with animated twinkling stars
  return (
    <svg viewBox="0 0 64 56" width={88} height={77} fill="none">
      {/* Crescent moon */}
      <motion.ellipse cx={36} cy={34} rx={12} ry={12} fill="#ffd98a" animate={{ rotate: [0, 16, 0] }} transition={{ repeat: Infinity, duration: 8 }} />
      <ellipse cx={31} cy={34} rx={9.5} ry={10.2} fill="#e2ca6f" />
      {/* Twinkling stars */}
      {[{x:18,y:16,d:.6},{x:54,y:19,d:1},{x:21,y:41,d:.9}].map((s, i) => (
        <motion.circle key={i} cx={s.x} cy={s.y} r={2.4} fill="#fffbe7"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 + s.d, delay: i * 0.7 }} />
      ))}
    </svg>
  );
}

export function AnimatedPartlyCloudy() {
  // Sun with a cloud drifting past
  return (
    <svg viewBox="0 0 64 55" width={89} height={70} fill="none">
      {/* Sun */}
      <motion.circle cx="33" cy="27" r="10" fill="#fde887"
        animate={{ scale: [1, 1.13, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
      {/* Sun rays */}
      <g>
        {[...Array(6)].map((_, i) => (
          <motion.rect key={i} x="32" y="10" width="2" height="7" rx="1" fill="#fde887" style={{ originX: 33, originY: 27 }} animate={{ rotate: 60 * i }} transition={{ rotate: { delay: 0 } }} />
        ))}
      </g>
      {/* Cloud drifting */}
      <motion.ellipse cx="41" cy="39" rx="13" ry="7.7" fill="#eaeef6" initial={{ x: 0 }} animate={{ x: [-6, 10, -6] }} transition={{ duration: 6, repeat: Infinity }} style={{ opacity: .95 }} />
      <motion.ellipse cx="29" cy="41" rx="7" ry="5.5" fill="#f7f9fc" initial={{ x: 0 }} animate={{ x: [5, -5, 5] }} transition={{ duration: 7, repeat: Infinity, delay: .5 }} style={{ opacity: .95 }} />
    </svg>
  );
}

// Export all
// (All functions are already exported individually above. This block is deleted to avoid duplicate export errors.)
