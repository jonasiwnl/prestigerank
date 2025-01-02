type Theme = {
  background: string;
  text: string;
  link: string;
};

const colorValues = [
  { max: 3, value: 600 },
  { max: 10, value: 400 },
];

export function getColorValue(idx: number): number {
  // Linear search for now - At N=4 it really isn't worth it to do a binary search
  for (const { max, value } of colorValues) {
    if (idx < max) return value;
  }
  return 300;
}
