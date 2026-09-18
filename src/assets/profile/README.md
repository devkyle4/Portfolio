# Profile photo folder

Drop your headshot/portrait here (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`)
and it automatically becomes the circular photo in the Hero section — no
code changes needed.

- If more than one image is in this folder, the first one alphabetically is
  used. Keep just one image here to avoid ambiguity.
- Works best as a roughly square, centered headshot (it's displayed in a
  circle and cropped with `object-cover`).
- **Dev server**: while `npm run dev` is running, adding the photo triggers
  an automatic refresh. For the live/production site, run `npm run build`
  again after adding it.

This file itself is ignored (only image files are picked up).
