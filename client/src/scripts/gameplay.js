export const reveal = (s) => {
  if (!s.visible) {
    s.visible = true;
    if (s.borderMines > 0) return;
    for (let border in s.borders) {
      if (s.borders[border]) reveal(s.borders[border]);
    }
  }
};
