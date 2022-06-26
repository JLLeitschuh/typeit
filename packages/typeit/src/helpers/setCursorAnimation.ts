import { El } from "../types";

const DEFAULT_TIMING_OPTIONS: Partial<AnimationEffectTiming> = {
  iterations: Infinity,
  easing: "steps(2, start)",
  fill: "forwards"
};

const DEFAULT_FRAMES: AnimationKeyFrame[] = [
  { opacity: 0 },
  { opacity: 0 },
  { opacity: 1 },
];

/**
 * Create and return an animation for the cursor.
 */
let setCursorAnimation = ({
  cursor,
  frames = null,
  timingOptions = {},
}: {
  cursor: El;
  frames?: AnimationKeyFrame[] | null;
  timingOptions: Partial<AnimationEffectTiming>;
}) => {
  return cursor.animate(frames || DEFAULT_FRAMES, {
    ...DEFAULT_TIMING_OPTIONS,
    ...timingOptions,
  });
};

export default setCursorAnimation;
